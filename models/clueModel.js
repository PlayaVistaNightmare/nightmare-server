const mongoose = require('mongoose')
const config = require('../config')

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise
mongoose.connect(config.dbUri);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const clueSchema = new Schema({
  description: String,
  long: Number,
  lat: Number,
  place_name: String,
  radius: Number,
  created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Clue', clueSchema);

