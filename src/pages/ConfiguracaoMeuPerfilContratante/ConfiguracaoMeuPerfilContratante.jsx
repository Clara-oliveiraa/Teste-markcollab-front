import React, { useState } from 'react';
import './ConfiguracaoMeuPerfilContratante.css';
import { FaUser, FaCog, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ConfiguracaoMeuPerfilContratante = () => {
  const [nome, setNome] = useState('João da Silva');
  const [sobrenome, setSobrenome] = useState('Silva');
  const [email, setEmail] = useState('joao@example.com');
  const [endereco, setEndereco] = useState('Rua Exemplo, 123');
  const [contato, setContato] = useState('(11) 99999-9999');
  const [cidade, setCidade] = useState('São Paulo');
  const [estado, setEstado] = useState('SP');
  const [senha, setSenha] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    // Implementar a lógica para salvar as alterações do perfil
    console.log('Nome:', nome);
    console.log('Sobrenome:', sobrenome);
    console.log('Email:', email);
    console.log('Endereço:', endereco);
    console.log('Contato:', contato);
    console.log('Cidade:', cidade);
    console.log('Estado:', estado);
    console.log('Senha:', senha);
  };

  return (
    <div>
      <Navbar />
    <div className="perfil-container">
      <aside className="perfil-sidebar">
        <nav className="perfil-nav">
          <ul>
            <li>
              <a href="/meu-perfil">
                <FaUser className="perfil-icon" />
                Meu Perfil
              </a>
            </li>
            <li>
              <a href="/editar-perfil">
                <FaEdit className="perfil-icon" />
                Editar Perfil
              </a>
            </li>
            <li>
              <a href="/configuracoes">
                <FaCog className="perfil-icon" />
                Configurações
              </a>
            </li>
            <li>
              <a href="/sair">
                <FaSignOutAlt className="perfil-icon" />
                Sair
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="perfil-main">
        <form className="perfil-form" onSubmit={handleSave}>
          <h1 className="perfil-title">Configurações do Perfil</h1>
          <div className="perfil-field">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input
              type="text"
              id="sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="contato">Contato:</label>
            <input
              type="tel"
              id="contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="cidade">Cidade:</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="estado">Estado:</label>
            <input
              type="text"
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="perfil-field">
            <label htmlFor="foto">Foto de perfil:</label>
            <input
              type="file"
              id="foto"
              className="perfil-upload-button"
            />
          </div>
          <button className="perfil-button" type="submit">Salvar</button>
        </form>
      </main>
    </div>
      <Footer />
      </div>
  );
};

export default ConfiguracaoMeuPerfilContratante;
