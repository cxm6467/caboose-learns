const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon Api!');
});

app.listen(port, () => {
  console.log(`Running on port:  ${port}`);
});
