const mongoose = require ('mongoose')

let Schema = mongoose.Schema;

let PermissionsSchema = new Schema({
   
    MemberId: Schema.Types.ObjectId,
    Genres: [String]
    
   
});


module.exports = mongoose.model('Permissions', PermissionsSchema )