import { useUserContext } from '../hooks/useUserContext';
import './home.css';

export const Home = () => {
	const { usuarios, usuarioActual } = useUserContext();
	return (
		<section className="user-dashboard">
			<div className="user-dashboard__hello">
				<span>Bienvenido de vuelta {usuarioActual}</span>
			</div>
			<div className="user-dashboard__header">
				<h1>Banking, tu home banking con todo en un solo lugar</h1>
			</div>
			<div className="user-dashboard__section">
				<h2>Saldo Actual</h2>
				<p className="user-balance" id="user-balance">
					${usuarios[usuarioActual.toLowerCase()].saldo}
				</p>
			</div>
			<div className="user-dashboard__section">
				<h2>Historial de Transferencias</h2>
				<ul id="transfer-history">
					{usuarios[usuarioActual.toLowerCase()].historialTransferencias.map(
						({ esIngreso, emisor, receptor, monto, id }) => (
							<li key={id} className={`transfer ${esIngreso ? 'ingreso' : 'egreso'}`}>
								<span>
									{esIngreso ? 'Emisor' : 'Receptor'}: {esIngreso ? emisor : receptor}
								</span>
								<span className="amount">${monto}</span>
							</li>
						)
					)}
				</ul>
			</div>
			<div className="user-dashboard__section">
				<h2>Pagos Realizados</h2>
				<ul id="payment-history">
					{usuarios[usuarioActual.toLowerCase()].historialPagos.map(({ numero, monto, fecha, id }) => (
						<li key={id} className="payment">
							<span>N° {numero}</span>
							<span className="amount">${monto}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="user-dashboard__section">
				<h2>Préstamos Solicitados</h2>
				<ul id="loan-history">
					{usuarios[usuarioActual.toLowerCase()].historialPrestamos.map(({ tipo, tasaInteres, plazo, monto, id }) => (
						<li key={id} className="loan">
							<span>
								{tipo} - {tasaInteres}% - {plazo} meses
							</span>
							<span className="amount">${monto}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
