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

		//$("#gifGallery").append("test");

		$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
			console.log(response);
			

			for(var i = 0; i < response.data.length; i++) {
				console.log(response.data[i].bitly_url);

				//change to a span or display in line
				var b = $("<div>").addClass("giphy section");


				//var test = $("<p>");
				//$(test).append("it works!");
				//$("#gifGallery").append(test);


				var image = $("<img>");
				var image_url = response.data[i].images.fixed_height_small_still.url;
				var gif_url = response.data[i].images.fixed_height_small.mp4;
				$(image).attr("src", image_url);
				$(image).attr("display", "inline");
				$(image).attr("data-state", "still");
				//$(image).addClass("divider section");

				$(b).append(image);

				var rating = response.data[i].rating;
				console.log(rating);
				var c = $("<span>");
				$(c).append("Rating: " + rating).addClass("gif_rating divider");
				$(b).append(c);

				$("#gifGallery").prepend(b);

			}

			



			
	});

		return false;
    });


	$(document).on("click", ".giphy", function() {


		if(this.data-state == "still") {
			$(this).attr("src", gif_url);
			$(this).attr("data-state", "moving");
		} else {
			$(this).attr("src", image_url);
			$(this).attr("data-state", "still");

		}
	});

});












