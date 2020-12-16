const Card = require('../../models/card');

// Получаю карточки из базы
function getCards(req, res) {
  return Card.find({})
    .populate('owner')
    .then((cards) => {
      if (cards.length) { // проверяю, есть ли хоть одна карточка
        return res.status(200).send(cards);
      }
      return res.status(404).send({ message: 'Список карточек пустой' });
    })
    .catch((err) => res.status(500).send({ message: `Ошибка чтения данных. Подробнее: ${err}` }));
}

module.exports = getCards;