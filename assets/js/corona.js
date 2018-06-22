	//alert("video cargado");
/*preloader*/


// $(window).load(function() {

// 	$('.preloader-wrapper').fadeOut();
// 	$('body').removeClass('preloader-site');
// });


	var Body = $('body');
	Body.addClass('preloader-site');




var video_lg = document.getElementById('video-intro-lg');
var video_xs = document.getElementById('video-intro-xs');



var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
    video_xs.oncanplay = function video_xs() {
    		console.log("Can start playing video xs");
    		$('.preloader-wrapper').fadeOut();
			$('body').removeClass('preloader-site');
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
			    smartSpeed: 1500,
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
	};
}else{
		video_lg.oncanplay = function video_lg() {
    	console.log("Can start playing video lg");
    		$('.preloader-wrapper').fadeOut();
    		$('body').removeClass('preloader-site');
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
			    smartSpeed: 1500,
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
	};
}

/*------*/

// player video voluntarios
const player = new Plyr('#player', {

});

player.volume = 0.5;
player.on('ended', function() {
	player.currentTime = 0;
});
	// scroll y snap a la seccion
	$.scrollify({
		section : ".lienzo",
		interstitialSection : ".no-full",
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		overflowScroll:false
		  //scrollbars: false

	});

	/*-----------*/

var owl = $('.slider-productos.owl-carousel');
//slider productos
owl.owlCarousel({
	// animateOut: 'fadeOut',
 // 	 animateIn: 'fadeIn',
    smartSpeed:1000,
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

$('.btn-volver').on('click',function(){
	owl.trigger('prev.owl.carousel');
    // owl.trigger('play.owl.autoplay',[1000])
})


/*----*/

//slider drinks
$('.slider-drinks').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    smartSpeed:1000,
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

//slider tips
$('.slider-tips').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    smartSpeed:500,
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
  $('#to-top').click(function() {
      $('body,html').animate({
          scrollTop : 0
      }, 1500, 'easeOutQuint');
  });
/*--*/

//cierra navegacion al click fuera del contenedor
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
 		//colapsa
 		$('.grilla-accesorios-container .btn-volver-accesorios').click();
 		$('.slider-drinks-container .btn-volver').click();
 		$('.vxo #btn-volver').click();
		$('.cxp #btn-volver-cxp').click();
		//
		player.stop();
		$('.slider-productos-container').animate({
			"left" : "0"},
				1000,
				'easeOutQuint',
				function(){
				});
    });

	 $('.slider-productos-container .btn-volver').on('click', function(e){
		e.preventDefault();
		$('.slider-productos-container').animate({
			"left" : "100%"},
				1000,
				'easeOutQuint',
				function(){
				});
    });
/*------*/

	//muestra y oculta slider drinks

	 $('.btn-ver-drinks').on('click', function(e){
 		e.preventDefault();
 		//colapsa
 		$('.slider-productos-container .btn-volver').click();
 		$('.grilla-accesorios-container .btn-volver-accesorios').click();
 		$('.vxo #btn-volver').click();
		$('.cxp #btn-volver-cxp').click();
		player.stop();
		//
		$('.slider-drinks-container').animate({
			"left" : "0"},
				1000,
				'easeOutQuint',
				function(){
				});
    });

	 $('.slider-drinks-container .btn-volver').on('click', function(e){
		e.preventDefault();
		$('.slider-drinks-container').animate({
			"left" : "100%"},
				1000,
				'easeOutQuint',
				function(){
				});
    });


	 /*----*/
	 //cierra el slider de productos si hace click en la barra de menu
	  $('#main_nav a').on('click', function(e){
 		e.preventDefault();
 		$('.slider-productos-container .btn-volver').click();
    });

	   /*----*/
	 //cierra el slider de drinks si hace click en la barra de menu
	  $('#main_nav a').on('click', function(e){
 			e.preventDefault();
 			$('.slider-drinks-container .btn-volver').click();
    	});

	  /*----*/

	 //cierra seccion vxo si hace click en la barra de menu
	  $('#main_nav a').on('click', function(e){
 			e.preventDefault();
 			$('.vxo #btn-volver').click();
 			player.stop();

    	});

	  //cierra seccion cxp si hace click en la barra de menu
	  $('#main_nav a').on('click', function(e){
 			e.preventDefault();
 			$('.cxp #btn-volver-cxp').click();
    	});
	    //cierra seccion accesorios si hace click en la barra de menu
	  $('#main_nav a').on('click', function(e){
 			e.preventDefault();
 			$('.btn-volver-accesorios').click();
    	});

	 //ver secciones cxp y vxo
	 //ver vxo
	 $('#btn-ver-vxo').on('click', function(e){
 		e.preventDefault();

 		//colapsa
 		$('.slider-productos-container .btn-volver').click();
 		$('.grilla-accesorios-container .btn-volver-accesorios').click();
 		$('.slider-drinks-container .btn-volver').click();

		$('#seleccion-container').animate({
			"height" : "0vh"},
				800,
				'easeOutQuint',
				function(){

				});
			  	$('section.vxo').animate({
				"height" : "100%"},
				800,
				'easeOutQuint',
				function(){
					$.scrollify.disable();
					$("#contacto").hide();
				});

				$('section.cxp').animate({
				"height" : "0px"},
				800,
				'easeOutQuint',
				function(){

				});

    });
	 /*------*/
	 // ver cxp
	$('#btn-ver-cxp').on('click', function(e){
 		e.preventDefault();

		$("#contacto, footer").hide();
		//colapsa
		$('.slider-productos-container .btn-volver').click();
 		$('.grilla-accesorios-container .btn-volver-accesorios').click();
 		$('.slider-drinks-container .btn-volver').click();


		$('#seleccion-container').animate({
			"height" : "0vh"},
				800,
				'easeOutQuint',
				function(){

				});

			  	$('section.cxp').animate({
				"height" : "100%"},
				800,
				'easeOutQuint',
				function(){
					$.scrollify.disable();
					$("#contacto").hide();
				});

				$('section.vxo').animate({
				"height" : "0px"},
				800,
				'easeOutQuint',
				function(){

				});

    });
	/*------*/
	//btn volver vxo
	 $('#btn-volver').on('click', function(e){
 			e.preventDefault();
			$.scrollify.enable();
			player.stop();
			$("#contacto, footer").show();
 			$('#seleccion-container').animate({
				"height" : "100vh"},
				800,
				'easeOutQuint',
				function(){

				});

 			 $('section.vxo').animate({
				"height" : "0px"},
				800,
				'easeOutQuint',
				function(){

				});
   	 });

 /*------*/
	//btn volver cxp
 	 $('#btn-volver-cxp').on('click', function(e){
 		e.preventDefault();
			$.scrollify.enable();
			$("#contacto, footer").show();
 			$('#seleccion-container').animate({
				"height" : "100vh"},
				800,
				'easeOutQuint',
				function(){
				});
 			 $('section.cxp').animate({
				"height" : "0px"},
				800,
				'easeOutQuint',
				function(){

				});
    });

 /*------*/

	//ver seccion accesorios

	 $('.btn-ver-accesorios').on('click', function(e){
 		e.preventDefault();


 		//colapsa
 		$('.slider-productos-container .btn-volver').click();
 		$('.slider-drinks-container .btn-volver').click();
 		$('.vxo #btn-volver').click();
		$('.cxp #btn-volver-cxp').click();
		player.stop();

 		$("#drinks, #parleyvxo, #contacto").hide();

		$('#portada-accesorios').animate({
			"height" : "0vh"},
				800,
				'easeOutQuint',
				function(){

				});
			  	$('section.grilla-accesorios-container').animate({
					"height" : "100%"},
					800,
					'easeOutQuint',
					function(){
						$.scrollify.disable();
						$("#contacto").hide();
					});
    });
	 /*------*/
	 // volver a accesorios
	  $('.btn-volver-accesorios').on('click', function(e){
 		e.preventDefault();
		$.scrollify.enable();
			$("#drinks, #parleyvxo, #contacto, footer").show();
 			$('#portada-accesorios').animate({
				"height" : "100vh"},
				800,
				'easeOutQuint',
				function(){
				});
 			 $('section.grilla-accesorios-container').animate({
				"height" : "0px"},
				800,
				'easeOutQuint',
				function(){

				});
    });

 /*------*/






/*------*/

  // ===== smooth scroll to section ====

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top+1
          }, 1000,'easeOutQuint');
          return false;
        }
      }
    });

/*--*/

// videos drinks

$( "body" ).on( "click", ".video", function() {

  var theModal = "#video-modal",
	  videoSRC = $(this).attr("data-video")

	videoSRCauto = videoSRC + "?autoplay=1&color=17376e&title=0&byline=0&portrait=0";
	$(theModal + ' #source_mp4').attr('src', videoSRC+".mp4?autoplay=1");
	$(theModal + ' #source_webm').attr('src', videoSRC+".webm?autoplay=1");

	$('#video').get(0).load();
	 $(theModal).modal();
	 $('#video').get(0).play();

 });

$('#video-modal').on('shown.bs.modal', '.modal', function () {
  $('#video')[0].play();
})
$('#video-modal').on('hidden.bs.modal','modal', function () {
  $('#video')[0].pause();
})

$('body').on('hidden.bs.modal', '.modal', function () {
	$('#video').trigger('pause');
});
/*----*/

// overlay modal accesorio
$('#modalAccesorio').on('show.bs.modal', function() {
	// zoom productos
	$(" #img-producto-zoom").elevateZoom({
		gallery:'botonera-producto',
		zoomType: "inner",
		responsive: true,
		cursor: 'crosshair',
		galleryActiveClass: 'active',
		imageCrossfade: true,
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 500
	});

  setTimeout(function() {
    	$('.modal-backdrop').css('background', 'white');
  	 	$('.modal-backdrop').css('opacity', '1');
  }, 10);
});

$('#modalAccesorio').on('hidden.bs.modal', function() {
		$('.zoomContainer').remove();
		$('.modal-backdrop').css('background', '');
});

/*--*/









