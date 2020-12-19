import axiosClient from './axiosClient';

const usersApi = {
  login: (params) => {
    const url = '/user/login';
    return axiosClient.post(url, params);
  },
  getMe: () => {
    const url = '/user/me';
    return axiosClient.get(url);
  },
  register: (params) => {
    const url = '/user/register';
    return axiosClient.post(url, params);
  },
  loginWithGoogle: () => {
    const url = '/user/login-google-mobile';
    return axiosClient.get(url);
  },
  updateProfile: (params) => {
    const url = '/user/update-profile';
    return axiosClient.put(url, params);
  },
  sendActiveEmail: (params) => {
    const url = '/user/send-activate-email';
    return axiosClient.post(url, params);
  },
  forgotPassword: (params) => {
    const url = '/user/forget-pass/send-email';
    return axiosClient.post(url, params);
  },
};

export default usersApi;
