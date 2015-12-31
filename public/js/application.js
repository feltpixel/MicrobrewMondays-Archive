$(document).ready(function(){

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;


	function hideViews(){
		if (width >= 400) {
			$('.beers').hide();
			$('.breweries').hide();
			$('.myReviews').hide();
		} else {
			$('.beers').hide();
			$('.breweries').hide();
			$('.myReviews').hide();
			$('.breweryInfo').hide();
			$('.beerInfo').hide();
			$('.leftPanel').show();
		}
	}

	function hideInfo(){
		if (width >= 400) {
			$('.breweryInfo').hide();
			$('.beerInfo').hide();
			$('section.editBeer').hide();
			$('section.editBrewery').hide();
		} else {
			$('.leftPanel').hide();
			$('.breweryInfo').hide();
			$('section.editBeer').hide();
			$('section.editBrewery').hide();
			$('.beerInfo').hide();
		}
	
		
	}

	function findBrewery() {

	

	}


	$('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 15 // Creates a dropdown of 15 years to control year
  });
     

	

  //  var slider = document.getElementById('test5');
  // 		noUiSlider.create(slider, {
  // 		 start: [20, 80],
		//  connect: true,
		//  step: 1,
		//  range: {
		//  	'min': 0,
		// 	'max': 100
		//  },
		//  format: wNumb({
		//  decimals: 0
  //  	})
  // });


	// view selection in nav bar
	// make view active 
	// then show appropriate list

	$('nav li').on('click', function(){
		$('nav li').removeClass('active');
		$(this).addClass('active');
	});

	$('.beersNav').on('click', function(){
		hideViews();
		$('.beers').show();
	});

	$('.breweryNav').on('click', function(){
		hideViews();
		$('.breweries').show();
	});
		$('.reviewsNav').on('click', function(){
		hideViews();
		$('.myReviews').show();
	});

	// make selected brewery active
	$('.listView.breweries .item').on('click', function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});



	// vote for brewery - make active
	$('.vote').on('click', function(){
		$(this).toggleClass('active');
	});

	// show brewery info on click of list item
	$('.breweries .item').on('click', function(){
		var brewerySelected = $(this).data('id');
		console.log("brewerySelected = "+brewerySelected);
		findBrewery();
		hideInfo();
		$('section.breweryInfo').show();
	});

	// show beer info on click of list item
	$('.beer .item').on('click', function(){
		hideInfo();
		$('section.beerInfo').show();
	});

	// pills on beer form - make active
	$('.pills').on('click', function(){
		$(this).toggleClass('pills-active');
	});



	// show edit brewery form on click of edit FAB
	$('a.editBrewery').on('click', function(){
		hideInfo();
		$('section.editBrewery').show();
	});

	// hide edit brewery form on click of save button
	$('section.editBrewery .cancel').on('click', function(){
		hideInfo();
		$('section.editBrewer').hide();
		$('section.breweryInfo').show();
	});	

	$('section.editBrewery .done').on('click', function(){
		hideInfo();
		$('section.editBrewer').hide();
		$('section.breweryInfo').show();
	});	


	// show new beer form on click of rate a beer link
	$('a.rate').on('click', function(){
		hideInfo();
		$('section.newBeer').show();
	});

	// hide new beer form on click of done FAB
	$('section.newBeer a.done').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.beerInfo').show();
	});

	// hide new beer form on click of done FAB
	$('section.editBeer a.done').on('click', function(){
		hideInfo();
		$('section.editBeer').hide();
		$('section.beerInfo').show();
	});	

	

	// show edit beer form on click of edit FAB
	$('a.editBeer').on('click', function(){
		hideInfo();
		$('section.newBeer').show();
	});

	// show new brewery form on click of + FAB
	$('a.addBrewery').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.editBrewery').hide();
		$('section.newBrewery').show();
	});

	// hide new brewery form on click of done FAB
	$('section.newBrewery input.done').on('click', function(){
		hideInfo();
		$('section.newBrewery').hide();
		$('section.breweryInfo').show();
	});

	$('section.newBrewery input.cancel').on('click', function(){
		hideInfo();
		$('section.newBrewery').hide();
		$('.leftPanel').show();
	});

	// hide edit brewery form on click of done FAB
	$('section.editBrewery a.done').on('click', function(){
		hideInfo();
		$('section.editBrewery').hide();
		$('section.breweryInfo').show();
	});

	$('section.newBeer input.cancel').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.beerInfo').show();
	});

	$('section.newBeer input.done').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.beerInfo').show();
	});


	// close buttons on headers
	// hide new brewery form on click of close 
	$('section.newBrewery .close').on('click', function(){
		hideInfo();
		$('section.newBrewery').hide();
		$('section.breweryInfo').show();
	});
	
	// hide edit brewery form on click of close 
	$('section.editBrewery .close').on('click', function(){
		hideInfo();
		$('section.editBrewery').hide();
		$('section.breweryInfo').show();
	});

	// hide edit beer form on click of close 
	$('section.editBeer .close').on('click', function(){
		hideInfo();
		$('section.editBeer').hide();
		$('section.beerInfo').show();
	});

	// hide beer info on click of close 
	$('section.beerInfo .close').on('click', function(){
		hideInfo();
		$('section.beerInfo').hide();
		$('section.breweryInfo').show();
	});

	// hide new beer form on click of close 
	$('section.newBeer .close').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.beerInfo').show();
	});





   // typeahead jQuery plugin
	var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substringRegex;

	    // an array that will be populated with substring matches
	    matches = [];

	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');

	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        matches.push(str);
	      }
	    });

	    cb(matches);
	  };
	};

	var styles = ['Amber Ale', 'Barley Wine', 'Belgian', 'Belgian Dubbel', 'Belgian Golden Strong', 'Belgian Tripel',
	  'Bière de Garde', 'Bitter', 'Black Ale', 'Black IPA', 'Blonde Ale', 'Bock',
	  'Brown Ale', 'Chile Beer', 'Cream Ale', 'Doppelbock', 'Dunkel', 'Dunkelweizen', 'Eisbock',
	  'Flanders Red Ale', 'Fruit Beer', 'Golden Ale', 'Golden Strong Ale', 'Gose',
	  'Gueze', 'Hefeweizen', 'Helles', 'Imperial IPA', 'IPA', 'Irish Red Ale',
	  'Kölsch', 'Lambic', 'Maibock', 'Marzen', 'Oktoberfestbier',
	  'Oud Bruin', 'Pale Ale', 'Pilsner', 'Porter', 'Pumpkin Ale',
	  'Quadrupel', 'Red Ale', 'Rye Beer', 'Saison/Farmhouse Ale', 'Schwarzbier', 'Scotch Ale',
	  'Smoked Beer', 'Stout', 'Table Beer', 'Trappist', 'Wheat', 'White Beer', 'Wild Ale', 'Witbier'
	];

	$('#the-basics .typeahead').typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'styles',
	  source: substringMatcher(styles)
	});

});