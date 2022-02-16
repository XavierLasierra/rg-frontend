import { observable, action, makeObservable } from "mobx";

import { Auth } from "aws-amplify";

export interface IUserStore {
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string) => Promise<boolean>;
  confirmSignUp: (password: string) => Promise<boolean>;
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

  login = async (email: string, password: string) => {
    let result = false;
    this.setLoading(true);
    try {
      await Auth.signIn(email, password);
      result = true;
    } catch (e) {
      //
    } finally {
      this.setLoading(false);
    }
    return result;
  };

  signUp = async (email: string, password: string) => {
    this.setEmail(null);
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

      this.setEmail(null);
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
