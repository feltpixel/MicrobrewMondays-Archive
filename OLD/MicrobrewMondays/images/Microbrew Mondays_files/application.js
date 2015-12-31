$(document).ready(function(){

	function hideViews(){
		$('.beers').hide();
		$('.breweries').hide();
		$('.myReviews').hide();
	}

	function hideInfo(){
		$('.breweryInfo').hide();
		$('.beerInfo').hide();
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

	// vote for brewery - make active
	$('.vote').on('click', function(){
		$(this).toggleClass('active');
	});

	// show brewery info on click of list item
	$('.breweries .item').on('click', function(){
		hideInfo();
		$('section.breweryInfo').show();
	});

	// show beer info on click of list item
	$('.beer .item').on('click', function(){
		hideInfo();
		$('section.beerInfo').show();
	});




	// show edit brewery form on click of edit FAB
	$('a.editBrewery').on('click', function(){
		hideInfo();
		$('section.editBrewery').show();
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
		$('section.editBeer').show();
	});

	// show new brewery form on click of + FAB
	$('a.addBrewery').on('click', function(){
		hideInfo();
		$('section.newBrewery').show();
	});

	// hide new brewery form on click of done FAB
	$('section.newBrewery a.done').on('click', function(){
		hideInfo();
		$('section.newBrewery').hide();
		$('section.breweryInfo').show();
	});

	// hide edit brewery form on click of done FAB
	$('section.editBrewery a.done').on('click', function(){
		hideInfo();
		$('section.editBrewery').hide();
		$('section.breweryInfo').show();
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

	// hide new beer form on click of close 
	$('section.newBeer .close').on('click', function(){
		hideInfo();
		$('section.newBeer').hide();
		$('section.beerInfo').show();
	});

});