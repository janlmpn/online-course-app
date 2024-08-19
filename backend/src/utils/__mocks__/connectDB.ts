// __mocks__/mongodb.ts
const MongoClient = {
  connect: jest.fn(() => Promise.resolve({
    db: jest.fn(() => ({
    })),
    close: jest.fn(),
  })),
};

export { MongoClient };
