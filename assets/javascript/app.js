$(document).ready(function() {





	var app = {
	shows: ["Buffy", "Gilmore Girls", "Firefly", "Burn NOtice", "Veronica Mars", "New Girl", "Muppets", "Sherlock"],

	renderButtons: function() {
	$("#buttonsView").empty();

		for(var i = 0; i < app.shows.length; i++) {
			var a = $("<button>");
			$(a).addClass("waves-effect waves-light btn show");
			a.addClass("show");
			a.addClass("btn waves-effect waves-light")
			//$(a).addClass("waves-effect waves-light btn show");
			$(a).attr("data-name", app.shows[i]);
			$(a).text(app.shows[i]);
			$("#buttonsView").append(a);
		};
	}





	};

	$(".add").click(function() {
		var newShow = $("#newShow").val().trim();
		console.log(newShow);
		app.shows.push(newShow);
		app.renderButtons();
		return false;
	});

	$("button").click(function() {
		console.log("clicked");
	});

	$(".show").click(function() {
		console.log("hit");
	//var whatever = $(this).attr("data-name");
	//console.log(whatever);
	//var queryName = whatever.replace(" ", "+");
	//var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + queryName + "&api_key=dc6zaTOxFJmzC";

	//$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
		//console.log(response);
		//console.log(response.data.rating);
		//response.rating
	//});
	});






	$(".add").click(function() {
		var newShow = $("#newShow").val().trim();
		console.log(newShow);
		app.shows.push(newShow);
		app.renderButtons();
		return false;
	});

	$("button").click(function() {
		console.log("clicked");
	});

	$(".show").on("click", function() {
		console.log("hit");
	//var whatever = $(this).attr("data-name");
	//console.log(whatever);
	//var queryName = whatever.replace(" ", "+");
	//var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + queryName + "&api_key=dc6zaTOxFJmzC";

	//$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
		//console.log(response);
		//console.log(response.data.rating);
		//response.rating
	//});

	
	});
	//Carol is a genius
	$(document).on('click', '.show', function () {
        console.log('it works!');
    });


});










