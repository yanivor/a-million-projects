import fs from 'fs/promises';
import * as sysPath from 'path';
import { BASE_PATH } from '../index';

export const generateHtml = async (post: any) => {
  const { path, title, date, content } = post;

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/template.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{title}}/g, title)
      .replace(/{{date}}/g, date)
      .replace(/{{author}}/g, 'יניב אור')
      .replace(/{{content}}/g, content);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/post-sandbox/${path}.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
