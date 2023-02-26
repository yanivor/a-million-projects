import puppeteer from 'puppeteer';

const launchConfig = {
  args: ['--disable-features=site-per-process'],
  headless: true,
};

const delay = (time: number) => {
  return new Promise(resolve => { 
    setTimeout(resolve, time)
  });
}

export const getPostsList = async () => {
  const url = 'https://yanivor78.wixsite.com/yanivor/blank/page';
  let allUrls: any = [];

  for (let p=1; p<=7; p++) {
    const browser = await puppeteer.launch(launchConfig);
    const page = await browser.newPage();

    await page.goto(`${url}/${p}`, { waitUntil: "domcontentloaded" });

    const postBlocks: any = await page.$$eval(`
        .gallery-item-container
      `,
      nodes => nodes.map(el => el.innerHTML)
    );

    const results = postBlocks.map((postBlock: string) => {
      let title;
      const titleRegex = new RegExp('(data-hook="post-title"><p class=")([^>]+)(>)([^<]+)');
      const titleMatch = postBlock.match(titleRegex);
      if (titleMatch?.[4]) {
        title = titleMatch[4];
      }

      let date;
      const dateRegex = new RegExp('(<span title=")([^"]+)(")');
      const dateMatch = postBlock.match(dateRegex);
      if (dateMatch?.[2]) {
        date = dateMatch[2];
      }

      let link;
      const linkRegex = new RegExp('(<a href=")([^"]+)(")');
      const linkMatch = postBlock.match(linkRegex);
      if (linkMatch?.[2]) {
        link = linkMatch[2];
      }

      let image;
      const imageRegex = new RegExp('(<img alt=")([^"]+)(" class="gallery-item-visible gallery-item gallery-item-preloaded" data-hook="gallery-item-image-img" data-idx=")([^"]+)(" src=")([^"]+)"');
      const imageMatch = postBlock.match(imageRegex);
      if (imageMatch?.[6]) {
        image = imageMatch[6];
      }

      return {
        title,
        date,
        link,
        image,
      }
    });

    allUrls = [...allUrls, ...results];

    await browser.close();
  }

  return allUrls;
};

export const parsePost = async (url: string) => {
  const browser = await puppeteer.launch(launchConfig);
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  await delay(2000);
  
  const arr = await page.$$eval(`
    .post-content__body span,
    .post-content__body a,
    .post-content__body img,
    .post-content__body iframe
  `,
    nodes => nodes.map(el => {
      if (el.tagName === 'SPAN' && el.textContent) {
        return {
          type: 'p',
          textContent: el.textContent
        };
      } else if (el.tagName === 'A' && el.innerHTML) {
        return {
          type: 'a',
          innerHTML: el.innerHTML,
          href: el.getAttribute('href'),
        };
      } else if (el.tagName === 'IMG') {
        let src = el.getAttribute('src');
        const srcSplitted = src?.split('/');
        src = srcSplitted?.slice(0, 5).join('/') || '';

        return {
          type: 'img',
          src,
        };
      } else if (el.tagName === 'IFRAME') {
        const youtubeRegex = new RegExp("(https://www.youtube.com/embed/)([a-z0-9_-]{11})\?", "i");
        const src = el.getAttribute('src');
        if (src) {
          const youtubeMatches = src.match(youtubeRegex);

          if (youtubeMatches && youtubeMatches?.[2]) {
            return {
              type: 'yt',
              id: youtubeMatches?.[2],
            }
          }
        }

        return {
          type: 'iframe',
          src,
          manual: true,
        };
      }
    })
    .filter((value, index, self) => {
      const _value = JSON.stringify(value);
      return index === self.findIndex(self => {
        if (_value) 
          return JSON.stringify(self) === _value;
      });
    })
  );

  await browser.close();

  return arr;
};
