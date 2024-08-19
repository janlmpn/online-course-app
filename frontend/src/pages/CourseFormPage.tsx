import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import { fetchCourse, createCourse, updateCourse } from '../store/courseSlice';
import { fetchInstructors } from '../store/userSlice';
import CourseForm from '../components/CourseForm';

const CourseFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  let courseState = useSelector((state: RootState) => state.course.selectedCourse) ;
  const course = id ? courseState : null;
  const instructors = useSelector((state: RootState) => state.user.instructors);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourse(id));
    }
    dispatch(fetchInstructors());
  }, [dispatch, id]);

  const handleSubmit = async (formData: any) => {
    if (id) {
      await dispatch(updateCourse({id, course: formData}));
    } else {
      await dispatch(createCourse(formData));
    }
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Course' : 'Add Course'}</h1>
      <CourseForm onSubmit={handleSubmit} course={course} instructors={instructors} />
    </div>
  );
};

export default CourseFormPage;
