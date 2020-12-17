const User = require('../../models/user');

// Получаю данные пользователей из файла
function getUsers(req, res) {
  return User.find({})
    .then((users) => res.send(users))
    .catch((err) => res.status(500).send(`Ошибка чтения данных. Подробнее: ${err}`));
}

module.exports = getUsers;
