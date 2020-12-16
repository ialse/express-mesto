const mongoose = require('mongoose');
const httpValid = require('../helpers/regexp');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return httpValid(link);
      },
      message: 'Ссылка на аватар некорректная',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
