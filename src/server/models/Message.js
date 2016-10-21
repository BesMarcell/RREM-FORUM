'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var messageSchema = mongoose.Schema({
  id: String,
  text: String,
  user: Object,
  time: String,
  reply:String
});

module.exports = mongoose.model('Message', messageSchema);
