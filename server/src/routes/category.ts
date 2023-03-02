import express, { Request, Response } from 'express';
import crudCategory from '../crud/category';
import modelCategory from '../models/category';

const router = express.Router();

router.get('/api/category/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const category = new crudCategory(modelCategory);
  const dbResults = await category.findOne({ _id });

  return res.status(200).send(dbResults);
});

router.get('/api/category', async (req: Request, res: Response) => {
  const category = new crudCategory(modelCategory);
  const dbResults = await category.findMany({});

  return res.status(200).send(dbResults);
});

router.post('/api/category', async (req: Request, res: Response) => {
  const { email, fname, lname } = req.body;

  const category = new crudCategory(modelCategory);
  const dbResults = await category.create({ email, fname, lname });

  return res.status(201).send(dbResults);
});

router.put('/api/category/:_id', async (req: Request, res: Response) => {
  const { _id, email, fname, lname } = req.body;

  const category = new crudCategory(modelCategory);
  const dbResults = await category.update(_id, { email, fname, lname });

  return res.status(201).send(dbResults);
});

router.delete('/api/category/:_id', async (req: Request, res: Response) => {
  const { _id } = req.body;

  const category = new crudCategory(modelCategory);
  const dbResults = await category.delete(_id );

  return res.status(201).send(dbResults);
});

export { router as categoryRouter };
