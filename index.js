const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const mainUrl = 'https://memegen.link/examples';

got(mainUrl).then(response => {
  const $ = cheerio.load(response.body);


  $('img').each((i, img) => {
    const src = img.attribs.src;
    console.log('https://memegen.link' + src);
  });
}).catch(err => {
  console.log(err);
});


