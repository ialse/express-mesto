const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю карточку в базу
function addCard(req, res, next) {
  const { name, link } = req.body; // беру данные из запроса

  return Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      next(err);
    });
}

module.exports = addCard;
