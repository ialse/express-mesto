const Card = require('../../models/card'); // импортирую модель карточки

// Удаляю карточку из базы
function delCard(req, res) {
  return Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: `Удалена карточка: ${card.name}, ${card.link}` });
      }
      return res.status(404).send({ message: 'Карточка не найдена в базе' });
    })
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = delCard;
