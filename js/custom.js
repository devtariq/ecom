(function ($) {
	"use strict";

	$('.product-wraps .single-product').click(function (e) {
		$('.active').removeClass('active');
		$(this).addClass('active');
		
		
	});

	/* var handle = ".product-wraps .single-product.active";
	
	$('.product-wraps .single-product').click(function (e) {
		console.log(handle);
	});

	var img_src1 = "#ss1";
	if(image_tracker =="s"){
		img_src1.src = ('images/nsp2.png');
		image_tracker = 'n'
	}else{
		img_src1.src = ('images/sp2.png');
		image_tracker = 's'
	}

	$('#ss2').click(function () {
		$('#ss2').attr('src', 'images/nsp2.png');
	});
	$('#ss3').click(function () {
		$('#ss3').attr('src', 'images/nsp3.png');
	});

	$(".right-section li").click(function(){
		$(".right-section li").removeClass("active");
		$(this).addClass("active");
		
		var newsrc = $(".right-section img").attr("src");
		
		 var new1= $(".left-section img").src=newsrc;
		  alert(new1);
		});
		 */

})(jQuery);
