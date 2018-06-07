<?php include('header.php'); ?>
  <body>
  	<?php include('includes/video-top.php'); ?>
	<?php include('includes/productos.php'); ?>

  	<section id="accesorios" class="section">
	<!-- 	tapa intro con boton ver accesorios
		se abre un interno con productos
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
  		<div class="container">
			<h2 class="clearfix">contacto</h2>
  			<form id="mainContact">
	  			<div class="row">
	  				<div class="col-sm-6">
						<div class="form-group">
							<input type="email" class="form-control" id="email" placeholder="nombre">
						</div>
						<div class="form-group">
							<input type="email" class="form-control" id="nombre" placeholder="Email">
						</div>
	  				</div>
	  				<div class="col-sm-6">
	  					<div class="form-group">
	  						<textarea class="form-control" rows="3" placeholder="mensaje"></textarea>
	  					</div>
	  					<div class="form-group">
	  						<div class="row">
	  							<div class="col-sm-6">
	  								<button type="submit" class="btn btn-default btn-enviar">enviar</button>
	  							</div>
	  						</div>
	  					</div>

	  				</div>
	  			</div>
  			</form>
  		</div>
  	</section><!-- contacto -->
<?php include('footer.php'); ?>
