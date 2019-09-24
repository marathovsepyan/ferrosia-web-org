$(document).ready(function(){

	$(".s-card__icon").mouseover(function() {
		var src = $(this).find('img').attr('src')
		if(!src.includes('hover')) {
			$(this).find('img').attr('src',src.substring(0, src.length - 4) + '_hover.svg' );
		}
	})

	$(".s-card__icon").mouseout(function() {
		var src = $(this).find('img').attr('src')
		if(src.includes('hover')) {
			$(this).find('img').attr('src',src.substring(0, src.length - 10) + '.svg' );
		}
	});

	function countup(count){
		console.log("count--->", count)
		var countBlockTop = $("."+count).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;

		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){
				show = false;

				$('.'+count).spincrement({
					from: 1,
					duration: 6000,
					thousandSeparator: ''
				});
			}
		})
	};

	$(function() {
		countup("count", $(".count").text());
	});

// Owl Carousel
	$(".clients-crl").owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		responsiveClass:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:4,
			}
		}
	});


});


