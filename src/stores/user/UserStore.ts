import { observable, action, makeObservable, computed } from "mobx";
import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";
import { create } from "../../services/Api";

export enum SignInResponses {
  Error = "error",
  Ok = "ok",
  NotConfirmed = "NotConfirmed",
}

export interface IUserStore {
  loading: boolean;
  email: string | null;
  signIn: (email: string, password: string) => Promise<SignInResponses>;
  signUp: (email: string, password: string) => Promise<boolean>;
  confirmSignUp: (password: string) => Promise<boolean>;
  resendConfirmationCode: (email?: string) => Promise<boolean>;
  requestPasswordReset: (email: string) => Promise<boolean>;
}

const api = create();

class UserStore implements IUserStore {
  loading = false;
  email: string | null = null;
  cognitoUser: CognitoUser | null = null;
  constructor() {
    makeObservable(this, {
      loading: observable,
      email: observable,
      cognitoUser: observable,
      setLoading: action,
      setEmail: action,
      setCognitoUser: action,
      jwtToken: computed,
    });
  }
  get jwtToken(): string {
    if (!this.cognitoUser) {
      return "";
    }
    const session = this.cognitoUser.getSignInUserSession();
    return session?.getAccessToken().getJwtToken() || "";
  }
  setLoading = (loading: boolean) => {
    this.loading = loading;
  };
  setCognitoUser = (cognitoUser: CognitoUser | null) => {
    this.cognitoUser = cognitoUser;
  };
  setEmail = (email: string | null) => {
    this.email = email;
  };
  signIn = async (email: string, password: string) => {
    let result: SignInResponses = SignInResponses.Error;
    this.setLoading(true);
    try {
      const cognitoUser = await Auth.signIn(email, password);
      this.setCognitoUser(cognitoUser);
      api.setAuthToken(this.jwtToken);

      result = SignInResponses.Ok;
    } catch (e: any) {
      if (e.code === "UserNotConfirmedException") {
        await this.resendConfirmationCode(email);
        this.setEmail(email);
        result = SignInResponses.NotConfirmed;
      }
    } finally {
      this.setLoading(false);
    }
    return result;
  };
  signUp = async (email: string, password: string) => {
    this.setLoading(true);
    let result = false;
    try {
      await Auth.signUp({
        username: email,
        password,
      });
      this.setEmail(email);
      result = true;
    } catch (e) {
      //
    } finally {
      this.setLoading(false);
    }
    return result;
  };
  confirmSignUp = async (code: string) => {
    if (this.email === null) return false;
    this.setLoading(true);
    let result = false;
    try {
      await Auth.confirmSignUp(this.email, code, {
        forceAliasCreation: true,
      });
      result = true;
    } catch (e) {
      //
    } finally {
      this.setLoading(false);
    }
    return result;
  };
  resendConfirmationCode = async (email = this.email) => {
    if (email === null) return false;
    this.setLoading(true);
    let result = false;
    try {
      await Auth.resendSignUp(email);
      result = true;
    } catch (e) {
      //
    } finally {
      this.setLoading(false);
    }
    return result;
  };

  requestPasswordReset = async (email = this.email) => {
    if (email === null) return false;
    this.setLoading(true);
    let result = false;

    try {
      await Auth.forgotPassword(email);

      result = true;
    } catch (e) {
      //
    } finally {
      this.setLoading(false);
    }
    return result;
  };
}

const userStore = new UserStore();

export { userStore };
