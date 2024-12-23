import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas contratante
import MeusProjetosContratante from '../pages/MeusProjetosContratante/MeusProjetosContratante';
import VisualizacaoMeusProjetosContratante from '../pages/VisualizacaoMeusProjetosContratante/VisualizacaoMeusProjetosContratante';
import PublicacaoProjetoContratante from '../pages/PublicacaoProjetoContratante/PublicacaoProjetoContratante';
import ProjetoPublicadoContratante from '../pages/ProjetoPublicadoContratante/ProjetoPublicadoContratante';
import MeuPerfilContratante from '../pages/MeuPerfilContratante/MeuPerfilContratante';
import EditarMeuPerfilContratante from '../pages/EditarMeuPerfilContratante/EditarMeuPerfilContratante';
import ConfiguracaoMeuPerfilContratante from '../pages/ConfiguracaoMeuPerfilContratante/ConfiguracaoMeuPerfilContratante';


// Páginas freelancer
import MeusProjetosFreelancer from '../pages/MeusProjetosFreelancer/MeusProjetosFreelancer';
import PropostaFreelancer from '../pages/PropostaFreelancer/PropostaFreelancer';
import EditarMeuPerfilFreelancer from '../pages/EditarMeuPerfilFreelancer/EditarMeuPerfilFreelancer';

import AreaDeAtuacaoFreelancer from '../pages/AreaDeAtuacaoFreelancer/AreaDeAtuacaoFreelancer';
// Páginas gerais
import Home from '../pages/home/Home';
import Sobre from '../pages/sobre/sobre';
import Servicos from '../pages/serviços/Serviços';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="Login" element={<Login />} />"
        <Route path="Cadastro" element={<Cadastro />} />
        
        <Route path="meusProjetosContratante" element={<MeusProjetosContratante />} />
        <Route path="visualizacaoMeusProjetosContratante" element={<VisualizacaoMeusProjetosContratante />} />
        <Route path="publicacaoProjetoContratante" element={<PublicacaoProjetoContratante />} />
        <Route path="projetoPublicadoContratante" element={<ProjetoPublicadoContratante />} />
        <Route path="meuPerfilContratante" element={<MeuPerfilContratante />} />
        <Route path="editarMeuPerfilContratante" element={<EditarMeuPerfilContratante />} />
        <Route path="configuracaoMeuPerfilContratante" element={<ConfiguracaoMeuPerfilContratante />} />

        <Route path="meusProjetosFreelancer" element={<MeusProjetosFreelancer />} />
        <Route path="propostaFreelancer" element={<PropostaFreelancer />} />
        <Route path="areaDeAtuacaoFreelancer" element={<AreaDeAtuacaoFreelancer />} />
        <Route path="editarMeuPerfilFreelancer" element={<EditarMeuPerfilFreelancer />} />
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
