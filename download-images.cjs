const fs = require('fs');
const https = require('https');
const path = require('path');

const products = [
  { id: 1, q: 'headphones' },
  { id: 2, q: 'ceramic+vase' },
  { id: 3, q: 'leather+backpack' },
  { id: 4, q: 'computer+monitor' },
  { id: 5, q: 'water+bottle' },
  { id: 7, q: 'security+camera' },
  { id: 8, q: 'white+tshirt' },
  { id: 9, q: 'gaming+keyboard' },
  { id: 10, q: 'aviator+sunglasses' },
  { id: 11, q: 'knit+sweater' },
  { id: 12, q: 'coffee+table' },
  { id: 13, q: 'computer+mouse' },
  { id: 14, q: 'tote+bag' },
  { id: 15, q: 'bed+sheets' },
  { id: 16, q: 'denim+jacket' }
];

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function download(id, query) {
  const url = `https://loremflickr.com/800/800/${query},product/all`;
  const dest = path.join(dir, `${id}.jpg`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        https.get(response.headers.location, (res) => {
          const file = fs.createWriteStream(dest);
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading images...');
  for (const p of products) {
    try {
      await download(p.id, p.q);
      console.log(`Downloaded ${p.id}.jpg for ${p.q}`);
    } catch (e) {
      console.log(`Failed for ${p.id}`, e);
    }
  }
  console.log('Done downloading.');
  
  // Update products.json
  const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
  let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  data = data.map(item => {
    if (item.id === 6) return item; // skip broken test
    return { ...item, image: `/images/${item.id}.jpg` };
  });
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Updated products.json to use local images.');
}

run();
