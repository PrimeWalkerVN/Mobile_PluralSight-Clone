import axiosClient from './axiosClient';

const instructorsApi = {
  getInstructors: () => {
    const url = `/instructor`;
    return axiosClient.get(url);
  },
  getDetailInstructors: (params) => {
    const url = `/instructor/detail/${params.id}`;
    return axiosClient.get(url);
  },
};

export default instructorsApi;
