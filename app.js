const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Включаю бодипарсер
app.use(bodyParser.json());

// временное решение авторизации
app.use((req, res, next) => {
  req.user = {
    _id: '5fd51fcd9a45e823a0036f67' // ИД пользователя
  };

  next();
});

// Включаю раздачу статичных файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router); // Включаю роутер

app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});
