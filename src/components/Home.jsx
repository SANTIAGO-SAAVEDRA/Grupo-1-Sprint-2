import './home.css';

export const Home = () => {
	return (
		<section className="user-dashboard">
			<div className="user-dashboard__hello">
				<span>Bienvenido de vuelta</span>
			</div>
			<div className="user-dashboard__header">
				<h1>Banking, tu home banking con todo en un solo lugar</h1>
			</div>
			<div className="user-dashboard__section">
				<h2>Saldo Actual</h2>
				<p className="user-balance" id="user-balance">
					$0.00
				</p>
			</div>
			<div className="user-dashboard__section">
				<h2>Historial de Transferencias</h2>
				<ul id="transfer-history"></ul>
			</div>
			<div className="user-dashboard__section">
				<h2>Pagos Realizados</h2>
				<ul id="payment-history"></ul>
			</div>
			<div className="user-dashboard__section">
				<h2>Préstamos Solicitados</h2>
				<ul id="loan-history"></ul>
			</div>
		</section>
	);
};
