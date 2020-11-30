const path = require('path'); // импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

pathToFile = path.join(__dirname, '..', 'data', 'cards.json');

function getCards(req, res) {
  return getDataFromFile(pathToFile)
    .then(cards => { res.send(cards); })
    .catch(err => { res.status(500).send(err) })
}

module.exports = getCards;