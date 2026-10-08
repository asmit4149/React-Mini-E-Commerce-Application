const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

data = data.map(item => {
  if (item.id === 6) return item;
  if (item.id === 15) return { ...item, image: 'https://picsum.photos/seed/bedsheets1/800/800' };
  if (item.id === 16) return { ...item, image: 'https://fakestoreapi.com/img/71li-ujtlHZ._AC_UX679_.jpg' };
  
  return { ...item, image: `/images/${item.id}.jpg` };
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Updated products.json with final highly-reliable images.');
