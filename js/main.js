$(document).foundation();

$(".main-bar li.menu-item")
	.mouseenter(function() {
		$(this).css("border-left", "1px solid pink");

		$(".main-bar .menu-item a").css("color", "gray");
		$(".sub-bar").hide();

		if($(".sub-bar").is(":hidden")) {
			if($(this).attr("data-type") == "brand") {
				$(".sub-bar[value='brand']").slideDown("slow");
			} else if($(this).attr("data-type") == "service") {
				$(".sub-bar[value='service']").slideDown("slow");
			} else if($(this).attr("data-type") == "support") {
				$(".sub-bar[value='support']").slideDown("slow");
			}
			$(this).find("a").css("color", "pink");
		}
	})
	.mouseleave(function() {
		$(this).css("border-left", "1px solid white");
	});

$(".sub-bar li.menu-item")
	.mouseenter(function() {
		$(this).find("a").css("color", "pink");
	})
	.mouseleave(function() {
		$(this).find("a").css("color", "gray");
	});


$(".nav-bar").mouseleave(function() {
	$(".menu-item a").css("color", "gray");
	$(".sub-bar").slideUp("slow");
});