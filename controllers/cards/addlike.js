const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю лайк в массив карточки
function addLike(req, res) {
  return Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: 'Лайк поставлен!' });
      }
      return res.status(404).send({ message: 'Карточка не найдена' });
    })
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = addLike;
