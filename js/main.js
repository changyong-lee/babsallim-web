$(document).foundation();

$(".main-bar li.menu-item")
	.mouseenter(function() {
		$(this).css("border-left", "1px solid pink");

		$(".sub-bar").hide();
		if($(".sub-bar").is(":hidden")) {
			if($(this).attr("data-type") == "brand") {
				$(".sub-bar[value='brand']").slideDown("slow");
			} else if($(this).attr("data-type") == "service") {
				$(".sub-bar[value='service']").slideDown("slow");
			} else if($(this).attr("data-type") == "support") {
				$(".sub-bar[value='support']").slideDown("slow");
			}
		}
	})
	.mouseleave(function() {
		$(this).css("border-left", "1px solid white");
	});

$(".nav-bar").mouseleave(function() {
	$(".sub-bar").slideUp("slow");
})