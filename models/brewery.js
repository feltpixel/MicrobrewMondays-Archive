var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');

var BrewerySchema = new Schema({
    brewery:          { type: String, required: true },
    address:          { type: String, required: true },
    city:             { type: String, required: true },
    votes:            { type: Number, 'default': 0 },
    logo:             { type: String },
    lastvisited:      { type: Date }
});


module.exports = mongoose.model('Brewery', BrewerySchema);
