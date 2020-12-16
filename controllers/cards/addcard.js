const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю карточку в базу
function addCard(req, res) {
  const { name, link, owner } = req.body; // беру данные из запроса

  // Проверка на корректный запрос, если что то пустое, то:
  if (!name || !link || !owner) {
    return res.status(400).send({ message: 'Некорректный запрос' });
  }

  owner._id = req.user._id; // подставляю в ИД владельца захардкоденный ИД

  return Card.create({ name, link, owner })
    .then((card) => res.status(200).send(card))
    // данные не записались, вернём ошибку
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(404).send({ message: 'Пользователь не найден' });
      }
      return res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` });
    });
}

module.exports = addCard;
