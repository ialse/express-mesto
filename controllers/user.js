const path = require('path'); // импортирую модуль для работы с путями
const getDataFromFile = require('../helpers/getdatafromfile');

pathToFile = path.join(__dirname, '..', 'data', 'users.json');

function getUser(req, res) {
  return getDataFromFile(pathToFile)
    .then(users => {
      const user = users.find(item => item._id === req.params.id);
      res.send(user);
    })
    .catch(err => { res.status(500).send(err) })
}

module.exports = getUser;