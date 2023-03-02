import fs from 'fs/promises';
import * as sysPath from 'path';
import { BASE_PATH } from '../index';
import crudPost from '../crud/post';
import modelPost from '../models/post';
import crudCategory from '../crud/category';
import modelCategory from '../models/category';

const renderCategory = ({
  _id,
  title,
}:
{
  _id: string;
  title: string;
}) => `
  <h3 class="category-title">${title}</h3>
  <div class="cards">
    {{cards-${_id}}}
  </div>
`;

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
  let categoryBlock = '';

  const category = new crudCategory(modelCategory);
  const allCategories = await category.findMany({}, null, { order: 1 });

  const post = new crudPost(modelPost);
  const allPosts = await post.findMany({ categoryId: { $ne: null } });

  allCategories.map(({
    _id,
    title
  }:{
    _id: string,
    title: string
  }) => {
      const postsByCategory = allPosts.filter(({
        categoryId,
      }:{
        categoryId: string;
      }) => categoryId == _id.toString());
      
      const cards = renderCards(postsByCategory);  

      categoryBlock += renderCategory({ _id, title });
      categoryBlock = categoryBlock
        .replace(`{{cards-${_id}}}`, cards);
  });

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/index.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{cards-container}}/g, categoryBlock);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/index.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};

export const generatePost = async (postData: any) => {
  const { path, title, date, content, description } = postData;

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/post.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{description}}/g, description)
      .replace(/{{title}}/g, title)
      .replace(/{{date}}/g, date)
      .replace(/{{author}}/g, 'יניב אור')
      .replace(/{{content}}/g, content);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/post/${path}.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
