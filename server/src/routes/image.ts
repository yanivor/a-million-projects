import express, { Request, Response } from 'express';
import crudImage from '../crud/image';
import modelImage from '../models/image';

const router = express.Router();

router.get('/api/image/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const image = new crudImage(modelImage);
  const dbResults = await image.findOne({ _id });

  return res.status(200).send(dbResults);
});

router.get('/api/image', async (req: Request, res: Response) => {
  const image = new crudImage(modelImage);
  const dbResults = await image.findMany({});

  return res.status(200).send(dbResults);
});

router.post('/api/image', async (req: Request, res: Response) => {
  const { url, name, label } = req.body;

  const image = new crudImage(modelImage);
  const dbResults = await image.create({ url, name, label });

  return res.status(201).send(dbResults);
});

router.put('/api/image/:_id', async (req: Request, res: Response) => {
  const { _id, url, name, label } = req.body;

  const image = new crudImage(modelImage);
  const dbResults = await image.update(_id, { url, name, label });

  return res.status(201).send(dbResults);
});

router.delete('/api/image/:_id', async (req: Request, res: Response) => {
  const { _id } = req.body;

  const image = new crudImage(modelImage);
  const dbResults = await image.delete(_id );

  return res.status(201).send(dbResults);
});

export { router as imageRouter };
