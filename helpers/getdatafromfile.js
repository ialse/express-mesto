const fsPromises = require('fs').promises; // импортирую модуль для работы с файловой системой

function getDataFromFile(pathToFile) {
  return fsPromises.readFile(pathToFile, { encoding: 'utf8' })
    .then((data) => JSON.parse(data)); // Если все ок, возвращаем JSON карточек
}

module.exports = getDataFromFile;
