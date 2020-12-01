const path = require('path'); // Импортирую модуль для работы с путями
const express = require('express'); // Импортирую express
const router = require('./routes/routes'); // Импортирую роутеры

const { PORT = 3000 } = process.env; // Устанавливаю порт
const app = express(); // Запускаю сервер

// Включаю раздачу статичных файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router); // Включаю роутер

// Устанавливаю обработчик на порт
app.listen(PORT, () => {
  console.log(`Сервер работает. Порт: ${PORT}`);
});
