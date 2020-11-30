// Импортирую встроенные модули
const express = require('express');
const path = require('path');

// Импортирую роутеры
const router = require('./routes/routes');

const { PORT = 3000 } = process.env;

// Запускаю сервер
const app = express();

// Раздача статичных файлов
app.use(express.static(path.join(__dirname, 'public')));

// Использую роутеры
app.use('/', router);

// Устанавливаю обработчик на порт
app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});

