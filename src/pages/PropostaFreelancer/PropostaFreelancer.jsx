import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './PropostaFreelancer.css';

const PropostaFreelancer = () => {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica para enviar a proposta aqui
    console.log('Valor:', valor);
    console.log('Descrição:', descricao);
  };

  return (
    <div>
      <Navbar />
      <div className="proposta-container">
        <form className="proposta-form" onSubmit={handleSubmit}>
          <h1 className="proposta-title">Proposta para Projeto</h1>
          <div className="proposta-field">
            <label htmlFor="valor">Valor (R$):</label>
            <input
              type="text"
              id="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              required
            />
          </div>
          <div className="proposta-field">
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="proposta-button" type="submit">Enviar proposta</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PropostaFreelancer;
