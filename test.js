const mongoose = require('mongoose');
const schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const photoSchema = new schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', photoSchema);

//create photo
Photo.create({
  title: 'Photo 1',
  description: 'Photo 1 description lorem ipsum',
});
