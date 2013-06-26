$(function() {
	$.getJSON("https://generalassemb.ly/api/courses.js?jsonp=?",
		function(data, textStatus, jqXHR){
			var results = {};
			$.each(data, function(index, value) {
				$("#courses ul").append('<li>' + value.title + "</li>");
				results[value.title] = value.id;
			});

			$("#courses ul").on("click", "li", function(event){
				var liId = results[$(this).html()];
				$("#wishlist ul").append("<li>" + $(this).html() + " - " + liId + "</li>");
			});
		});
	
});
