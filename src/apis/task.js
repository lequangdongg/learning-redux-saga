import axiosService from "./../commons/axiosService";
import { API_ENPOINT } from './../constants/index'
const url = "/tasks";
export const getList = () => {
  return axiosService.get(`${API_ENPOINT}${url}`);
};
