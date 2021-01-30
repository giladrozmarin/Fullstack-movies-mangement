const mongoose = require ('mongoose')

let Schema = mongoose.Schema;

let MoviesSchema = new Schema({
   
   Name: String,
   Genres: [String],
   Image:  String,
   Premiered: Date
   
});


module.exports = mongoose.model('movies', MoviesSchema )