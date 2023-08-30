import React, { useState } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import estrela from "../../assets/estrela.png";
import logo from "../../assets/pdslogo.svg";
import "./style.css";

const UsuarioLogado = () => {

  // Abrir e fechar modal
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
    
    return (
      <div>
        <CabecalhoLogado/>
        <FontePoppins/>

        <div>
          <main>
            <button onClick={openModal} className='foto-usuario-button'>
              <img src={foto} alt="Foto usuário" className='foto-usuario'/>
            </button>
            <p className='info-usuario'>
              Vinícius Maia de Holanda<br />
              Conta: <span className='alaranjado'>Estudante</span>
              <div className='azul-turquesa'>Ciência da Computação</div>
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

                  <img src={logo} alt="Foto usuário" className='mini-logo-triangulo'/>
                  <div className="subtitulo-usuario">Sua Mochila</div>

                  <div className='clear'></div>

                  <div className="scroll-container">
                      <button className="box-mochila">CONTEÚDOS SALVOS</button>
                      <button className="box-mochila">CONTEÚDOS APROVADOS</button>
                      <button className="box-mochila">SUBMETER CONTEÚDOS</button>
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

                    <div><button onClick={closeModal} class="btn-cancelar">Cancelar</button></div>
                    <div><button onClick={closeModal} class="btn-salvar">Salvar</button></div>
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
