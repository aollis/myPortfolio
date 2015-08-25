
$("#homeButton").click(function() {
	$('html, body').animate({
        scrollTop: $("#banner").offset().top},
        900);
});
		
$("#aboutButton").click(function() {
	$('html, body').animate({
       	scrollTop: $("#projects").offset().top},
       	900);
});

$("#projectsButton").click(function() {
    $('html, body').animate({
       	scrollTop: $("#workedOn").offset().top},
       	900);
});

$("#contactButton").click(function() {
    $('html, body').animate({
    	scrollTop: $("#contact").offset().top},
       900);
});
