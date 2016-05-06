var shows = ["Buffy", "Gilmore Girls", "Firefly", "Burn NOtice", "Veronica Mars", "New Girl", "Muppets", "Sherlock"];


function renderButtons() {
	$("#buttonsView").empty();

	for(var i = 0; i < shows.length; i++) {
		var a = $("<button>");
		a.addClass("wave")
		a.addClass(" btn show");
		a.attr("data-name", shows[i]);
		a.text(shows[i]);
		$("#buttonsView").append(a);
	}
};



$(".add").on("click", function() {
	var newShow = $("#newShow").val().trim();
	console.log(newShow);
	shows.push(newShow);
	renderButtons();
	return false;
})

$(".show").on("click", function() {
	var whatever = $(".data-name").val();//??
	var queryName = whatever.replace(" ", "+");
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + queryName + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryUrl, method:'GET'}).done(function(response) {
		console.log(response.rating)
		//response.rating
	});
});










