const path = require('path'); // импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

// Формирую абсолютный путь до файла JSON
const pathToFile = path.join(__dirname, '..', 'data', 'cards.json');

// Получаю данные карточек из файла
function getCards(req, res) {
  return getDataFromFile(pathToFile)
    .then(cards => {
      if (cards.length) {  // проверяю, есть ли хоть одна карточка
        return res.send(cards);
      }
      return res.send({ "message": "Список карточек пустой" })
    })
    .catch(err => res.status(500).send('Ошибка чтения данных. Подробнее: ' + err))
}

module.exports = getCards;