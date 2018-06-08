

//slider caption sobre video
$('.slider-video').owlCarousel({
	animateOut: 'fadeOutLeft',
    animateIn: 'fadeInRight',
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    nav: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/*----*/

//slider caption sobre video
$('.slider-productos').owlCarousel({
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/*----*/



//modal altura  máxima

function setModalMaxHeight(element) {
  this.$element     = $(element);
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight);

  this.$content.css({
      'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});

//

//menu
// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  	hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    $('#main_nav').toggleClass('show-nav');


  });
/*--*/



// ===== Scroll to Top ====
  $('#to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0               // Scroll to top of body
      }, 1500);
  });
/*--*/

//cierra navegacion al click fura del contenedor
	var anchoVentana = $(window).width();

	if(anchoVentana > 991){

		$(window).click(function() {
			$('#main_nav').removeClass('show-nav');
			$('button.hamburger').removeClass('is-active');
		});

		$('#main_nav, button.hamburger').click(function(event){
		    event.stopPropagation();
		});
	}

	if(anchoVentana <= 991){
		//colapsa menu en mobile
   		 $('.navbar-inner ul li a').on('click', function(){
            $('button.hamburger').click();
        });
   		//  $('.hamburger').css( "background-color", "#11233a");
	}
/*--*/

$(window).on('scroll', function(event){
   var scrollPos = $(document).scrollTop();
   $(".nav li a").each(function () {
     var currLink = $(this);
     var refElement = $(currLink.attr("href"));

     if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
       currLink.parent().addClass("active").siblings().removeClass("active");
       return;
     }
     else{
       currLink.parent().removeClass("active");
     }
   })
 })

/*--*/

  // colapsa menu al click en un enlace
        // $('.navbar-inner ul li a').on('click', function(){
        //     $('button.hamburger').click()
        // });

//muestra y oculta slider producto

	 $('.btn-ver-productos').on('click', function(e){
 		e.preventDefault();
		$('.slider-productos-container').animate({
			"left" : "0"},
				800,
				'easeOutQuint',
				function(){
				});
    });

	 $('.slider-productos-container .btn-volver').on('click', function(e){
		e.preventDefault();
		$('.slider-productos-container').animate({
			"left" : "100%"},
				800,
				'easeOutQuint',
				function(){
				});

    });
	  $('#main_nav a').on('click', function(e){
 		e.preventDefault();
 		$('.slider-productos-container .btn-volver').click();

    });

  // ===== smooth scroll to section====

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top+1
          }, 1000);
          return false;
        }
      }
    });

/*--*/

















