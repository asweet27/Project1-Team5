$(document).ready(function() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6c1e4b0f26f7483c8541930bb8709d77';
   
    $("#searchBtn").on("click", function() {
        $("#homePage").addClass("hide-content")
        $("#searchResults").removeClass("hide-content")
        var userInput = $("#userSearch").val().trim()
        var searchURL = "https://newsapi.org/v2/everything?q=" + userInput +  "&apiKey=6c1e4b0f26f7483c8541930bb8709d77"
        console.log($("#userSearch").val().trim())
        $.get(searchURL).then(function(data) {
            $("#search-1").text(data.articles[0].title)
            $("#searchpara-1").text(data.articles[0].content)
            $("#searchimg-1").attr("src", data.articles[0].urlToImage)
            $("#result-1").text(data.articles[1].title)
            $("#content-1").text(data.articles[1].content)
            $("#result-2").text(data.articles[2].title)
            $("#content-2").text(data.articles[2].content)
            $("#result-3").text(data.articles[3].title)
            $("#content-3").text(data.articles[3].content)
            $("#result-4").text(data.articles[4].title)
            $("#content-4").text(data.articles[4].content)
            $("#result-5").text(data.articles[5].title)
            $("#content-5").text(data.articles[5].content)
            console.log(data.articles)
        });
    });
});

