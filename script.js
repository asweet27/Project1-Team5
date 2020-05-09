$(document).ready(function() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6c1e4b0f26f7483c8541930bb8709d77';

    $.get(url).then(function(data) {
        //var content = document.createTextNode(JSON.stringify(data.articles[0]));
       $("#para-0").text(data.articles[0].content)
       $("#img-0").attr("src", data.articles[0].urlToImage)
        console.log(data.articles)
    });
});
   

