import React from 'react';

interface Course {
  _id: string;
  title: string;
  instructor: { name: string };
  category: string;
  duration: number;
}

interface CourseTableProps {
  courses: Course[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const CourseTable: React.FC<CourseTableProps> = ({ courses, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2">Title</th>
          <th className="py-2">Instructor</th>
          <th className="py-2">Category</th>
          <th className="py-2">Duration</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course._id}>
            <td className="border px-4 py-2">{course.title}</td>
            <td className="border px-4 py-2">{course.instructor?.name}</td>
            <td className="border px-4 py-2">{course.category}</td>
            <td className="border px-4 py-2">{course.duration} hours</td>
            <td className="border px-4 py-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => onEdit(course._id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onDelete(course._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
