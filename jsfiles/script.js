$(document).ready(function() {
    var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=6c1e4b0f26f7483c8541930bb8709d77';

    $.get(url).then(function(data) {
        //var content = document.createTextNode(JSON.stringify(data.articles[0]));
       
     
				
       $("#blog-0").text(data.articles[0].title)
       $("#para-0").text(data.articles[0].content)
       $("#img-0").attr("src", data.articles[0].urlToImage)
       $(".links").attr("href",data.articles[0].url)
      
       


       $("#blog-1").text(data.articles[1].title )
       $("#para-1").text(data.articles[1].content)
       $("#img-1").attr("src", data.articles[1].urlToImage)
       $(".links").attr("href",data.articles[1].url)


       $("#blog-2").text(data.articles[2].title)
       $("#para-2").text(data.articles[2].content)
       $("#img-2").attr("src", data.articles[2].urlToImage)
       $(".links").attr("href",data.articles[2].url)
        
        console.log(data.articles)
    


    });

   
});
   

