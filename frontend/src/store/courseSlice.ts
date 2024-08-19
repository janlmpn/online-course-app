import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCoursesAPI,
  fetchCourseAPI,
  createCourseAPI,
  updateCourseAPI,
  deleteCourseAPI,
} from '../services/courseService';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await fetchCoursesAPI();
    return response.data;
  }
);

export const fetchCourse = createAsyncThunk(
  'courses/fetchCourse',
  async (id: string) => {
    const response = await fetchCourseAPI(id);
    return response.data;
  }
);

export const createCourse = createAsyncThunk(
  'courses/createCourse',
  async (course: any) => {
    const response = await createCourseAPI(course);
    return response.data;
  }
);

export const updateCourse = createAsyncThunk(
  'courses/updateCourse',
  async ( course : { id: string, course: any }) => {
    const response = await updateCourseAPI(course.id, course.course);
    return response.data;
  }
);

export const deleteCourse = createAsyncThunk(
  'courses/deleteCourse',
  async (id: string) => {
    await deleteCourseAPI(id);
    return id;
  }
);

type SliceState = {
  courses: any[];
  selectedCourse: null;
  status: 'idle';
  error: null;
};

// First approach: define the initial state using that type
const initialState: SliceState = {
  courses: [],
  selectedCourse: null,
  status: 'idle',
  error: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.selectedCourse = action.payload;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex(
          (course: { _id: any }) => course._id === action.payload._id
        );
        state.courses[index] = action.payload;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(
          (course: { _id: string }) => course._id !== action.payload
        );
      });
  },
});

export default courseSlice.reducer;
