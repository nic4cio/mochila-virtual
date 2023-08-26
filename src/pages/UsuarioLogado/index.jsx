import React from 'react'
import FontePoppins from '../../components/FontePoppins';
import Cabecalho from "../../components/Cabecalho";
import foto from "../../assets/macaquinho-modelo.png"
import estrela from "../../assets/estrela.png"
import logo from "../../assets/pdslogo.svg"

import "./style.css"

const UsuarioLogado = () => {
    
    return (
      <div>
        <Cabecalho/>
        <FontePoppins/>

        <div>

          <main>
            <img src={foto} alt="Foto usuário" className='foto-usuario'/>
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
          </main>
          
        </div>
      </div>
    );
  };

export default UsuarioLogado
