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
  loginWithGoogle: (params) => {
    const url = '/user/login-google-mobile';
    return axiosClient.post(url, params);
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
  resetPassword: (params) => {
    const url = '/user/reset-password';
    return axiosClient.post(url, params);
  },
  changePassword: (params) => {
    const url = '/user/change-password';
    return axiosClient.post(url, params);
  },
  changeUserEmail: (params) => {
    const url = '/user/change-user-email';
    return axiosClient.put(url, params);
  },
  updateFavoriteCate: (params) => {
    const url = '/user/update-favorite-categories';
    return axiosClient.put(url, params);
  },
  getUserRecommendCourse: (params) => {
    const url = `/user/recommend-course/${params.id}/${params.limit}/${params.offset}`;
    return axiosClient.get(url);
  },
};

export default usersApi;
