const Card = require('../../models/card'); // импортирую модель карточки

// Удаляю карточку из базы
function delCard(req, res, next) {
  return Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Карточка не найдена в базе' });
        return Promise.reject();
      }
      // проверяем, принадлежит ли карточка владельцу
      if (req.user._id === String(card.owner)) {
        return Card.findByIdAndRemove(req.params.cardId);
      }
      return Promise.reject(new Error('Удалять карточку может только ее владелец'));
    })
    .then((card) => {
      if (card) {
        return res.status(200).send({ message: `Удалена карточка: ${card.name}, ${card.link}` });
      }
    })
    .catch(next);
}

module.exports = delCard;
