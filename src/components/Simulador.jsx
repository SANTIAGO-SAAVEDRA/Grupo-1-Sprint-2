import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './simulador.css';

// Simulador de préstamos en React
export const Simulador = () => {
	return <div className="simulador"></div>;
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

