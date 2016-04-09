var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Entry = new Schema({
  title: {type: String, required: true},
  text: {type: String, required: true},
  filename: {type: String},
  updated_at: Date
});

mongoose.model( 'Entry', Entry );
mongoose.connect( 'mongodb://localhost/agalma' );
