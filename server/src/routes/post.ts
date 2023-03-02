import express, { Request, Response } from 'express';
import crudPost from '../crud/post';
import modelPost from '../models/post';

const router = express.Router();

router.get('/api/post/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const post = new crudPost(modelPost);
  const dbResults = await post.findOne({ _id });

  return res.status(200).send(dbResults);
});

router.get('/api/post', async (req: Request, res: Response) => {
  const post = new crudPost(modelPost);
  const dbResults = await post.findMany({});

  return res.status(200).send(dbResults);
});

router.post('/api/post', async (req: Request, res: Response) => {
  const { title, date, path, image, content, authorId } = req.body;

  const post = new crudPost(modelPost);
  const dbResults = await post.create({ title, date, path, image, content, authorId });

  return res.status(201).send(dbResults);
});

router.put('/api/post/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { categoryId, description, content } = req.body;
  // const { title, date, path, image, content, authorId } = req.body;


  const post = new crudPost(modelPost);
  const dbResults = await post.update({ _id }, { categoryId, description, content });
  // const dbResults = await post.update({ _id }, { title, date, path, image, content, authorId });

  return res.status(201).send(dbResults);
});

router.delete('/api/post/:_id', async (req: Request, res: Response) => {
  const { _id } = req.body;

  const post = new crudPost(modelPost);
  const dbResults = await post.delete(_id );

  return res.status(201).send(dbResults);
});

export { router as postRouter };
