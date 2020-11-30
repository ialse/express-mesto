const router = require('express').Router();

const getUsers = require('../controllers/users');
const getUser = require('../controllers/user');
const getCards = require('../controllers/cards');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.get('/cards', getCards);

module.exports = router;