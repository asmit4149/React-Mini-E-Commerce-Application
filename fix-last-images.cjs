const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');

async function download(url, destName) {
  const dest = path.join(dir, destName);
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res) => {
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading last 2 images...');
  try {
    await download('https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp', '15.webp');
    console.log('Downloaded 15.webp');
  } catch(e) { console.error(e); }
  
  try {
    await download('https://fakestoreapi.com/img/71li-ujtlHZ._AC_UX679_.jpg', '16.jpg');
    console.log('Downloaded 16.jpg');
  } catch(e) { console.error(e); }

  const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
  let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  data = data.map(item => {
    if (item.id === 15) return { ...item, image: '/images/15.webp' };
    if (item.id === 16) return { ...item, image: '/images/16.jpg' };
    return item;
  });
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Updated products.json for items 15 and 16.');
}

run();
