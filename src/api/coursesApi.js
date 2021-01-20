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
  getCourseInfo: (params) => {
    const url = '/course/get-course-info';
    return axiosClient.get(url, params);
  },
  getCourseDetail: (params) => {
    const url = `/course/get-course-detail/${params.id}/${params.userId}`;
    return axiosClient.get(url);
  },
  detailWithLesson: (params) => {
    const url = `/course/detail-with-lesson/${params.courseId}`;
    return axiosClient.get(url);
  },
  getProcessCourses: (params) => {
    const url = `/course/process-course/${params.courseId}`;
    return axiosClient.get(url);
  },
  ratingCourse: (params) => {
    const url = `/course/rating-course`;
    return axiosClient.post(url, params);
  },
  getRatingCourse: (params) => {
    const url = `/course/rating-course/${params.courseId}`;
    return axiosClient.get(url);
  },
  reportCourse: (params) => {
    const url = `/course/report-course`;
    return axiosClient.post(url, params);
  },
  searchCourse: (params) => {
    const url = `/course/search`;
    return axiosClient.post(url, params);
  },
  searchAll: (params) => {
    const url = `/course/searchV2`;
    return axiosClient.post(url, params);
  },
  getSearchHistory: () => {
    const url = `/course/search-history`;
    return axiosClient.get(url);
  },
  deleteSearchHistory: (params) => {
    const url = `/course/delete-search-history/${params.id}`;
    return axiosClient.delete(url);
  },
};

export default coursesApi;
