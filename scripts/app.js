
$("#homeButton").click(function() {
	$('html, body').animate({
        scrollTop: $("#banner").offset().top},
        1300);
});
		
$("#aboutButton").click(function() {
	$('html, body').animate({
       	scrollTop: $("#about").offset().top},
       	1300);
});

$("#projectsButton").click(function() {
    $('html, body').animate({
       	scrollTop: $("#projects").offset().top},
       	1300);
});

$("#contactButton").click(function() {
    $('html, body').animate({
    	scrollTop: $("#contact").offset().top},
       	1300);
});
