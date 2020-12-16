const User = require('../../models/user'); // импортирую модель пользователя

// Добавляю пользователя в базу
function addUser(req, res) {
  const { name, about, avatar } = req.body; // беру данные из запроса

  // Проверка на корректный запрос, если что то пустое, то:
  if (!name || !about || !avatar) {
    return res.status(400).send({ message: 'Некорректный запрос' });
  }

  return User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ message: `Пользователь создан: ${user.name}, ${user.about}, ${user.avatar}` }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = addUser;
