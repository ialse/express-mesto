const Card = require('../../models/card'); // импортирую модель карточки

// Удаляю лайк из массива карточки
function delLike(req, res) {
  return Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        return res.status(200).send(card);
      }
      return res.status(404).send({ message: 'Карточка не найдена' });
    })
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = delLike;
