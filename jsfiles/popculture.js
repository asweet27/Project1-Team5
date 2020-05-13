
$(document).ready(function() {
    var url = 'https://api.breakingapi.com/news?' +
    'api_key=2825802972084EA68F6340650311FDC9' +
    'demo&type=headlines&source=tmz';



    $.get(url).then(function(data) {
        //var content = document.createTextNode(JSON.stringify(data.articles[0]));
  
        console.log(data)
				
        $("#popTitle-0").text(data.articles[0].title)
        $("#poppara-0").text(data.articles[0].description) //substring here based on the three periods
        $("#popimg-0").attr("src", data.articles[0].urlToImage)
        $("#link-0").attr("href",data.articles[0].url)
       
 
        $("#popTitle-1").text(data.articles[1].title )
        $("#poppara-1").text(data.articles[1].description)
        $("#popimg-1").attr("src", data.articles[1].urlToImage)
        $("#link-1").attr("href",data.articles[1].url)
 
 
        $("popTitle").text(data.articles[2].title)
        $("#poppara-2").text(data.articles[2].description)
        $("#popimg-2").attr("src", data.articles[2].urlToImage)
        $("#link-2").attr("href",data.articles[2].url)
 
        
 
        
         
         console.log(data.articles)
     


    });

   
});
   