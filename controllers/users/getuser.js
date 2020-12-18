const User = require('../../models/user');

// Получаю данные пользователя из файла
function getUser(req, res) {
  return User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Пользователь не найден' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = getUser;
