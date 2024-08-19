import axios from './api';

export const fetchInstructorsAPI = () => {
  return axios.get('/users/instructor');
};
