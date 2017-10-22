$(document).ready(function() {
	$("#newQuote").on("click", function() {
		var queryURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=random&filter[posts_per_page]=30";
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
			var post = response.shift();
			var quoteArray = [];
			var randNum = Math.floor(Math.random() * response.length);
			console.log(response[randNum]);
			$("#quote").html(response[randNum].content);
			$("#quote").append(response[randNum].title);
		}); // End of ajax call
	}); // End of on click
}); // No code below here
