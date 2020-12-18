const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю карточку в базу
function addCard(req, res) {
  const { name, link } = req.body; // беру данные из запроса

  return Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` });
    });
}

module.exports = addCard;
