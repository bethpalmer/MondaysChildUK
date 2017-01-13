    // Show all content of panels on mobile
// $(window).resize(function() {
// 	if ($(window).width() < 768) {
//         $(".panel").children().removeClass("collapse");
//     }
//     else {
//         $(".panel").children().addClass("collapse");   
//         location.reload();
//     }
// })    

$("#accordian").children().on("click","a", function() {
    window.location.assign("#about");
    location.reload(true);
})