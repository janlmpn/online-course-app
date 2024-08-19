import { ObjectId } from 'mongodb';
import { getDB } from '../utils/connectDB';

const COLLECTION_NAME = 'users';

export const getUsersByRole = async (role: string) => {
  const db = getDB(process.env.DB_NAME || '');
  const data = await db.collection(COLLECTION_NAME);
  const query = { role: { $eq: role } };
  return await data.find(query, {}).toArray();
};

