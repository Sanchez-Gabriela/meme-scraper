const cheerio = require('cheerio');
const got = require('got');
const imageDownloader = require('node-image-downloader');

const mainUrl = 'https://memegen.link/examples';

got(mainUrl).then((response) => {
  const $ = cheerio.load(response.body);

  $('img').each((i, img) => {
    const src = img.attribs.src.split('?')[0];
    const linkString = 'https://memegen.link' + src;
    if (i < 10) {
      console.log(linkString);
      imageDownloader({
        imgs: [
          {
            uri: linkString,
            filename: '0' + i,
          },
        ],
        dest: './memes',
      }).catch(function (err) {
        console.log(err);
      });
    }
  });
});
