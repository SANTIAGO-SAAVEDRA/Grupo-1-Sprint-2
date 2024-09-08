import { useEffect, useState } from 'react';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Simulador } from './components/Simulador';
import { Spinner } from './components/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { Footer } from './components/Footer';
import { Pagos } from './components/Pagos';
import { Transferencias } from './components/Transferencias';
import { SolicitarPrestamo } from './components/SolicitarPrestamo';
import { Terminos } from './components/Terminos';
import { Privacidad } from './components/Privacidad';
import { Conversor } from './components/Conversor';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('load', () => {
			setIsLoading(false);
		});
	}, []);
	return (
		<Router>
			{isLoading && <Spinner />}
			<UserProvider>
				<Header menuMobileOpen={menuMobileOpen} setMenuMobileOpen={setMenuMobileOpen} />
				<Aside setMenuMobileOpen={setMenuMobileOpen} />
				<main className="main-content" id="main-content">
					<Routes>
						<Route path="*" element={<Home />} />
						<Route path="/transferencias" element={<Transferencias />} />
						<Route path="/pagos" element={<Pagos />} />
						<Route path="/solicitar-prestamo" element={<SolicitarPrestamo />} />
						<Route path="/simulador-prestamo" element={<Simulador />} />
						<Route path="/conversor" element={<Conversor />} />
						<Route path="/cuentas" element={<div>TODO</div>} />
						<Route path="/terminos-y-condiciones" element={<Terminos />} />
						<Route path="/politica-de-privacidad" element={<Privacidad />} />
					</Routes>
				</main>
				<Footer />
			</UserProvider>
		</Router>
	);
}

export default App;
