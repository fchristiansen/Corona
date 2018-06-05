<?php include('header.php'); ?>
  <body>
  	<header id="home">

		<button class="hamburger hamburger--spin" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		  <span class="hamburger-box">
		    <span class="hamburger-inner"></span>
		  </span>
		</button>
	    <nav id="main_nav" class="navbar navbar-default navbar-fixed-top center">
	      <div class="container">
	        <div id="navbar" class="navbar-collapse collapse">
	        	<div class="navbar-inner">
	        		<ul class="nav navbar-nav">
	        			<li class="logo">
	        				<img class="img-responsive center-block" src="assets/img/logo.svg" alt="">
	        			</li><!-- logo -->
	        			<li><a href="#home">Home</a></li>
	        			<li><a href="#productos">productos</a></li>
	        			<li><a href="#accesorios">accesorios</a></li>
	        			<li><a href="#drinks">corona drinks</a></li>
	        			<li><a href="#parleyvxo">corona x parley</a></li>
	        			<li><a href="#contacto">contacto</a></li>
	        		</ul>
	        	</div>
	        </div><!--/.nav-collapse -->
	      </div>
	    </nav>
		<!-- <nav id="nav_mobile" class="navbar navbar-default navbar-fixed-top center">
		  nav_mobile
		</nav> -->
	  	<section id="video_top" class="section">
	  		<div class="to-bottom">
	  			<a href="#productos">
	  				<p>saltar intro</p>
	  				<img src="assets/img/to-bottom.png" alt="">
	  			</a>
	  		</div>
	  		<video poster="assets/video/video-intro.jpg" id="video-intro" preload="auto" playsinline autoplay muted loop>
			    <source src="assets/video/video-intro2.mp4" type="video/mp4">
			    <source src="assets/video/video-intro2.webm" type="video/webm">
			</video>
	  	</section> <!-- video -->
  	</header>
  	<section id="productos" class="section">
<!--   		tapa intro + slider interno con 4 productos
  		slider interno
  			imagen de fondo grande
  			caja detalle producto
  			vista rapida o mas grande + zoom
  			boton comprar
  		boton volver a tapa inicial -->
  		<img class="img-responsive" src="https://api.fnkr.net/testimg/1920x800/000/FFF/?text=img+placeholder">

  	</section><!-- productos -->
  	<section id="accesorios" class="section">
	<!-- 	tapa intro con boton ver accesorios
		se abre un interno con 5 productos (serán mas?) ¿?
		caja producto
			imagen producto
			nombre y detalles producto
			boton comprar amarillo
		boton volver
		se expande fuera de la caja ¿? -->
		<img class="img-responsive" src="https://api.fnkr.net/testimg/1920x800/f5f5f5/FFF/?text=img+placeholder">
  	</section><!-- accesorios -->
  	<section id="drinks" class="section">
	<!-- 	tapa intro con boton a slider interno
		logo corona drinks
		imagen drink + receta drink
		btn ver video tira modal con el video
		boton volver blanco -->
		<img class="img-responsive" src="https://api.fnkr.net/testimg/1920x800/e4e4e4/FFF/?text=drinks">
  	</section><!-- drinks -->
  	<section id="parleyvxo" class="section">
  		<img class="img-responsive" src="https://api.fnkr.net/testimg/1920x800/cccccc/FFF/?text=parley">
		<section id="parley">
	<!-- 		btn entrar
			interior
				grafica air
				btn volver azul -->
		</section> <!-- parley -->
		<section id="vxo">
	<!-- 		btn entrar
			interior
				embajadores
				slider tips
				video
				mapa
				btn vovler azul -->
		</section> <!-- vxo -->
  	</section><!-- parleyvxo -->
  	<section id="contacto" class="section">
  		<img class="img-responsive" src="https://api.fnkr.net/testimg/1920x800/273136/FFF/?text=contacto">
  	</section><!-- contacto -->

<?php include('footer.php'); ?>
