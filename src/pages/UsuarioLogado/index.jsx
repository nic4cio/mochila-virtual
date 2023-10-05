import React, { useState, useEffect } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import estrela from "../../assets/estrela.png";
import mochila from "../../assets/mochila-azul-preenchida.png";
import "./style.css";
import axios from 'axios';

import { Link } from 'react-router-dom';

const UsuarioLogado = () => {

  const accessToken = sessionStorage.getItem('access_token'); // Get the access_token from local storage
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      common: {
        'Authorization': `Bearer ${accessToken}`, // Include the access_token
      },
    },
  });

  const [userData, setUserData] = useState({});

  // Example: Get user data
const getUserData = async () => {
  try {
    const response = await api.get('/users/me');

    // Handle the user data in the response
    const userData = response.data;
    console.log('User Data:', userData);
    setUserData(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

  // Call the function to retrieve user data when the component mounts
  useEffect(() => {
    getUserData();
  }, []); // Pass an empty dependency array to run this effect only once

  window.scrollTo(0, 0); //Reinicia o scroll

  // Abrir e fechar modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let curso = '';

  if(userData.curso == '"CC"' || userData.curso == 'CC'){
    curso = 'Ciência da Computação';
  } else {
    curso = 'Engenharia da Computação';
  }

  let usuario = '';

  if(userData.role == 'USER'){
    usuario = 'Usuário';
  } else if(userData.role == 'CURADOR'){
    usuario = 'Curador';
  } else {
    usuario = 'Em Análise';
  }
    
    return (
      <div>
        <CabecalhoLogado home="" curador="" disciplinas="" suaMochila="menuaSpanRegistros"/>
        <FontePoppins/>

        <div>
          <main>
            <button onClick={openModal} className='foto-usuario-button'>
              <img src={foto} alt="Foto usuário" className='foto-usuario'/>
            </button>
            <p className='info-usuario'>
              {userData.firstName /* Display user's firstName */}
              <br />
              Conta: <span className='alaranjado'>{usuario}</span>
              <div className='azul-turquesa'>{curso}</div>
            </p>

            <div className='clear'></div>

            <div id="periodo-1">
                  <img src={estrela} alt="Foto usuário" className='mini-logo'/>
                  <div className="subtitulo-usuario">Matérias Favoritas</div>

                  <div className='clear'></div>

                  <div className="scroll-container">
                      <button className="box">PROGRAMAÇÃO 1</button>
                      <button className="box2">BANCO DE DADOS</button>
                      <button className="box5">COMPILADORES</button>
                      <button className="box3">PROB E ESTAT</button>
                      <button className="box6">PDS</button>
                  </div>

                  <img src={mochila} alt="Foto usuário" className='mini-logo-triangulo'/>
                  <div className="subtitulo-usuario">Sua Mochila</div>

                  <div className='clear'></div>

                  <div className="scroll-container">
                      <Link to={"/conteudos-aprovados"}><button className="box-mochila">CONTEÚDOS APROVADOS</button></Link>
                      <Link to={"/submeter-conteudo"}><button className="box-mochila">SUBMETER CONTEÚDOS</button></Link>
                      {userData.role == 'CURADOR' && <Link to={"/aprovar-curadoria"}><button className="box-mochila">CURADORIA</button></Link>}
                  </div>

            </div>

            {/* MODAL */}
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div className="top" >Editar perfil</div>

                  <img src={foto} alt="Foto usuário" className='foto-usuario-modal'/>
                  
                  <div className='inputs-posicao'>
                    <input type="text" placeholder="  Nome" className="input-modal"/>
                    <input type="email" placeholder="  E-mail" className="input-modal"/>
                    <input type="password" placeholder="  Senha" className="input-modal"/>

                    <div><button onClick={closeModal} className="btn-cancelar">Cancelar</button></div>
                    <div><button onClick={closeModal} className="btn-salvar">Salvar</button></div>
                  </div>
                  
                </div>
              </div>
            )}
            {/* FIM MODAL */}
          </main>
          
        </div>
      </div>
    );
  };

export default UsuarioLogado
