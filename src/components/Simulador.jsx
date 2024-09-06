import './simulador.css'

export const Simulador = () => {
    return (         
        <main class="main-content">
			<section class="prestamos">
				<h1>Préstamos Disponibles</h1>
				<p>Encuentra la mejor opción de financiamiento para tus necesidades.</p>
				<br />

            <div class="loan-options">
                <div class="loan-card">
                    <h3>Préstamo Personal</h3>
                    <ul>
                        <li>Tasa de interés: 12% anual</li>
                        <li>Monto máximo: $100.000</li>
                        <li>Plazo: Hasta 24 meses</li>
                    </ul>
                    <button onclick="openSimulator('Préstamo Personal', 12)">Simular</button>
                </div>
                
                <div class="loan-card">
                            <h3>Préstamo Hipotecario</h3>
                            <ul>
                                <li>Tasa de interés: 8% anual</li>
                                <li>Monto máximo: $500.000</li>
                                <li>Plazo: Hasta 48 meses</li>
                            </ul>
                            <button onclick="openSimulator('Préstamo Hipotecario', 8)">Simular</button>
                </div>

                <div class="loan-card">
                            <h3>Préstamo Prendario</h3>
                            <ul>
                                <li>Tasa de interés: 9% anual</li>
                                <li>Monto máximo: $50.000</li>
                                <li>Plazo: Hasta 12 meses</li>
                            </ul>
                            <button onclick="openSimulator('Préstamo Automotriz', 9)">Simular</button>
                </div>
            </div>

            <div class="loan-simulator">
					<h2>Simulador de Préstamos</h2>
					<form id="simulator-form">
						<div class="form-group">
							<label for="loan-type">Tipo de Préstamo:</label>
							<input type="text" id="loan-type" name="loan-type" readonly />
						</div>
						<div class="form-group">
							<label for="amount">Monto:</label>
							<input type="number" id="amount" name="amount" placeholder="Ingrese el monto del préstamo" required />
						</div>
						<div class="form-group">
							<label for="interest-rate">Tasa de Interés (%):</label>
							<input type="number" id="interest-rate" name="interest-rate" readonly />
						</div>
						<div class="form-group">
							<label for="term">Plazo (meses):</label>
							<input type="number" id="term" name="term" placeholder="Ingrese el plazo en meses" required />
						</div>
						<button class="request-loan" type="button" onclick="calculateLoan()">
							Calcular <span class="material-symbols-outlined  icon">calculate</span>
						</button>
					</form>
					<div id="results">
						<p id="monthly-payment"></p>
						<p id="total-payment"></p>
					</div>
				</div>
                
            </section>
        </main>
     );
}
