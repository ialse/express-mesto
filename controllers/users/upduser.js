const User = require('../../models/user'); // импортирую модель пользователя

// Получаю данные пользователя из файла
function updUser(req, res) {
  const { name, about } = req.body;

  // проверяем корректность запроса
  if (!name || !about) {
    return res.status(400).send({ message: 'Некорректный запрос' });
  }

  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.status(200).send({ message: `Данные обновлены: ${user.name}, ${user.about}` }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = updUser;
