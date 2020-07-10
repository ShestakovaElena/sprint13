const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const cardsRouter = require('./routes/cards');

const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '5f046738b13ba00ccc37b926',
  };
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.use('/', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
