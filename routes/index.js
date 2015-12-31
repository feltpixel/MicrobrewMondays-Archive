var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  var db = req.db;
  var breweries = db.get('breweries');
  breweries.find({},{}, function(e, docs){
    res.render('index', { 
      title: 'Microbrew Mondays',
      'breweries': docs 
    });
  });
});


/* GET users page. */
// extracting the db object passedto http request
// fills docs variable with database docs(user data)
// renders page
router.get('/users', function(req, res) {
  var db = req.db;
  var users = db.get('users');
  users.find({},{}, function(e, docs){
    res.render('users', { 
      title: 'Users',
      'users': docs 
    });
  });
});

/* GET breweries page. */
// extracting the db object passedto http request
// fills docs variable with database docs(brewery data)
// renders page
router.get('/breweries', function(req, res) {
  var db = req.db;
  var breweries = db.get('breweries');
  breweries.find({},{}, function(e, docs){
    res.render('breweries', { 
      title: 'Breweries'
    });
  });
});



/* GET new user page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { 
    title: 'New User'
  });
});

/* POST to add new user to db */
router.post('/createuser', function(req, res) {
  var db = req.db;
  var userName = req.body.username;
  var userAnimal = req.body.animal;
  var users = db.get('users');
  users.insert({
    'username' : userName,
    'animal' : userAnimal
  }, function (error, doc) {
    if (error) {
      res.send("Could not create new user.");
    } else {
      res.location('users');
      res.redirect('users');
    }
  });
});


/* POST to add new brewery to db */
router.post('/createbrewery', function(req, res) {
  var db = req.db;
  var field1 = req.body.breweryName;
  var field2 = req.body.address;
  var field3 = req.body.city;
  var field4 = req.body.lastVisited;
  var breweries = db.get('breweries');
  breweries.insert({
    'brewery' : field1,
    'address' : field2,
    'city' : field3,
    'lastVisited': field4,
    'votes': 0
  }, function (error, doc) {
    if (error) {
      res.send("Could not create new brewery.");
    } else {
      res.location('breweries');
    }
  });
});


/* POST to add new brewery to db */
router.post('/createbeer', function(req, res) {
  var db = req.db;
  var field1 = req.body.beerName;
  var field2 = req.body.beerStyle;
  var field3 = req.body.brewery;
  var field4 = req.body.colorRange;
  var field5 = req.body.malt;
  var field6 = req.body.hops;
  var field7 = req.body.intensity;
  var field8 = req.body.balance;
  var field9 = req.body.notes;
  var field10 = req.body.rating;

  var beers = db.get('beers');
  beers.insert({
    'beer' : field1,
    'brewery_id' : field2,
    'style' : field3,
    'color': field4,
    'maltAroma': field5,
    'hopsAroma': field6,
    'intensity': field7,
    'balance': field8,
    'notes': field9,
    'rating': field10,

  }, function (error, doc) {
    if (error) {
      res.send("Could not create new beer review.");
    } else {
      res.location('breweries');
    }
  });
});

module.exports = router;
