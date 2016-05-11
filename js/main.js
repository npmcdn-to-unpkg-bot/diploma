;(function($){
	$(document).ready(function() {
		// responsive-menu
		var $body = $('body'),
			$btn = $body.find('.ba-toggle'),
			$overlay = $body.find('.ba-overlay');

		$btn.on('click', function(){
			$body.toggleClass('ba-menu-open')
		});
		$overlay.on('click', function(){
			$body.toggleClass('ba-menu-open')
		});

		// sliders
		$(".ba-intro-slider").slick({
			arrows: false,
			autoplay: true,
			draggable: false,
		});
		$(".ba-portfolio-img-slider").slick({
			slidesToShow: 4,
			variableWidth: true,
			centerMode: true,
			arrows: false,
			asNavFor: '.ba-portfolio-text-slider'
		});
		$(".ba-portfolio-text-slider").slick({
			asNavFor: '.ba-portfolio-img-slider',
			slide: ".ba-portfolio-text-slider__slide",
			autoplay: true,
			prevArrow: $(".ba-portfolio-text-slider__prev"),
			nextArrow: $(".ba-portfolio-text-slider__next"),
		});

		//swipebox
		$( '.swipebox' ).swipebox({
			loopAtEnd: true
		});

		//services section
		$('.ba-services-content').on( 'mouseenter', '.ba-services-content__link', function(e) {
			var filterValue = $(this).attr('data-name');
			var filterText = $('.ba-services-description').find('[data-name = ' + filterValue + ']');

			filterText
				.siblings()
					.removeClass('ba-services-description__item--active')
					.end()
				.addClass('ba-services-description__item--active');


			e.preventDefault();
		});


});
	$(window).load(function() {

		//filter and layout

		var $grid = $('.ba-filter-grid').isotope({
			itemSelector: '.ba-filter-grid__item',
			layoutMode: 'fitRows',
			fitRows: {
				gutter: 20
			}
		});

		$('.ba-filter__controls').on( 'click', '.ba-filter__button', function(e) {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });

			//change checked status
			$('.ba-filter__controls').find('.ba-filter__button--checked').removeClass('ba-filter__button--checked');
			$(this).addClass('ba-filter__button--checked');

			e.preventDefault();
		});

      	//map
      	var $mapDiv = $('.ba-map')[0],
     	 	$centerCoordinates = {lat: 52.131075, lng: -106.639144};
      		$coordinates = 	{lat: 52.129503, lng: -106.660388};

      	var $map = new google.maps.Map($mapDiv, {
      		center: $centerCoordinates,
      		zoom: 14
      	});

      	var $marker = new google.maps.Marker({
      		position: $coordinates,
      		map: $map,
      		icon: 'img/marker.svg'
      });
  });
})(jQuery);
