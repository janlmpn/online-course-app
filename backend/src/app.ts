import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import courseRoutes from './routes/courseRoutes';
import userRoutes from './routes/userRoutes';
import { connectDB } from './utils/connectDB';
import { errorHandler } from './utils/errorHandler';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
