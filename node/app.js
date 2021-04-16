const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/bookApi')
const bookRouter = express.Router();
const port = process.env.PORT || 4000;
const Book = require('./models/BookModel');

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(books);
      }
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon Api!');
});

app.listen(port, () => {
  console.log(`Running on port:  ${port}`);
});
