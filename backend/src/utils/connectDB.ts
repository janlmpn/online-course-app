import { MongoClient } from 'mongodb';

let client: MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:` +
            `${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_URL}/` +
            `?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;
            
export const connectDB = async () => {
  try {
    client = new MongoClient(uri || '', {});
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1);
  }
};

export const getDB = (dbName: string) => {
  if (!client) {
    throw new Error('MongoDB client is not initialized');
  }
  return client.db(dbName);
};

const cleanup = () => { 
  client.close();
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);