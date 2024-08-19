import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, deleteCourse } from '../store/courseSlice';
import { AppDispatch, RootState } from '../store/store';
import CourseTable from '../components/CourseTable';
import { useNavigate } from 'react-router-dom';

const CourseListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const courses = useSelector((state: RootState) => state.course.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteCourse(id));
  };

  const handleEdit = (id: string) => {
    navigate(`/course/edit/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Courses</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={() => navigate('/course/new')}
        >
          Add Course
        </button>
      </div>
      <CourseTable courses={courses} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default CourseListPage;
