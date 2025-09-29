/* eslint-disable @typescript-eslint/no-throw-literal */
import axios, { AxiosError } from 'axios';
import { APP_CRYPTO_KEY, APP_TOKEN_AUTH, APP_URL_SERVER } from '../constant/envs';
import { decryptStringAES, encryptStringAES } from '../utils/crypto-util';

export const axiosConfig = axios.create({
  baseURL: APP_URL_SERVER,
  headers: { 'Content-type': 'application/json' }
});

axiosConfig.interceptors.request.use((config) => {
  const timestamp = Date.now();
  const parse = { ...config.data, timestamp };
  const stringify = JSON.stringify(parse);
  const secret = encryptStringAES(stringify, APP_CRYPTO_KEY);
  const bearer = sessionStorage.getItem(APP_TOKEN_AUTH);
  config.headers.Authorization = bearer;
  config.headers['Content-Type'] = 'text/plain';
  config.data = secret;
  return config;
});

axiosConfig.interceptors.response.use(
  (response) => {
    const dataDecrypt = JSON.parse(decryptStringAES(response.data as unknown as string , APP_CRYPTO_KEY));
    if (dataDecrypt.Error) throw dataDecrypt;
    
    return {
      ...response,
      data: dataDecrypt
    };
  },
  (error: AxiosError) => {
    if (error?.status === 500) sessionStorage.removeItem(APP_TOKEN_AUTH);

    if (error?.response?.data) throw error.response.data;

    if (error.response) {
      throw {
        data: error.response.data,
        message: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
        headers: error.response.headers
      };
    } else if(error.request) {
      throw {
        request: error.request
      };
    } else {
      throw error;
    }
  }
);

export const axiosService = axiosConfig;