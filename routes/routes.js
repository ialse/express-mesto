const router = require('express').Router();

// Импортирую контроллеры
const getUsers = require('../controllers/users/getusers');
const getUser = require('../controllers/users/getuser');
const addUser = require('../controllers/users/adduser');
const updUser = require('../controllers/users/upduser');
const updAvatar = require('../controllers/users/updavatar');

const getCards = require('../controllers/cards/getcards');
const addCard = require('../controllers/cards/addcard');
const delCard = require('../controllers/cards/delcard');
const addLike = require('../controllers/cards/addlike');
const delLike = require('../controllers/cards/dellike');

const notFound = require('../controllers/notfound');

// Устанавливаю обработчики роутеров
router.get('/users', getUsers);
router.get('/users/:userId', getUser);
router.post('/users', addUser);
router.patch('/users/me', updUser);
router.patch('/users/me/avatar', updAvatar);

router.get('/cards', getCards);
router.post('/cards', addCard);
router.delete('/cards/:cardId', delCard);
router.put('/cards/:cardId/likes', addLike);
router.delete('/cards/:cardId/likes', delLike);

router.all('*', notFound);

module.exports = router;
