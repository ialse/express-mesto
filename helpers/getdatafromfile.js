const fsPromises = require('fs').promises; // импортирую модуль для работы с файловой системой

function getDataFromFiles(pathToFile) {
  return fsPromises.readFile(pathToFile, { encoding: 'utf8' })
    .then((data) => {
      JSON.parse(data); // Если все ок, возвращаем JSON карточек
    })
    .catch((err) => {
      console.log(err); // Если ошибка, то возращаем текст ошибки
    });
}

module.exports = getDataFromFiles;