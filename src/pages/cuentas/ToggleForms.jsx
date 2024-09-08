import { useState } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { FormularioCuentas } from './FormularioCuentas';

export const ToggleForms = () => {
	const { usuarioActual, setUsuarioActual } = useUserContext();
	const [esUsuarioNuevo, setEsUsuarioNuevo] = useState(usuarioActual === 'Demo');
	const [inicioDeSesionSeleccionado, setInicioDeSesionSeleccionado] = useState(false);
	// context estate
	const handleLogout = () => {
		setEsUsuarioNuevo(true);
		setUsuarioActual('Demo');
		localStorage.setItem('usuarioActual', 'Demo');
	};
	return (
		<>
			<div className="cuentas__toggle">
				{usuarioActual === 'Demo' ? (
					<button
						className={`cuentas__toggle-register ${esUsuarioNuevo ? 'active' : ''}`}
						onClick={() => setInicioDeSesionSeleccionado(false)}>
						Registrarse
					</button>
				) : (
					<button className="cuentas__toggle-logout" onClick={handleLogout}>
						Cerrar sesión
					</button>
				)}
				<button
					className={`cuentas__toggle-login ${!esUsuarioNuevo ? 'active' : ''}`}
					onClick={() => setInicioDeSesionSeleccionado(true)}>
					Iniciar sesión
				</button>
			</div>
			<div className="cuentas__form-container">
				<FormularioCuentas esUsuarioNuevo={esUsuarioNuevo} inicioDeSesionSeleccionado={inicioDeSesionSeleccionado} />
			</div>
		</>
	);
};
