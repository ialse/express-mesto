/*const { celebrate, Joi } = require('celebrate');

function addUserValid() {
  return celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  });
}

function updUserValid() {
  console.log('updUserValid');
  return celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      about: Joi.string().required().min(2).max(30),
    }),
  });
}

module.exports.updUserValid = updUserValid;

/*= {
  addUserValid,
  updUserValid,
};*/
