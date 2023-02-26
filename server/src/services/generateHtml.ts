import fs from 'fs/promises';
import * as sysPath from 'path';
import { BASE_PATH } from '../index';

export const generateHtml = async (post: any) => {
  const { path, title, date, content } = post;

  let htmlContent = '';

  content.map((item: any) => {
    switch (item.type) {
      case 'p':
        htmlContent += `<p>${item.textContent}</p>\r\n`;
        break;
      case 'a':
        htmlContent += `<p><a href="${item.href}">${item.innerHTML}</a></p>\r\n`;
        break;
      case 'img':
        htmlContent += `<p><img src="${item.src}" /></p>\r\n`;
        break;
      case 'h3':
        htmlContent += `<h3>${item.textContent}</h3>\r\n`;
        break;
      case 'yt':
        htmlContent += `<p><iframe width="800" height="416" src="https://www.youtube.com/embed/${item.id}" title="Tiamat The Scarred People 2012 Full Album" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>\r\n`;
        break;
      case 'soundcloud':
        htmlContent += `<p><iframe class="soundcloud-embed" height="80" scrolling="no" frameborder="no" allow="autoplay" src="${item.src}"></iframe></p>\r\n`;
        break;
      case 'code-pre':
        htmlContent += `${item.content}<br /><br />\r\n`;
        break;
      case 'code':
        htmlContent += `${item.content}<br /><br />\r\n`;
        break;
    }
  });

  try {
    let template = await fs.readFile(sysPath.join(BASE_PATH, 'data/template.html'), { encoding: 'utf8' });
    template = template
      .replace(/{{title}}/g, title)
      .replace(/{{date}}/g, date)
      .replace(/{{author}}/g, 'יניב אור')
      .replace(/{{content}}/g, htmlContent);

    await fs.writeFile(sysPath.join(BASE_PATH, `../../static-pages/post-sandbox/${path}.html`), template ,{ encoding: 'utf8' });
  } catch (err) {
    console.log(err);
  }
};
