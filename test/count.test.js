const loader = require('../index');
const fs = require('fs');

fs.readFile('./count.vue', (err, data) => {
  const source = data.toString();
  console.log(loader(source));
})