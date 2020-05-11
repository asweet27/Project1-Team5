$(document).ready(function() {
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://therundown-therundown-v1.p.rapidapi.com/affiliates",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "therundown-therundown-v1.p.rapidapi.com",
		"x-rapidapi-key": "d804c04976msh18a08f0fc4a2fb7p13ce10jsn7b18c322993f"
	}
}
$.ajax(settings).done(function (response) {
    console.log(response);

});
});

