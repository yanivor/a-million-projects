import express, { Request, Response } from 'express';
import crudCode from '../crud/code';
import modelCode from '../models/code';

const router = express.Router();

router.get('/api/code/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const code = new crudCode(modelCode);
  const dbResults = await code.findOne({ _id });

  return res.status(200).send(dbResults);
});

router.get('/api/code', async (req: Request, res: Response) => {
  const code = new crudCode(modelCode);
  const dbResults = await code.findMany({});

  return res.status(200).send(dbResults);
});

router.post('/api/code', async (req: Request, res: Response) => {
  const { content, name, type } = req.body;

  const code = new crudCode(modelCode);
  const dbResults = await code.create({ content, name, type });

  return res.status(201).send(dbResults);
});

router.put('/api/code/:_id', async (req: Request, res: Response) => {
  const { _id, content, name, type } = req.body;

  const code = new crudCode(modelCode);
  const dbResults = await code.update(_id, { content, name, type });

  return res.status(201).send(dbResults);
});

router.delete('/api/code/:_id', async (req: Request, res: Response) => {
  const { _id } = req.body;

  const code = new crudCode(modelCode);
  const dbResults = await code.delete(_id );

  return res.status(201).send(dbResults);
});

export { router as codeRouter };
