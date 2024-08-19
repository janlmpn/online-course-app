import { ObjectId } from 'mongodb';
import { getDB } from '../utils/connectDB';

const COLLECTION_NAME = 'courses';

export const createCourse = async (courseData: any) => {
  const db = getDB(process.env.DB_NAME || '');
  const result = await db.collection(COLLECTION_NAME).insertOne(courseData);
  return result.insertedId;
};

export const getCourses = async () => {
  const db = getDB(process.env.DB_NAME || '');

  const pipeline = [{
    $lookup: {
      from: 'users', // The name of the users collection
      localField: 'instructorId', // Field from the courses collection
      foreignField: '_id', // Field from the users collection
      as: 'instructor' // The field name for the joined data
    }
  },
  {
    $unwind: {
      path: '$instructor',
      preserveNullAndEmptyArrays: true // This keeps courses without a matching instructor
    }
  },
  {
    $project: {
      _id: 1,
      title: 1,
      description: 1,
      category: 1,
      duration: 1,
      price: 1,
      instructor: {
        _id: 1,
        name: 1,
        email: 1
      }
    }
  }];

  return await db.collection(COLLECTION_NAME).aggregate(pipeline).toArray();
};

export const getCourseById = async (id: string) => {
  const db = getDB(process.env.DB_NAME || '');
  return await db
    .collection(COLLECTION_NAME)
    .findOne({ _id: new ObjectId(id) });
};

export const updateCourse = async (id: string, courseData: any) => {
  const db = getDB(process.env.DB_NAME || '');
  courseData.instructorId = new ObjectId(courseData.instructorId)
  const result = await db
    .collection(COLLECTION_NAME)
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: courseData });
  return result;
};

export const deleteCourse = async (id: string) => {
  const db = getDB(process.env.DB_NAME || '');
  return await db
    .collection(COLLECTION_NAME)
    .deleteOne({ _id: new ObjectId(id) });
};
