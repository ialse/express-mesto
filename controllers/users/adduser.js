const User = require('../../models/user'); // импортирую модель пользователя

// Добавляю пользователя в базу
function addUser(req, res) {
  return User.create({ ...req.body })
    .then((user) => res.status(200).send(user))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(500).send({ message: err.message });
      }
      return res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` });
    });
}

module.exports = addUser;
