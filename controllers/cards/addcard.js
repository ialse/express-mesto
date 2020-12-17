const Card = require('../../models/card'); // импортирую модель карточки

// Добавляю карточку в базу
function addCard(req, res) {
  const { name, link } = req.body; // беру данные из запроса

  // Проверка на корректный запрос, если что то пустое, то:
  if (!name || !link) {
    return res.status(400).send({ message: 'Некорректный запрос' });
  }

  return Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ message: `Карточка создана: ${card.name}, ${card.link}` }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: `Произошла ошибка на сервере: ${err}` }));
}

module.exports = addCard;
