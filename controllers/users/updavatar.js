const User = require('../../models/user'); // импортирую модель пользователя

// Получаю данные пользователя из файла
function updAvatar(req, res) {
  const { avatar } = req.body;

  // проверяем корректность запроса
  if (!avatar) {
    return res.status(400).send({ message: 'Некорректный запрос' });
  }

  return User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.status(200).send({ message: `Данные обновлены: ${user.avatar}` }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = updAvatar;
