import './footer.css';

export const Footer = () => {
    return (
        <footer>
			<div class="footer-contenido">
				<div class="logo">
					<div class="imagen-footer">
						<a href="index.html"><img src="imagenes/banking-isologotipoai.png" alt="Banking Logo" /></a>
					</div>
					<div class="copyright">
						<p>
							&copy; 2024 Banking Inc. Todos los <br />
							derechos reservados.
						</p>
					</div>
				</div>
				<div class="enlaces">
					<h2 class="footer-titulo">LEGAL</h2>
					<a href="#">Terminos y condiciones</a>
					<a href="#">Politica de privacidad</a>
				</div>
				<div class="enlaces">
					<h2 class="footer-titulo">ENLACES</h2>
					<a href="transferencias.html">Transferencias</a>
					<a href="pagos.html">Pagos de facturas</a>
					<a href="prestamos.html">Solicitar prestamo</a>
					<a href="simulador.html">Simular prestamo</a>
				</div>
				<div class="redes">
					<a href="https://www.facebook.com/"><img src="/iconos/icono-facebook.svg" alt="Ingresar a Facebook" /></a>
					<a href="https://github.com/"><img src="/iconos/icono-github.svg" alt="Ingresar a GitHub" /></a>
					<a href="https://www.instagram.com/"><img src="/iconos/icono-instagram.svg" alt="Ingresar a Instagram" /></a>
				</div>
			</div>
		</footer>
    );
};