import { Router } from 'express';
import {
    createCourseHandler,
    getCoursesHandler,
    getCourseByIdHandler,
    updateCourseHandler,
    deleteCourseHandler,
} from '../controllers/courseController';

const router = Router();

router.post('/', createCourseHandler);
router.get('/', getCoursesHandler);
router.get('/:id', getCourseByIdHandler);
router.put('/:id', updateCourseHandler);
router.delete('/:id', deleteCourseHandler);

export default router;
