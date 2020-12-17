const Card = require('../../models/card');

// Получаю карточки из базы
function getCards(req, res) {
  return Card.find({})
    .populate('owner')
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send({ message: `Ошибка чтения данных. Подробнее: ${err}` }));
}

module.exports = getCards;
