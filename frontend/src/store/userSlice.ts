import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchInstructorsAPI } from '../services/userService';

export const fetchInstructors = createAsyncThunk('users/fetchInstructors', async () => {
  const response = await fetchInstructorsAPI();
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    instructors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
      });
  }
});

export default userSlice.reducer;