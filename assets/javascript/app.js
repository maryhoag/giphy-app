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




	//Carol is a genius
	$(document).on('click', '.show', function () {
		//$("#gifGallery").empty();
        console.log('it works!');
        var whatever = $(this).attr("data-name");
		console.log(whatever);
		var queryName = whatever.replace(" ", "+");
		var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + queryName + "&api_key=dc6zaTOxFJmzC&limit=10";

		$("#gifGallery").append("test");

		$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
			console.log(response);
			

			for(var i = 0; i < response.data.length; i++) {
				console.log(response.data[i].bitly_url);


				var b = $("<div>").addClass("col s2");

				var test = $("<p>");
				$(test).append("it works!");
				$("#gifGallery").append(test);


				var rating = response.data[i].rating;
				console.log(rating);
				var c = $("<p>");
				$(c).append(rating).addClass("gif_rating");
				$(b).append(c);


				var image = $("<img>");
				var image_url = response.data[i].images.fixed_height.url;
				var gif_url = response.data[i].images.fixed_height.mp4;
				$(image).attr("src", image_url);

				$(b).append(image);

				$("#gifGallery").prepend(b);

			}

			



			
	});

		return false;
    });

});












