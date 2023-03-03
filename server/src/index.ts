import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { MONGO_URL } from './config';
import { postRouter } from './routes/post';
import { authorRouter } from './routes/author';
import { categoryRouter } from './routes/category';
import { codeRouter } from './routes/code';
import { imageRouter } from './routes/image';
import { generateRouter } from './routes/generate';
// import { scrapperRouter } from './routes/scrapper';

const app = express();
app.use(json());
app.use(cors());
app.use(postRouter);
app.use(authorRouter);
app.use(categoryRouter);
app.use(codeRouter);
app.use(imageRouter);
app.use(generateRouter);
// app.use(scrapperRouter);

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database');
});

app.listen(8000, () => {
  console.log('server is listening on port 8000');
});

export const BASE_PATH = __dirname;
