const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

// Импорт контроллеров
const getUsers = require('../controllers/users/getusers');
const getUser = require('../controllers/users/getuser');
const getCurUser = require('../controllers/users/getcuruser');
const addUser = require('../controllers/users/adduser');
const updUser = require('../controllers/users/upduser');
const updAvatar = require('../controllers/users/updavatar');

const getCards = require('../controllers/cards/getcards');
const addCard = require('../controllers/cards/addcard');
const delCard = require('../controllers/cards/delcard');
const addLike = require('../controllers/cards/addlike');
const delLike = require('../controllers/cards/dellike');

const notFound = require('../controllers/notfound');
// const { updUserValid } = require('../helpers/validation');

// Устанавливаю обработчики роутеров
// Для пользователя
router.get('/users', getUsers);
router.get('/users/me', getCurUser);
router.get('/users/:userId', getUser);

router.post('/users', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), addUser);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), updUser);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
}), updAvatar);

// Для карточек
router.get('/cards', getCards);

router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required(),
  }),
}), addCard);

router.delete('/cards/:cardId', delCard);
router.put('/cards/:cardId/likes', addLike);
router.delete('/cards/:cardId/likes', delLike);

router.all('*', notFound);

module.exports = router;
