const User = require('../../models/user'); // импортирую модель пользователя

// Получаю данные пользователя из файла
function addUser(req, res) {
  return User.create({ ...req.body })
    .then((user) => res.status(200).send({ message: `Пользователь создан: ${user}` }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = addUser;
