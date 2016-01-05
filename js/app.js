$(document).ready(function() {
    function scrollTo(id){
	    id = id.replace("link", "");
	    $('html,body').animate({scrollTop: $("#"+id).offset().top}, 'slow');
	}

	$("#menu li a").click(function(e) { 
	    e.preventDefault(); 
	    scrollTo(this.getAttribute("data-id"));           
	});

});