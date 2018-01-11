$(document).ready(function() {
  $("#newQuote").on("click", function() {
    $("#quote").empty();
    var queryURL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=random&filter[posts_per_page]=30";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var post = response.shift();
      var randNum = Math.floor(Math.random() * response.length);
      console.log(response[randNum]);
      $("#quote").append(response[randNum].content);
      $("#quote").append("<br>" + response[randNum].title);
    }); // End of ajax call
  }); // End of on click
}); // No code below here
