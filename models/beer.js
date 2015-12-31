var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BeerSchema = new Schema({
    brewery_id:   { type: ObjectId, required: true  },
    beer:         { type: String, required: true  },
    style:        { type: String, required: true  }
});


module.exports = mongoose.model('Beer', BeerSchema);