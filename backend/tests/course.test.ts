import request from 'supertest';
import app from '../src/app';

jest.mock('mongodb');
jest.mock('../src/utils/connectDB.ts', () => {
  return {
    connectDB: jest.fn(() => {}),
    getDB: jest.fn(()=>{
      return {
        collection: jest.fn(() => ({
          aggregate: jest.fn(() => ({
            toArray: jest.fn(() => Promise.resolve([])),
          })),
          findOne: jest.fn(() => ({
            toArray: jest.fn(() => Promise.resolve([])),
          })),
          insertOne: jest.fn(() => {return { insertedId: 'mockId' }}),
          findOneAndUpdate: jest.fn(() => {return { title: 'Updated Mock Course' }} ),
          deleteOne: jest.fn(() => Promise.resolve({ deletedCount: 1 })),
        })),
      }
    })
  }
})


describe('Course API Endpoints', () => {
  let courseId: string;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new course', async () => {
    const res = await request(app)
      .post('/api/courses')
      .send({});
    expect(res.statusCode).toBe(201);
    expect(res.body).toBe('mockId');
    courseId = res.body._id;
  });

  it('should get all courses', async () => {
    const res = await request(app).get('/api/courses');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body).toEqual([]);  // Since we're mocking, it returns an empty array
  });

  it('should get a course by ID', async () => {
    const res = await request(app).get(`/api/courses/${courseId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(courseId);
  });

  it('should update a course', async () => {
    const res = await request(app)
      .put(`/api/courses/${courseId}`)
      .send({
        title: 'Updated Mock Course',
        description: 'Updated Mock Description',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Updated Mock Course');
  });

  it('should delete a course', async () => {
    const res = await request(app).delete(`/api/courses/${courseId}`);
    expect(res.statusCode).toBe(204);
  });
});
