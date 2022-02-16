import { observable, action, makeObservable } from "mobx";

import { Auth } from "aws-amplify";

export enum SignInResponses {
  Error = "error",
  Ok = "ok",
  NotConfirmed = "NotConfirmed",
}

export interface IUserStore {
  loading: boolean;
  signIn: (email: string, password: string) => Promise<SignInResponses>;
  signUp: (email: string, password: string) => Promise<boolean>;
  confirmSignUp: (password: string) => Promise<boolean>;
  resendConfirmationCode: (email?: string) => Promise<boolean>;
}

class UserStore implements IUserStore {
  loading = false;
  email: string | null = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      email: observable,
      setLoading: action,
      setEmail: action,
    });
  }

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  setEmail = (email: string | null) => {
    this.email = email;
  };

  signIn = async (email: string, password: string) => {
    let result: SignInResponses = SignInResponses.Error;
    this.setLoading(true);
    try {
      await Auth.signIn(email, password);

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
    console.log(this.email);
    if (this.email === null) return false;
    this.setLoading(true);
    let result = false;
    try {
      await Auth.confirmSignUp(this.email, code, {
        forceAliasCreation: true,
      });

      this.setEmail(null);
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
}

const userStore = new UserStore();

export { userStore };
