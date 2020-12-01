const router = require('express').Router(); // Импортирую модуль роутера

// Импортирую контроллеры
const getUsers = require('../controllers/users');
const getUser = require('../controllers/user');
const getCards = require('../controllers/cards');
const notFound = require('../controllers/notfound');

// Устанавливаю обработчики
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.get('/cards', getCards);
router.get('/*', notFound);

module.exports = router;
