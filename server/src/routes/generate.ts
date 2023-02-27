import express, { Request, Response } from 'express';
import crudPost from '../crud/post';
import modelPost from '../models/post';
import { generateIndex, generatePost } from '../services/generateHtml'; 

const router = express.Router();

router.get('/api/generateIndex', async (req: Request, res: Response) => {
  const post = new crudPost(modelPost);
  const dbResults = await post.findMany({
    '_id': { $in: [
      '63f8f41538470c86cefb7255',
      '63f8f40138470c86cefb7247',
      '63f8f40f38470c86cefb7251',
      '63f8f30738470c86cefb719b',
      '63f8f3fb38470c86cefb7243',
      '63f8f42438470c86cefb725f',
      '63f8f42638470c86cefb7261',
      '63f8f43438470c86cefb7269',
      '63f8f44538470c86cefb7275',
      '63f8f37038470c86cefb71e5',
      '63f8f42138470c86cefb725d',
      '63f8f41838470c86cefb7257',
      '63f8f31b38470c86cefb71a9',
      '63f8f33a38470c86cefb71bf',
      '63f8f33d38470c86cefb71c1',
      '63f8f34038470c86cefb71c3',
      '63f8f34b38470c86cefb71cb',
      '63f8f34e38470c86cefb71cd',
      '63f8f36538470c86cefb71dd',
      '63f8f37638470c86cefb71e9',
      '63f8f38d38470c86cefb71f9',
      '63f8f39238470c86cefb71fd',
      '63f8f39b38470c86cefb7203',
      '63f8f3ad38470c86cefb720f',
      '63f8f3b438470c86cefb7213',
      '63f8f3b738470c86cefb7215',
      '63f8f3ba38470c86cefb7217',
      '63f8f3c138470c86cefb721b',
      '63f8f3c338470c86cefb721d',
      '63f8f3d438470c86cefb7229',
      '63f8f3d138470c86cefb7227',
      '63f8f3d738470c86cefb722b',
      '63f8f3dd38470c86cefb722f',
      '63f8f3e038470c86cefb7231',
      '63f8f3e338470c86cefb7233',
      '63f8f3e538470c86cefb7235',
      '63f8f40438470c86cefb7249',
      '63f8f40738470c86cefb724b',
      '63f8f40c38470c86cefb724f',
      '63f8f41238470c86cefb7253',
      '63f8f41b38470c86cefb7259',
      '63f8f43038470c86cefb7267',
      '63f8f43638470c86cefb726b',
      '63f8f43938470c86cefb726d',
      '63f8f43c38470c86cefb726f',
      '63f8f43f38470c86cefb7271',
      '63f8f44238470c86cefb7273',
      '63f8f45538470c86cefb7281',
      '63f8f46638470c86cefb728d',
      '63f8f42938470c86cefb7263'
    ]}
  });

  await generateIndex(dbResults);
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

export { router as generateRouter };
