var Models = require('../models'),
    BreweryModel = require('../models').Brewery,
    BeerModel = require('../models').Beers;


module.exports = {
    index: function(req, res) {
        var viewModel = {
            breweries: [],
            beers: [],
            reviews: [],
            users:[]    
        };

        BreweryModel.find({"_id": selectedBrewery}, {},
            function(err, breweries) {
                if (err) { throw err; }

                    viewModel.breweries = breweries;
                    res.render('index', viewModel);
            });
    }
        
};
