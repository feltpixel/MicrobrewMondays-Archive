module.exports = {
    myBeers: function() {
        var myReviews = [
                {
                    uniqueId:       1,
                    name:          'Beer 4',
                    style:         'Saison/Farmhouse Ale',
                    color:          20,
                    brewery_id:     '1',
                    reviews:        0
                }, {
                    uniqueId:       2,
                    name:          'Beer 7',
                    style:         'IPA',
                    color:          20,
                    brewery_id:     '2',
                    reviews:        0
                }, {
                    uniqueId:       1,
                    name:          'Beer 6',
                    style:         'Stout',
                    color:          20,
                    brewery_id:     '3',
                    reviews:        0
                }, {
                    uniqueId:       4,
                    name:          'Beer 9',
                    style:         'Tripel',
                    color:          20,
                    brewery_id:     '4',
                    reviews:        0
                }
            ];
        return myReviews;
    }
};