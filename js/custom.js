(function ($) {
	"use strict";
	
	$('.product-wraps .single-product').click( function(e){
		$('.active').removeClass('active');
		$(this).addClass('active');
	});



})(jQuery);
