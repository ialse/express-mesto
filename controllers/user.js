const path = require('path'); // импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

const pathToFile = path.join(__dirname, '..', 'data', 'users.json');

// Получаю данные пользователя из файла
function getUser(req, res) {
  return getDataFromFile(pathToFile)
    .then((users) => {
      // Ищу в JSON ИД запрашиваемого пользователя
      const user = users.find((item) => item._id === req.params.id);
      if (user) {
        return res.send(user);
      }
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    })
    .catch((err) => res.status(500).send(`Ошибка чтения данных. Подробнее: ${err}`));
}

module.exports = getUser;
