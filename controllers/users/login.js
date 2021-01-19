const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

function login(req, res) {
  const { email, password } = req.body;
  let userID;

  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      userID = user.id;

      return bcrypt.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      // генерируем уникальный ключ и шифруем его
      const token = jwt.sign(
        { _id: userID },
        'iuerteter87534hjkerbf3k4br43j5',
        { expiresIn: 3600 * 24 * 7 },
      );

      // отправляем пользователю ответ с куками
      res.cookie(
        'jwt',
        token,
        {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        },
      )
        .send({ message: 'Авторизация успешна!' });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
}

module.exports = login;
