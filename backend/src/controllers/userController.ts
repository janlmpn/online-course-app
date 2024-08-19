import { Request, Response, NextFunction } from 'express';
import { getUsersByRole } from '../services/userService';

export const getUsersByRoleHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsersByRole(req.params.role);
    res.json(users);
  } catch (error) {
    next(error);
  }
};