import axios, { AxiosInstance } from "axios";

import { AwsRoutes } from "./AwsRoutes";

interface AWSApiInstance extends AxiosInstance {
  token: string;
  setAuthToken: (token: string) => void;
  getAuthToken: () => string;
  getMe(): Promise<any>;
  getAccount(userId: string): Promise<any>;
}

let instance: AWSApiInstance;

const create = (baseURL = process.env.API_BASE_URL): AWSApiInstance => {
  if (instance) {
    return instance;
  }
  const api = axios.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
      Accept: "application/json; version=0",
      "Content-Type": "application/json",
    },
    timeout: 15000,
  }) as AWSApiInstance;

  api.token = "";

  api.setAuthToken = token => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.token = token;
  };

  api.getAuthToken = () => api.token;

  api.getMe = () => {
    return api.get(AwsRoutes.users);
  };

  api.getAccount = (userId: string) => {
    return api.get(`${AwsRoutes.users}/${userId}`);
  };

  instance = api;

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return instance;
};

export { create };
