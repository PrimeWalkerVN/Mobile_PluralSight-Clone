import axiosClient from './axiosClient';

const coursesApi = {
  getTotalCourses: () => {
    const url = '/course/total-number';
    return axiosClient.get(url);
  },
  getTopSellCourses: (params) => {
    const url = '/course/top-sell';
    return axiosClient.post(url, params);
  },
  getTopRateCourses: (params) => {
    const url = '/course/top-rate';
    return axiosClient.post(url, params);
  },
  getTopNewCourses: (params) => {
    const url = '/course/top-new';
    return axiosClient.post(url, params);
  },
  getUserFavoriteCourses: (params) => {
    const url = '/course/courses-user-favorite-categories';
    return axiosClient.post(url, params);
  },
};

export default coursesApi;
