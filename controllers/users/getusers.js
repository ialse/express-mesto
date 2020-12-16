const User = require('../../models/user');

// Получаю данные пользователей из файла
function getUsers(req, res) {
  return User.find({})
    .then((users) => {
      if (users.length) { // проверяю, есть ли хоть один пользователь
        return res.send(users);
      }
      return res.send({ message: 'Список пользователей пустой' });
    })
    .catch((err) => res.status(500).send(`Ошибка чтения данных. Подробнее: ${err}`));
}

module.exports = getUsers;
