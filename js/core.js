
$(document).ready(function() {

//MOBILE ONE AND MOBILE THREE
var menu = "close";
$(".mobile-one .menu-toggle, .mobile-three .menu-toggle").click(function() {
    
    if (menu === "close") {
		$(".mobile-nav").css({"transform": "translate(0, 0px)", "position": "absolute", "top": "54px"});
     	 menu = "open";
    } else {
      	$(".mobile-nav").css("transform", "translate(-100%, 0)");
      	menu = "close";
    }
});

});