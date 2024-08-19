import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListPage from './pages/CourseListPage';
import CourseFormPage from './pages/CourseFormPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseListPage/>} />
        <Route path="/course/new" element={<CourseFormPage/>} />
        <Route path="/course/edit/:id" element={<CourseFormPage/>} />
      </Routes>
    </Router>
  );
};

export default App;