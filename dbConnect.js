const mongoose = require('mongoose');

const {
  mongodb
} = require('./keys')

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
  })
  .then(db => console.log('DB Conn'))
  .catch(err => console.log(err));

mongoose.set('useCreateIndex', true)