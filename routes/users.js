const routerusers = require('express').Router();
const users = require('../data/users.json');

routerusers.get('/users', (req, res) => {
  res.send(users)
});

module.exports = routerusers;
