var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ReviewSchema = new Schema({
    brewery_id:   { type: ObjectId },
    beer_id:      { type: ObjectId },
    color:        { type: Number, default: 50  },
    maltaroma:    { type: Array  },
    hopsaroma:    { type: Array  },
    intensity:    { type: Number, default: 50  },
    balance:      { type: Number, default: 50  },
    rating:       { type: Number, required: true  },
    notes:        { type: String },
    user_id:      { type: ObjectId }
});



module.exports = mongoose.model('Review', ReviewSchema);

