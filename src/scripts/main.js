// Main

$(function () {
	//THE DOM IS READY

	//Configure home welcome owl slider
	$(".services_welcome_slider .owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		items: 1,		
		smartSpeed: 500,
		responsive: {
			768: {
				//Adding autoplay slide for medium and above devices
				//Hover to pause autoplay
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
			}
		}
	})

	//Configure home partner owl slider
	$(".services_partner .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		items: 1,
		smartSpeed: 500,
		responsive: {
			576: {
				items: 2
			},
			768: {
				//Adding autoplay slide for medium and above devices
				//Hover to pause autoplay
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
				items: 3,
				margin: 0
			},
			992: {
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
				items: 4
			},
			1200: {
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
				items: 6
			}
		}
	})
})
