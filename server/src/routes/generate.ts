import express, { Request, Response } from 'express';
import crudPost from '../crud/post';
import modelPost from '../models/post';
import { generateHtml } from '../services/generateHtml'; 

const router = express.Router();

router.get('/api/generate/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const post = new crudPost(modelPost);
  const dbResults = await post.findOne({ _id });
  await generateHtml(dbResults);

  return res.status(200).send({ status: 'OK' });
});

router.get('/api/generate', async (req: Request, res: Response) => {
  const post = new crudPost(modelPost);
  const dbResults = await post.findMany({});
  dbResults.map(async (post: any) => {
    await generateHtml(post);
  });
  return res.status(200).send({ status: 'OK' });
});

export { router as generateRouter };
