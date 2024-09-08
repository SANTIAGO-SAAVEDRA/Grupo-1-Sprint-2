import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './aside.css';

export const Aside = ({ setMenuMobileOpen }) => {
	return (
		<aside className="aside">
			<ul>
				<Link onClick={() => setMenuMobileOpen(false)} className="register-button" id="account-action" to="/cuentas">
					Ingreso <span className="plus-sign">+</span>
				</Link>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/">
						<span className="material-symbols-outlined icon "> home</span> Inicio{' '}
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/transferencias">
						<span className="material-symbols-outlined  icon ">account_balance</span> Transferencias
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/pagos">
						<span className="material-symbols-outlined  icon">order_approve </span>Pagos de Facturas
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/solicitar-prestamo">
						<span className="material-symbols-outlined  icon">paid</span> Solicitar Préstamo{' '}
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/Simulador">
						<span className="material-symbols-outlined  icon">calculate</span> Simular Préstamo
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuMobileOpen(false)} to="/conversor">
						<span className="material-symbols-outlined  icon">currency_exchange</span> Conversor{' '}
					</Link>
				</li>
			</ul>
		</aside>
	);
};

Aside.propTypes = {
	setMenuMobileOpen: PropTypes.func
};
