const routeruser = require('express').Router();
const users = require('../data/users.json');
console.log(users[0]);

routeruser.get('/users/:id', (req, res) => {

  // ищем пользователя
  const user = users.find((item) => item._id === req.params.id);

  // если есть, то возвращаем его
  if (user) {
    res.send(user);
    return;
  }

  // если нет пользователя, возвращаем данный JSON
  res.status(404).send(`{ "message": "Нет пользователя с таким id" }`);
});

module.exports = routeruser;
