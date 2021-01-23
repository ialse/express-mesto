const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю лайк в массив карточки
function addLike(req, res, next) {
  return Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => {
      if (card) {
        return res.status(200).send(card);
      }
      return res.status(404).send({ message: 'Карточка не найдена' });
    })
    // данные не записались, вернём ошибку
    .catch(next);
}

module.exports = addLike;
