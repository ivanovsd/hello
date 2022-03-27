const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const assetBuffer = new ArrayBuffer(8 * 1e7); // 10 миллионов * 8, 77 Мб
const assetList = Buffer.alloc(32 * 1e7); // 10 миллионов * 32, 306 Мб
let assetCount = 0;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
