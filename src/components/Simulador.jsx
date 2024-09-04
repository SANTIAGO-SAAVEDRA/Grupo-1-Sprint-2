import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './simulador.css';

// Simulador de préstamos en React
export const Simulador = () => {
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Calcula el préstamo
  const calculateLoan = () => {
    if (amount && interestRate && term) {
      const monthlyInterest = interestRate / 100 / 12;
      const numberOfPayments = term;

      const monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
      const totalPayment = monthlyPayment * numberOfPayments;

      setMonthlyPayment(`Cuota Mensual: $${monthlyPayment.toFixed(2)}`);
      setTotalPayment(`Pago Total: $${totalPayment.toFixed(2)}`);
    } else {
      setError('Por favor, completa todos los campos del formulario.');
    }
  };

  // Valida el formulario
  const validateForm = () => {
    if (amount <= 0 || term <= 0) {
      setError('El monto y el plazo deben ser mayores que cero.');
      return false;
    }
    return true;
  };

  // Calcula el préstamo con validación
  const calculateLoanWithValidation = () => {
    if (validateForm()) {
      calculateLoan();
    }
  };

  // Muestra mensajes de éxito
  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(''), 3000);
  };

  // Muestra mensajes de error
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(''), 3000);
  };

  // Envía la solicitud de préstamo
  const submitLoan = () => {
    const usuarios = recuperarUsuariosDeLocalStorage();
    const usuarioActual = localStorage.getItem('usuarioActual');

    if (window.confirm('¿Estás seguro de que quieres solicitar el préstamo?')) {
      usuarios[usuarioActual.toLowerCase()].saldo += parseFloat(amount);
      usuarios[usuarioActual.toLowerCase()].historialPrestamos.push({
        fecha: new Date().toISOString().slice(0, 10),
        monto: parseFloat(amount),
        tipo: loanType,
        tasaInteres: parseFloat(interestRate),
        plazo: parseInt(term)
      });

      actualizarUsuariosEnLocalStorage(usuarios);
      showSuccess('Préstamo realizado con éxito.');
      formRef.current.reset();
    } else {
      showError('El préstamo no ha podido procesarse correctamente.');
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    calculateLoanWithValidation();
  };

  return (
    <div>

          <h1>Préstamos Disponibles</h1>
          <p>Encuentra la mejor opción de financiamiento para tus necesidades.</p>

          <div className="loan-options">
            {/* Loan options content */}
          </div>

          <div className="loan-simulator">
            <h2>Solicitar un Préstamo</h2>
            <form id="simulator-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="loan-type">Tipo de Préstamo:</label>
                <input
                  type="text"
                  id="loan-type"
                  value={loanType}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount">Monto:</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Ingrese el monto del préstamo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interest-rate">Tasa de Interés (%):</label>
                <input
                  type="number"
                  id="interest-rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="term">Plazo (meses):</label>
                <input
                  type="number"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Ingrese el plazo en meses"
                  required
                />
              </div>

              <div className="form-buttons">
                <button
                  className="request-loan"
                  type="button"
                  onClick={submitLoan}
                >
                  Solicitar
                </button>
                <button
                  className="calculate-loan"
                  type="button"
                  onClick={calculateLoanWithValidation}
                >
                  Calcular <span className="material-symbols-outlined icon">calculate</span>
                </button>
              </div>

            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="exito">{success}</p>}
            <div id="results">
              <p id="monthly-payment">{monthlyPayment}</p>
              <p id="total-payment">{totalPayment}</p>
            </div>
          </div>


    </div>
  );
};

// Funciones de manejo de usuarios (deberían ser implementadas o importadas)
const recuperarUsuariosDeLocalStorage = () => {
  // Implementar la lógica para recuperar usuarios
  return JSON.parse(localStorage.getItem('usuarios')) || {};
};

const actualizarUsuariosEnLocalStorage = (usuarios) => {
  // Implementar la lógica para actualizar usuarios en localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
};


