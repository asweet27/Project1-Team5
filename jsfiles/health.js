$(document).ready(function() {
    $.get(url).then(function(data) {
       $("#healthpara-0").text(data.articles[0].content)
       $("#healthimg-0").attr("src", data.articles[0].urlToImage)
       $("#health-0").text(data.articles[0].title)
       $("#healthpara-1").text(data.articles[1].content)
       $("#healthimg-1").attr("src", data.articles[1].urlToImage)
       $("#health-1").text(data.articles[1].title)
       $("#healthpara-2").text(data.articles[2].content)
       $("#healthimg-2").attr("src", data.articles[2].urlToImage)
       $("#health-2").text(data.articles[2].title)
       $("#healthpara-3").text(data.articles[3].content)
       $("#healthimg-3").attr("src", data.articles[3].urlToImage)
       $("#health-3").text(data.articles[3].title)
        //console.log(data.articles)
    });
    $.getJSON(
        "https://covidtracking.com/api/v1/states/info.json",
         function(data) {
             console.log(data);
         }
     );
});