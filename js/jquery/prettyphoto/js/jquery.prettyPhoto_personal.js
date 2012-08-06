$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'slow', /* fast/slow/normal */
		slideshow: 10000, /* false OR interval time in ms */
		autoplay_slideshow: true, /* true/false */
		overlay_gallery: false
	});
});
