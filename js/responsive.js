    // Show all content of panels on mobile
$(window).resize(function() {
	if ($(window).width() < 768) {
        $(".panel").children().removeClass("collapse");
    }
    else {
        $(".panel").children().addClass("collapse");   
        location.reload();
    }
})    

    // if (document.documentElement.clientWidth < 768) 

    // if (document.documentElement.clientWidth >=768) 