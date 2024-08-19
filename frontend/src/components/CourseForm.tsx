import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Instructor {
  _id: string;
  name: string;
}

interface CourseFormProps {
  onSubmit: (formData: any) => void;
  course: any;
  instructors: Instructor[];
}

const CourseForm: React.FC<CourseFormProps> = ({
  onSubmit,
  course,
  instructors,
}) => {
  
  const navigate = useNavigate();
  const [title, setTitle] = useState(course?.title || '');
  const [description, setDescription] = useState(course?.description || '');
  const [instructorId, setInstructorId] = useState(course?.instructorId || '');
  const [category, setCategory] = useState(course?.category || '');
  const [duration, setDuration] = useState(course?.duration || '');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, instructorId, category, duration });
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    setTitle(course?.title || '');
    setDescription(course?.description || '');
    setInstructorId(course?.instructorId || '');
    setCategory(course?.category || '');
    setDuration(course?.duration || '');
  }, [course]); 

  return (
    <form id="course-form" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instructor
        </label>
        <select
          value={instructorId}
          onChange={(e) => setInstructorId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        >
          <option value="">Select Instructor</option>
          {instructors.map((instructor) => (
            <option key={instructor._id} value={instructor._id}>
              {instructor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Duration (hours)
        </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {course ? 'Update Course' : 'Add Course'}
        </button>
        <button
          onClick={handleCancel}
          className="bg-transparent hover:bg-blue-500 hover:text-white border border-blue-700 hover:border-transparent text-blue-700 ml-1 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
