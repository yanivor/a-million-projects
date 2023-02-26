import express, { Request, Response } from 'express';
import crudAuthor from '../crud/author';
import modelAuthor from '../models/author';

const router = express.Router();

router.get('/api/author/:_id', async (req: Request, res: Response) => {
  const { _id } = req.params;

  const author = new crudAuthor(modelAuthor);
  const dbResults = await author.findOne({ _id });

  return res.status(200).send(dbResults);
});

router.get('/api/author', async (req: Request, res: Response) => {
  const author = new crudAuthor(modelAuthor);
  const dbResults = await author.findMany({});

  return res.status(200).send(dbResults);
});

router.post('/api/author', async (req: Request, res: Response) => {
  const { email, fname, lname } = req.body;

  const author = new crudAuthor(modelAuthor);
  const dbResults = await author.create({ email, fname, lname });

  return res.status(201).send(dbResults);
});

router.put('/api/author/:_id', async (req: Request, res: Response) => {
  const { _id, email, fname, lname } = req.body;

  const author = new crudAuthor(modelAuthor);
  const dbResults = await author.update(_id, { email, fname, lname });

  return res.status(201).send(dbResults);
});

router.delete('/api/author/:_id', async (req: Request, res: Response) => {
  const { _id } = req.body;

  const author = new crudAuthor(modelAuthor);
  const dbResults = await author.delete(_id );

  return res.status(201).send(dbResults);
});

export { router as authorRouter };
