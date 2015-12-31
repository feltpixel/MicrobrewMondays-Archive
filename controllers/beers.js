var Models = require('../models'),
    BeerModel = require('../models').Beer;



module.exports = {
    index: function(req, res) {
        var viewModel = {
            breweries: [],
            beers: [],
            reviews: [],
            users:[]    
        };

        BeerModel.find({}, {}, { sort: { beer: 1 }},
            function(err, beers) {
                if (err) { throw err; }

                    viewModel.beers = beers;
                    res.render('index', viewModel);
            });
    }
        
};

/*module.exports = {
    index: function(req, res) {
        
        var viewModel = {
            beer: {
                    uniqueId:       1,
                    name:          'Beer 1',
                    style:         'Saison/Farmhouse Ale',
                    color:          20,
                    brewery_id:     '1',
                    reviews:        0
                },
            beers: [
                {
                    uniqueId:       1,
                    name:          'Beer 1',
                    style:         'Saison/Farmhouse Ale',
                    color:          20,
                    brewery_id:     '1',
                    reviews:        0
                }, {
                    uniqueId:       2,
                    name:          'Beer 2',
                    style:         'IPA',
                    color:          20,
                    brewery_id:     '2',
                    reviews:        0
                }, {
                    uniqueId:       1,
                    name:          'Beer 3',
                    style:         'Stout',
                    color:          20,
                    brewery_id:     '3',
                    reviews:        0
                }, {
                    uniqueId:       4,
                    name:          'Beer 4',
                    style:         'Tripel',
                    color:          20,
                    brewery_id:     '4',
                    reviews:        0
                }
            ]
        };

        res.render('beers', viewModel);


    }
};
*/


