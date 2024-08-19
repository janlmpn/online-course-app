import { Request, Response, NextFunction } from 'express';
import {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../services/courseService';

export const createCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

export const getCoursesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const courses = await getCourses();
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const getCourseByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await getCourseById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    next(error);
  }
};

export const updateCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const course = await updateCourse(req.params.id, req.body);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

export const deleteCourseHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await deleteCourse(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
