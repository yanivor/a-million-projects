import fs from 'fs/promises';
import * as sysPath from 'path';
import crudPost from '../crud/post';
import modelPost from '../models/post';
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
    <img class="thumbnail" src="https://a-million-projects.com/images/thumbnails/${path}.png" />
    <div class="content">
      <div class="date">${date}</div>
      <div class="title">${title}</div>
      <div class="short">${description}</div>
    </div>
  </a>
  `;

const renderCards = (data: any) => {
  let cards = '';

  data.map(({
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

  return cards;
};

export const generateIndex = async () => {
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
      '63f8f42938470c86cefb7263',
      '63f8f30f38470c86cefb71a1',
      '63f8f31538470c86cefb71a5',
      '63f8f31e38470c86cefb71ab',
      '63f8f34538470c86cefb71c7',
      '63f8f35138470c86cefb71cf',
      '63f8f35338470c86cefb71d1',
      '63f8f35938470c86cefb71d5',
      '63f8f35c38470c86cefb71d7',
      '63f8f35f38470c86cefb71d9',
      '63f8f37338470c86cefb71e7',
      '63f8f46f38470c86cefb7293',
      '63f8f46c38470c86cefb7291',
      '63f8f46338470c86cefb728b',
      '63f8f45038470c86cefb727d',
      '63f8f42d38470c86cefb7265',
      '63f8f3da38470c86cefb722d',
      '63f8f3bd38470c86cefb7219',
      '63f8f3b138470c86cefb7211',
    ]}
  });

  const cards = renderCards(dbResults);

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/index.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{cards}}/g, cards);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/index.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }  
};

export const generatePost = async (postData: any) => {
  const { path, title, date, content } = postData;

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
      '63f8f42938470c86cefb7263',
      '63f8f30f38470c86cefb71a1',
      '63f8f31538470c86cefb71a5',
      '63f8f31e38470c86cefb71ab',
      '63f8f34538470c86cefb71c7',
      '63f8f35138470c86cefb71cf',
      '63f8f35338470c86cefb71d1',
      '63f8f35938470c86cefb71d5',
      '63f8f35c38470c86cefb71d7',
      '63f8f35f38470c86cefb71d9',
      '63f8f37338470c86cefb71e7',
      '63f8f46f38470c86cefb7293',
      '63f8f46c38470c86cefb7291',
      '63f8f46338470c86cefb728b',
      '63f8f45038470c86cefb727d',
      '63f8f42d38470c86cefb7265',
      '63f8f3da38470c86cefb722d',
      '63f8f3bd38470c86cefb7219',
      '63f8f3b138470c86cefb7211',
    ]}
  });

  const cards = renderCards(dbResults);

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/post.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{title}}/g, title)
      .replace(/{{date}}/g, date)
      .replace(/{{author}}/g, 'יניב אור')
      .replace(/{{content}}/g, content)
      .replace(/{{related-posts}}/g, cards);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/post/${path}.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
