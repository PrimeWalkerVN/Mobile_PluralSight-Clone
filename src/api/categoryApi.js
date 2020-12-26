import axiosClient from './axiosClient';

const categoryApi = {
  getAllCategory: () => {
    const url = `/category/all`;
    return axiosClient.get(url);
  },
  getDetailCategory: (params) => {
    const url = `/category/${params.id}`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
