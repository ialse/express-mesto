const User = require('../../models/user');

// Получаю данные пользователя из файла
function updUser(req, res) {
  const { name, about } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    },
  )
    .then((user) => res.status(200).send(user))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` });
    });
}

module.exports = updUser;
