import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({ menuMobileOpen, setMenuMobileOpen }) => {
	// Consumir el valor del contexto
	const { usuarioActual } = useUserContext();
	useEffect(() => {
		// Selecciona el botón del menú móvil y el panel lateral
		const asideEl = document.querySelector('.aside');
		asideEl.classList.toggle('visible'); // Alterna la visibilidad del panel lateral
	}, [menuMobileOpen]);

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
					<Link to={'/cuentas'} aria-label="Perfil de usuario" className="user-profile">
						<div className="material-symbols-outlined user-image">account_circle</div>
						<div className="user-options">
							<span>{usuarioActual ?? 'Usuario Nuevo'}</span>
							<div className="material-symbols-outlined expand">expand_more</div>
						</div>
					</Link>
				</div>
				<div className="nav-mobile">
					<button
						onClick={() => setMenuMobileOpen(() => !menuMobileOpen)}
						className={`nav-mobile__button${menuMobileOpen ? ' open' : ''}`}>
						<span className="material-symbols-outlined open-icon">menu</span>
						<span className="material-symbols-outlined close-icon">close</span>
					</button>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	menuMobileOpen: PropTypes.bool,
	setMenuMobileOpen: PropTypes.func
};
