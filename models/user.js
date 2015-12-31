var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    username:     { type: String  },
    email:        { type: String  }
});


module.exports = mongoose.model('User', UserSchema);