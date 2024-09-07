import React, { useState } from 'react';
import './estilos.css';  

const Conversor = () => {
  const [cantidad, setCantidad] = useState(1);
  const [de, setDe] = useState('ARS');
  const [a, setA] = useState('ARS');
  const [resultado, setResultado] = useState(0);

  const tasas = {
    USD: 1330.0,
    EUR: 1005.0,
  };

  const actualizarValor = (valor) => {
    setCantidad(valor);
  };

  const convertir = () => {
    let resultado = 0;
    if (de === 'ARS' && a === 'USD') {
      resultado = cantidad / tasas['USD'];
    } else if (de === 'USD' && a === 'ARS') {
      resultado = cantidad * tasas['USD'];
    } else if (de === 'ARS' && a === 'EUR') {
      resultado = cantidad / tasas['EUR'];
    } else if (de === 'EUR' && a === 'ARS') {
      resultado = cantidad * tasas['EUR'];
    } else if (de === 'USD' && a === 'EUR') {
      resultado = (cantidad * tasas['USD']) / tasas['EUR'];
    } else if (de === 'EUR' && a === 'USD') {
      resultado = (cantidad * tasas['EUR']) / tasas['USD'];
    } else {
      resultado = cantidad; // Misma moneda
    }

    setResultado(resultado.toFixed(2));
  };

  return (
    <div className="converter">
      <h1>Conversor de Divisas</h1>
      <div className="conversion-form">
        <div className="input-group">
          <label htmlFor="cantidad">Importe:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            min="0"
            value={cantidad}
            onChange={(e) => actualizarValor(e.target.value)}
          />
          <span>{cantidad}</span>
        </div>

        <div className="input-group">
          <label htmlFor="de">De:</label>
          <select id="de" name="de" value={de} onChange={(e) => setDe(e.target.value)}>
            <option value="ARS">Peso Argentino - ARS</option>
            <option value="USD">Dólar Blue - USD</option>
            <option value="EUR">Euro - EUR</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="a">A:</label>
          <select id="a" name="a" value={a} onChange={(e) => setA(e.target.value)}>
            <option value="ARS">Peso Argentino - ARS</option>
            <option value="USD">Dólar Blue - USD</option>
            <option value="EUR">Euro - EUR</option>
          </select>
        </div>
      </div>
      <button className="convert-button" onClick={convertir}>Convertir</button>
      <h2>Resultado: ${resultado}</h2>
    </div>
  );
};

export default Conversor;
