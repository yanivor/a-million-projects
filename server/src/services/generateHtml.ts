import fs from 'fs/promises';
import * as sysPath from 'path';
import { BASE_PATH } from '../index';

const renderCard = ({
  id,
  title,
  date,
  path,
  description,
}:{
  id: string;
  title: string;
  date: string;
  path: string;
  description: string;
}) => `
  <!-- ${path} -->
  <a class="card" href="post/${path}" key=${id}>
    <img class="thumbnail" src="images/thumbnails/${path}.png" />
    <div class="content">
      <div class="date">${date}</div>
      <div class="title">${title}</div>
      <div class="short">${description}</div>
    </div>
  </a>
  `;

export const generateIndex = async (dbResults: any) => {
  let cards = '';

  dbResults.map(({
    id,
    title,
    date,
    path,
    description,
  }:{
    id: string;
    title: string;
    date: string;
    path: string;
    description: string;
  }) => {
    cards += renderCard({
      id,
      title,
      date,
      path,
      description,
    });
  });

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/index.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{cards}}/g, cards);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/index.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }  
};

export const generatePost = async (post: any) => {
  const { path, title, date, content } = post;

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/post.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{title}}/g, title)
      .replace(/{{date}}/g, date)
      .replace(/{{author}}/g, 'יניב אור')
      .replace(/{{content}}/g, content);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/post/${path}.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
