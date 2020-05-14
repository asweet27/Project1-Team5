$(document).ready(function() {

  function buildArticles (url, id) {
  
    $.get(url).then(function(data) {
      
      data.articles.forEach(function (article) {
        let html = '';
        html += '<div class="sblog-post">'
        html += '<h3>'+article.headline+'</h3>'
        html += '<img class="thumbnail" src="'+article.images[0].url+'">'
        html += '<p>'+article.description+'</p>'
        html += '<a "id="links" href=""target="_blank"> Click here for full article </a>'
        html += '</div>'
        
        $(id).append(html)
      })
    });
  }

  buildArticles('http://site.api.espn.com/apis/site/v2/sports/football/nfl/news', '#articles')
  buildArticles('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news', '#articles')
});

