const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const login = require('./controllers/users/login');
const createUser = require('./controllers/users/adduser');
const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Включаю бодипарсер
app.use(bodyParser.json());

// Включаю раздачу статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

app.post('/signin', login);
app.post('/signup', createUser);

// остальные роуты защищаем миддлварой auth
app.use(auth);
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});
