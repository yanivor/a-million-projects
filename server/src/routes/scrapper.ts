import express, { Request, Response } from 'express';
import crudPost from '../crud/post';
import modelPost from '../models/post';
import { getPostsList, parsePost } from '../services/wixScrapper'; 

const router = express.Router();

router.get('/api/scrapper', async (req: Request, res: Response) => {
  const allPosts = await getPostsList();

  const numPosts = allPosts.length;

  for (let i=0; i<numPosts; i++) {
    const postData = await parsePost(allPosts[i].link);

    const splittedUrl = allPosts[i].link.split('/');

    const title = allPosts[i].title;
    const date = allPosts[i].date;
    const path = splittedUrl[splittedUrl.length - 1];
    const image = allPosts[i].image;
    const content = postData;
    const authorId = '63eda4297b8f5a2735bcf2a1';

    const post = new crudPost(modelPost);
    await post.create({ title, date, path, image, content, authorId });
  }

  return res.status(200).send({ status: 'OK' });
});

export { router as scrapperRouter };
