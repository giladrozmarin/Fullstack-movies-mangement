const mongoose = require ('mongoose')

let Schema = mongoose.Schema;

let UserSchema = new Schema({

   MemberId: Schema.Types.ObjectId,
   FirstName: String,
   LastName: String,
   CreatedDate: Date,
   SessionTimeOut: Number
});


module.exports = mongoose.model('users', UserSchema )