import React, { useState } from 'react';
import './loanRequest.css'

const LoanRequest = () => {
const [loanType, setLoanType] = useState('');
const [amount, setAmount] = useState('');
const [interestRate, setInterestRate] = useState('');
const [term, setTerm] = useState('');
const [monthlyPayment, setMonthlyPayment] = useState('');
const [totalPayment, setTotalPayment] = useState('');

const openSimulator = (type, rate) => {
    setLoanType(type);
    setInterestRate(rate);
    setAmount('');
    setTerm('');
    setMonthlyPayment('');
    setTotalPayment('');
};

const calculateLoan = () => {
    const amountValue = parseFloat(amount);
    const interestRateValue = parseFloat(interestRate);
    const termValue = parseInt(term);

    if(amountValue && interestRateValue && termValue)
        {
            const monthlyInterest = interestRateValue / 100 / 12;
            const numberOfPayments = termValue;
            const monthlyPaymentValue = (amountValue * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, - numberOfPayments));
            const totalPaymentValue = monthlyPaymentValue * numberOfPayments;

            setMonthlyPayment(`Cuota Mensual: $${monthlyPaymentValue.toFixed(2)}`);
            setTotalPayment(`Pago Total: $${totalPaymentValue.toFixed(2)}`);
        }
    else
        {
            alert('Por favor, completa todos los campos del formulario.');
        }
};

const validateForm = () => {
    if(amount <= 0 || term <= 0) 
        {
            alert('El monto y el plazo deben ser mayores que cero.');
            return false;
        }
    return true;
};

const calculateLoanWithValidation = () => {
    if(validateForm())
        {
            calculateLoan();
        }
};

const submitLoan = () => {
    if(confirm('¿Estás seguro de que quieres solicitar el préstamo?'))
	{
    	alert('Préstamo realizado con éxito.');
		setLoanType('');
		setAmount('');
		setInterestRate('');
		setTerm('');
    }
	else
	{
		alert('El préstamo no ha podido procesarse correctamente.');
    }
};

return(
    <main className = "main-content">
    <section className = "prestamos">
        <h1>Préstamos Disponibles</h1>
        <p>Encuentra la mejor opción de financiamiento para tus necesidades.</p>
        <br/>
        <div className = "loan-options">
            <div className = "loan-card">
                <h3>Préstamo Personal</h3>
                <ul>
                    <li>Tasa de interés: 12% anual</li>
                    <li>Monto máximo: $100.000</li>
                    <li>Plazo: Hasta 24 meses</li>
                </ul>
                <button onClick = {() => openSimulator('Préstamo Personal', 12)}>Seleccionar</button>
            </div>
            <div className = "loan-card">
                <h3>Préstamo Hipotecario</h3>
                <ul>
                    <li>Tasa de interés: 8% anual</li>
                    <li>Monto máximo: $500.000</li>
                    <li>Plazo: Hasta 48 meses</li>
                </ul>
                <button onClick = {() => openSimulator('Préstamo Hipotecario', 8)}>Seleccionar</button>
            </div>
            <div className = "loan-card">
                <h3>Préstamo Prendario</h3>
                <ul>
                    <li>Tasa de interés: 9% anual</li>
                    <li>Monto máximo: $50.000</li>
                    <li>Plazo: Hasta 12 meses</li>
                </ul>
                <button onClick={() => openSimulator('Préstamo Automotriz', 9)}>Seleccionar</button>
            </div>
        </div>
        <div className = "loan-simulator">
            <h2>Solicitar un Préstamo</h2>
            <form id = "simulator-form" onSubmit={(e) => { e.preventDefault(); calculateLoanWithValidation();}}>
                <div className = "form-group">
                    <label for = "loan-type">Tipo de Préstamo:</label>
                    <input type = "text" id = "loan-type" value={loanType} readOnly />
                </div>
                <div className = "form-group">
                    <label for = "amount">Monto:</label>
                    <input type = "number" id = "amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder = "Ingrese el monto del préstamo" required/>
                </div>
                <div className = "form-group">
                    <label for = "interest-rate">Tasa de Interés (%):</label>
                <input type = "number" id = "interest-rate" value={interestRate} readOnly/>
                </div>
                <div className = "form-group">
                    <label for = "term">Plazo (meses):</label>
                    <input type = "number" id = "term" value={term} onChange={(e) => setTerm(e.target.value)} placeholder = "Ingrese el plazo en meses" required/>
                </div>
                <div className = "form-buttons">
                    <button className = "request-loan" type = "button" onClick={submitLoan}>Solicitar</button>
                    <button className = "calculate-loan" type = "button" onClick={calculateLoanWithValidation}> Calcular <span className = "material-symbols-outlined icon">calculate</span></button>
                </div>
            </form>
            <div id = "results">
                <p id = "monthly-payment">{monthlyPayment}</p>
                <p id = "total-payment">{totalPayment}</p>
            </div>
        </div>
    </section>
    </main>
	);
};

export default LoanRequest;


/*
		<main class = "main-content">
			<section class = "prestamos">
				<h1>Préstamos Disponibles</h1>
				<p>Encuentra la mejor opción de financiamiento para tus necesidades.</p>
				<br />
				<div class = "loan-options">
					<div class = "loan-card">
						<h3>Préstamo Personal</h3>
						<ul>
							<li>Tasa de interés: 12% anual</li>
							<li>Monto máximo: $100.000</li>
							<li>Plazo: Hasta 24 meses</li>
						</ul>
						<button onclick = "openSimulator('Préstamo Personal', 12)">Seleccionar</button>
					</div>
					<div class = "loan-card">
						<h3>Préstamo Hipotecario</h3>
						<ul>
							<li>Tasa de interés: 8% anual</li>
							<li>Monto máximo: $500.000</li>
							<li>Plazo: Hasta 48 meses</li>
						</ul>
						<button onclick = "openSimulator('Préstamo Hipotecario', 8)">Seleccionar</button>
					</div>
					<div class = "loan-card">
						<h3>Préstamo Prendario</h3>
						<ul>
							<li>Tasa de interés: 9% anual</li>
							<li>Monto máximo: $50.000</li>
							<li>Plazo: Hasta 12 meses</li>
						</ul>
						<button onclick = "openSimulator('Préstamo Automotriz', 9)">Seleccionar</button>
					</div>
				</div>
				<div class = "loan-simulator">
					<h2>Solicitar un Préstamo</h2>
					<form id = "simulator-form">
						<div class = "form-group">
							<label for = "loan-type">Tipo de Préstamo:</label>
							<input type = "text" id = "loan-type" name = "loan-type" readonly />
						</div>
						<div class = "form-group">
							<label for = "amount">Monto:</label>
							<input type = "number" id = "amount" name = "amount" placeholder = "Ingrese el monto del préstamo" required />
						</div>
						<div class = "form-group">
							<label for = "interest-rate">Tasa de Interés (%):</label>
							<input type = "number" id = "interest-rate" name = "interest-rate" readonly />
						</div>
						<div class="form-group">
							<label for="term">Plazo (meses):</label>
							<input type="number" id="term" name="term" placeholder="Ingrese el plazo en meses" required />
						</div>
						<div class="form-buttons">
							<button class="request-loan" type="button" onclick="submitLoan()">Solicitar</button>
							<button class="calculate-loan" type="button" onclick="calculateLoan()">
								Calcular <span class="material-symbols-outlined  icon">calculate</span>
							</button>
						</div>
					</form>
					<div id="results">
						<p id="monthly-payment"></p>
						<p id="total-payment"></p>
					</div>
				</div>
			</section>
		</main>
*/

/*
const formulario = document.querySelector('#simulator-form');

function openSimulator(loanType, interestRate) {
	document.getElementById('loan-type').value = loanType;
	document.getElementById('interest-rate').value = interestRate;
	document.getElementById('amount').value = '';
	document.getElementById('term').value = '';
	document.getElementById('monthly-payment').innerText = '';
	document.getElementById('total-payment').innerText = '';
}

function calculateLoan() {
	const amount = parseFloat(document.getElementById('amount').value);
	const interestRate = parseFloat(document.getElementById('interest-rate').value);
	const term = parseInt(document.getElementById('term').value);

	if (amount && interestRate && term) {
		const monthlyInterest = interestRate / 100 / 12;
		const numberOfPayments = term;

		const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
		const totalPayment = monthlyPayment * numberOfPayments;

		document.getElementById('monthly-payment').innerText = `Cuota Mensual: $${monthlyPayment.toFixed(2)}`;
		document.getElementById('total-payment').innerText = `Pago Total: $${totalPayment.toFixed(2)}`;
	} else {
		alert('Por favor, completa todos los campos del formulario.');
	}
}

function submitLoan() {
	const usuarios = recuperarUsuariosDeLocalStorage();
	const usuarioActual = localStorage.getItem('usuarioActual');
	const type = document.getElementById('loan-type').value;
	const amount = parseFloat(document.getElementById('amount').value);
	const interestRate = parseFloat(document.getElementById('interest-rate').value);
	const term = parseInt(document.getElementById('term').value);
	if (confirm('¿Estás seguro de que quieres solicitar el prestamo?')) {
		usuarios[usuarioActual.toLowerCase()].saldo = parseFloat(usuarios[usuarioActual.toLowerCase()].saldo) + amount;
		usuarios[usuarioActual.toLowerCase()].historialPrestamos.push({
			fecha: new Date().toISOString().slice(0, 10),
			monto: amount,
			tipo: type,
			tasaInteres: interestRate,
			plazo: term
		});
		actualizarUsuariosEnLocalStorage(usuarios);
		mostrarExito('Prestamo realizado con éxito.');
		formulario.reset();
	} else {
		mostrarError('El prestamo no ha podido procesarse correctamente.');
	}
}

function validateForm() {
	const amount = document.getElementById('amount').value;
	const term = document.getElementById('term').value;

	if (amount <= 0 || term <= 0) {
		alert('El monto y el plazo deben ser mayores que cero.');
		return false;
	}
	return true;
}

function calculateLoanWithValidation() {
	if (validateForm()) {
		calculateLoan();
	}
}

function mostrarError(mensaje) {
	const alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('error');
	formulario.appendChild(alerta);
	setTimeout(() => alerta.remove(), 3000);
}

function mostrarExito(mensaje) {
	const alerta = document.createElement('p');
	alerta.textContent = mensaje;
	alerta.classList.add('exito');
	formulario.appendChild(alerta);
	setTimeout(() => alerta.remove(), 3000);
}

document.getElementById('simulator-form').addEventListener('submit', function (event) {
	event.preventDefault();
	calculateLoanWithValidation();
});


*/