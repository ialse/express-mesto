const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю лайк в массив карточки
function delLike(req, res) {
  return Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then(() => res.status(200).send({ message: 'Лайк удален!' }))
    // данные не записались, вернём ошибку
    .catch((err) => {
      return res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` });
    });
}

module.exports = delLike;
