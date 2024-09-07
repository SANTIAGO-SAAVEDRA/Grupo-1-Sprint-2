import { Link } from 'react-router-dom';
import './aside.css';

export const Aside = () => {
	return (
		<aside className="aside">
			<ul>
				<Link className="register-button" id="account-action" href="./cuentas.html">
					Ingreso <span className="plus-sign">+</span>
				</Link>
				<li>
					<Link to="/">
						{' '}
						<span className="material-symbols-outlined icon "> home</span> Inicio{' '}
					</Link>
				</li>
				<li>
					<Link to="/transferencias">
						<span className="material-symbols-outlined  icon ">account_balance</span> Transferencias
					</Link>
				</li>
				<li>
					<Link to="/pagos">
						<span className="material-symbols-outlined  icon">order_approve </span>Pagos de Facturas
					</Link>
				</li>
				<li>
					<Link to="/solicitar-prestamo">
						<span className="material-symbols-outlined  icon">paid</span> Solicitar Préstamo{' '}
					</Link>
				</li>
				<li>
					<Link to="/Simulador" >
						<span className="material-symbols-outlined  icon">calculate</span> Simular Préstamo
					</Link>
				</li>
				<li>
					<Link to="/conversor">
						<span className="material-symbols-outlined  icon">currency_exchange</span> Conversor{' '}
					</Link>
				</li>
			</ul>
		</aside>
	);
};
