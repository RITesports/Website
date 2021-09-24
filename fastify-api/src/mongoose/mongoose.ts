import mongoose from 'mongoose';

mongoose.set('debug', true);
mongoose.set('returnOriginal', false);

const username = process.env.MONGO_USERNAME || '';
const password = process.env.MONGO_PASSWORD || '';
const login = username && password && `${username}${password}@`;

const host = process.env.MONGO_HOST || '127.0.0.1';
const port = process.env.MONGO_PORT || '';
const instance = (port && `${host}:${port}`) || host;

const defaultAuthDB = process.env.MONGO_DEFAULT_AUTH_DB || '';
const options = process.env.MONGO_OPTIONS || '';

// https://docs.mongodb.com/manual/reference/connection-string/
const connectToDB = () => mongoose.connect(`mongodb://${login}${instance}/${defaultAuthDB}?${options}`);

export default connectToDB;
