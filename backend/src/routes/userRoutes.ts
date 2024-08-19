import { Router } from 'express';
import { getUsersByRoleHandler } from '../controllers/userController';

const router = Router();

router.get('/:role', getUsersByRoleHandler);

export default router;
