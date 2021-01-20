import axiosClient from './axiosClient';

const paymentApi = {
  enrollFreeCourse: (params) => {
    const url = `/payment/get-free-courses`;
    return axiosClient.post(url, params);
  },
};

export default paymentApi;
