// Импортирую встроенные модули
const express = require('express');
const path = require('path');

// Импортирую роутеры
const users = require('./routes/users.js');
const user = require('./routes/user.js');
const cards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

// Запускаю сервер
const app = express();

// Раздача статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

// Использую роутеры
app.use('/', users);
app.use('/', user);
app.use('/', cards);

// Устанавливаю обработчик на порт
app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});

