const mongoose = require('mongoose');

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
      validator(v) {
        const regex = /^https?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((([a-z-]{2,})*\.([a-z-]{2,}))*))(:\d{2,5})?((\/[-a-zA-Z0-9#_\/\?\.=]*)?)$/;
        return regex.test(v);
      },
      message: 'Введите корректную ссылку',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
