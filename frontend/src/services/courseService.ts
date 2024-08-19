import axios from './api';

export const fetchCoursesAPI = () => {
  return axios.get('/courses');
};

export const fetchCourseAPI = (id: string) => {
  return axios.get(`/courses/${id}`);
};

export const createCourseAPI = (course: any) => {
  return axios.post('/courses', course);
};

export const updateCourseAPI = (course_id: string, course: any) => {
  return axios.put(`/courses/${course_id}`, course);
};

export const deleteCourseAPI = (id: string) => {
  return axios.delete(`/courses/${id}`);
};
