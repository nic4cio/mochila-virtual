import React, { useState } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import "./style.css";

const SolicitarCurador = () => {
    
    return (
      <div>
        <CabecalhoLogado/>
        <FontePoppins/>

        <div id="tres">
            <div id="um">
                <div className="titulo-curadoria">Solicitar ser curador</div>

                <img src={foto} alt="Foto usuário" className='foto-usuario'/>
            </div>

            <div id="dois">
                <form action="">
                    <div className="titulo-dados">Olá, <span className="marrom">Vinícius</span>. Envie os dados abaixo:</div>
                    <div className="subtitulo-dados">Em qual matéria você deseja ser curador?</div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="subtitulo-dados">Anexe seu histórico analítico:</div>
                    
                    <input type="file" id="arquivo" name="arquivo" accept=".pdf" />
                    <br />
                    
                    <div className="subtitulo-dados">Escreva razões de porque você gostaria de ser curador</div>
                    
                    <textarea className="text-area" name="comentario" rows="4" cols="25"></textarea><br />

                    <button className="enviar">Enviar</button>
                </form>

            </div>

        </div>
        

      </div>
    );
  };

export default SolicitarCurador
