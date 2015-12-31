
var Models = require('../models'),
    BreweryModel = require('../models').Brewery,
    ReviewModel = require('../models').Review,
    BeerModel = require('../models').Beer;


module.exports = {
    index: function(req, res) {
        var viewModel = {
            breweries: [],
            beers: [],
            reviews: [],
            users:[]    
        };

        BreweryModel.find({}, {}, { sort: { brewery: 1 }},
            function(err, breweries) {
                if (err) { throw err; }

                    viewModel.breweries = breweries;
                    res.render('index', viewModel);
            });

        BeerModel.find({}, {}, { sort: { beer: 1 }},
            function(err, beers) {
                if (err) { throw err; }

                    viewModel.beers = beers;
                    res.render('index', viewModel);
            });

        ReviewModel.find({}, {}, { sort: { rating: 1 }},
            function(err, reviews) {
                if (err) { throw err; }

                    viewModel.reviews = reviews;
                    res.render('index', viewModel);
            });
    }
        
};



/*module.exports = {
    index: function(req, res) {
        var viewModel = {
            review:  {
                    uniqueId:       1,
                    userId:          'Sanitas Brewing Co.',
                    rating:         3,
                    avatar:           '/public/images/sanitas.png',
                    color:         34,
                    intensity:     67,
                    balance:      75,
                    notes:        'I love this beer!!' 
                },

            brewery:  {
                    uniqueId:       1,
                    name:          'Sanitas Brewing Co.',
                    votes:         0,
                    logo:           '/public/images/sanitas.png',
                    address:       '123 Main Street',
                    city:          'Broomfield',
                    visited:      'November 19, 2015'
                },

            beer: {
                    uniqueId:       1,
                    name:          'Pink Panther Saison',
                    style:         'Saison/Farmhouse Ale',
                    breweryId:     'Twisted Pine Brewing Co.',
                    reviews:        1
                },

                beers: [
                {
                    uniqueId:       1,
                    name:          'Pink Panther Saison',
                    style:         'Saison/Farmhouse Ale',
                    breweryId:     'Twisted Pine Brewing Co.',
                    reviews:        1
                }, {
                    uniqueId:       2,
                    name:          'Beer 2',
                    style:         'IPA',
                    breweryId:     'Brewery 2',
                    reviews:        2
                }, {
                    uniqueId:       1,
                    name:          'Beer 3',
                    style:         'Stout',
                    breweryId:     'Brewery 3',
                    reviews:        4
                }, {
                    uniqueId:       4,
                    name:          'Beer 4',
                    style:         'Tripel',
                    breweryId:     'Brewery 4',
                    reviews:        5
                }
            ],

            breweries: [
                {
                    uniqueId:       1,
                    name:          'Sanitas Brewing Co.',
                    votes:         0,
                    logo:           '/public/images/sanitas.png',
                    address:       '123 Main Street',
                    city:          'Broomfield',
                    visited:      Date.now
                }, {
                    uniqueId:       2,
                    name:          'Brewery 2',
                    votes:         2,
                    logo:           '/public/images/upslope.png',
                    address:       '123 Main Street',
                    city:          'Broomfield',
                    visited:      Date.now
                }, {
                    uniqueId:       3,
                    name:          'Brewery 3',
                    votes:         1,
                    logo:           '/public/images/twisted.png',
                    address:       '123 Main Street',
                    city:          'Broomfield',
                    visited:      Date.now
                }, {
                    uniqueId:       4,
                    name:          'Brewery 4',
                    votes:         0,
                    logo:           '/public/images/liquid.png',
                    address:       '123 Main Street',
                    city:          'Broomfield',
                    visited:      Date.now
                }
            ]
        };

        res.render('index', viewModel);
            }
};*/



