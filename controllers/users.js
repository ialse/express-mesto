const path = require('path'); // импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

pathToFile = path.join(__dirname, '..', 'data', 'users.json');

function getUsers(req, res) {
  return getDataFromFile(pathToFile)
    .then(users => { res.send(users); })
    .catch(err => { res.status(500).send(err) })
}

module.exports = getUsers;