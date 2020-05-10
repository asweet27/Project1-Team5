

$(document).ready(function() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6c1e4b0f26f7483c8541930bb8709d77';

    $.get(url).then(function(data) {
        console.log(data.articles)

        var xx = document.getElementById("apiText");

//xx.innerHTML += (data.articles);
var content = document.createTextNode(JSON.stringify(data.articles[0]));
xx.appendChild(content);


console.log(content)
    });
});

   

