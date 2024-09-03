import { useEffect, useState } from 'react';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Spinner } from './components/Spinner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		window.addEventListener('load', () => {
			setIsLoading(false);
		});
	}, []);
	return (
		<Router>
			{isLoading && <Spinner />}
			<Header />
			<Aside />
			<main className="main-content" id="main-content">
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="/transferencias" element={<div>TODO</div>} />
					<Route path="/pagos" element={<div>TODO</div>} />
					<Route path="/solicitar-prestamo" element={<div>TODO</div>} />
					<Route path="/simular-prestamo" element={<div>TODO</div>} />
					<Route path="/conversor" element={<div>TODO</div>} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
