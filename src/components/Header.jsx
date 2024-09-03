import { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		// Selecciona el botón del menú móvil y el panel lateral
		const asideEl = document.querySelector('.aside');
		asideEl.classList.toggle('visible'); // Alterna la visibilidad del panel lateral
	}, [isOpen]);

	return (
		<header className="header">
			<Link to="/" aria-label="Volver al inicio">
				<img src="/imagenes/banking-logo.png" alt="Banking Logo" />
			</Link>
			<div className="navigation">
				<div className="search-bar">
					<input type="text" placeholder="Buscar" aria-label="Buscar" />
					<button className="search-button" aria-label="Buscar">
						<span className="material-symbols-outlined">search</span>
					</button>
				</div>
				<div className="header-icons">
					<button aria-label="Notificaciones">
						<div className="material-symbols-outlined">notifications</div>
					</button>
					<a aria-label="Perfil de usuario" className="user-profile" href="./cuentas.html">
						<div className="material-symbols-outlined user-image">account_circle</div>
						<div className="user-options">
							<span>Usuario nuevo</span>
							<div className="material-symbols-outlined expand">expand_more</div>
						</div>
					</a>
				</div>
				<div className="nav-mobile">
					<button
						onClick={() => setIsOpen((isOpen) => !isOpen)}
						className={`nav-mobile__button${isOpen ? ' open' : ''}`}>
						<span className="material-symbols-outlined open-icon">menu</span>
						<span className="material-symbols-outlined close-icon">close</span>
					</button>
				</div>
			</div>
		</header>
	);
};
