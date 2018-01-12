// delay code from executing until page has loaded
$(function() {
	
	//Prevent a form submission
	$('form').on('submit', function(event) {
		event.preventDefault();
		// get string value of users input, store user input in var city and convert all input to lowercase
		var city = $('#city-type').val().toLowerCase();
		// specify all possible new york variables and if statment
		if (city == 'nyc' || city == 'new york' || city == 'new york city') {
			// if any of above are entered then show the background of nyc class
			$('body').attr('class', 'nyc');
		// specify all possible sf variables and else if statment
		} else if (city == 'san franciso' || city == 'sf' || city == 'bay area') {
			// if any of above are entered then show the background of sf class
			$('body').attr('class', 'sf');
		// specify all possible la variables and else if statment
		} else if (city == 'los angeles' || city == 'la' || city == 'lax') {
			// if any of above are entered then show the background of la class
			$('body').attr('class', 'la');
		// specify all possible austin variables and else if statment
		} else if (city == 'austin' || city == 'atx') {
			// if any of above are entered then show the background of austin class
			$('body').attr('class', 'austin');
		// specify all possible sydney variables and else if statment
		} else if (city == 'sydney' || city == 'syd') {
			// if any of above are entered then show the background of sydney class
			$('body').attr('class', 'sydney');
		}	

		// reset input field after submitted
		$('#city-type').val('');

	});


	
});
