import axiosClient from './axiosClient';

const lessonApi = {
  getVideoLesson: (params) => {
    const url = `/lesson/video/${params.courseId}/${params.lessonId}`;
    return axiosClient.get(url);
  },
  updateStatus: (params) => {
    const url = `/lesson/update-status`;
    return axiosClient.post(url, params);
  },
  updateCurrentTime: (params) => {
    const url = `/lesson/update-current-time-learn-video`;
    return axiosClient.put(url, params);
  },
};

export default lessonApi;
