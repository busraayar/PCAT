const express = require('express');
const path = require('path');
const app = express();

/* 
const myLogger = (req, res, next) => {
  console.log('middleware log 1');
};
 */

//MIDDLEWARE
app.use(express.static('public'));

// app.use(myLogger);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

let port = 4000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda calisiyor`);
});
