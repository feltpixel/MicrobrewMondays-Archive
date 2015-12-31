var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/NodeExpressApp', function(err, db) {
    console.log('Connected to MongoDB!');

    var collection = db.collection('beers');
    collection.findOne({
        'brewery_id': 'selectedBrewery'
    }, function(err, docs) {
        // console.log(docs.ops.length + ' record inserted.');
        console.log(selectedBrewery);
		db.close();
       
    });
});


