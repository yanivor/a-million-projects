import express, { Request, Response } from 'express';
import crudCode from '../crud/code';
import crudPost from '../crud/post';
import modelCode from '../models/code';
import modelPost from '../models/post';
import {
  generateIndex,
  generatePost,
  generateCode,
} from '../services/generateHtml'; 

const router = express.Router();

router.get('/api/generateIndex', async (req: Request, res: Response) => {
  await generateIndex();
  return res.status(200).send({ status: 'OK' });
});

router.get('/api/generate/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const post = new crudPost(modelPost);
  const dbResults = await post.findOne({ _id });
  await generatePost(dbResults);

  return res.status(200).send({ status: 'OK' });
});

router.get('/api/generate', async (req: Request, res: Response) => {
  const post = new crudPost(modelPost);
  const dbResults = await post.findMany({});
  dbResults.map(async (post: any) => {
    await generatePost(post);
  });
  return res.status(200).send({ status: 'OK' });
});

router.get('/api/generateCode/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const code = new crudCode(modelCode);
  const dbResults = await code.findOne({ _id });
  await generateCode(dbResults);

  return res.status(200).send({ status: 'OK' });
});

router.get('/api/generateCode', async (req: Request, res: Response) => {
  const code = new crudCode(modelCode);
  const dbResults = await code.findMany({});
  dbResults.map(async (code: any) => {
    await generateCode(code);
  });
  return res.status(200).send({ status: 'OK' });
});

export { router as generateRouter };
