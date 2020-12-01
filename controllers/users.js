const path = require('path'); // Импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

// Формирую абсолютный путь до файла JSON
const pathToFile = path.join(__dirname, '..', 'data', 'users.json');

// Получаю данные пользователей из файла
function getUsers(req, res) {
  return getDataFromFile(pathToFile)
    .then(users => {
      if (users.length) { // проверяю, есть ли хоть один пользователь
        return res.send(users);
      }
      return res.send({ "message": "Список пользователей пустой" })
    })
    .catch(err => res.status(500).send('Ошибка чтения данных. Подробнее: ' + err))
}

module.exports = getUsers;