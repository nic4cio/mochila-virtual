import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import "./style.css";


const AprovarCuradoria = () => {
  window.scrollTo(0, 0); // Reinicia o scroll

  // Abrir e fechar modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };


  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <br />
      <br />

      <div className='aprove-conteudos'>

        <div className="indicador-periodo">Aprove conteúdos</div>

        <div className='materia-dinamica'>
            <div className="indicador-periodo">2°Período</div>

            Em <span className='fundo-materia-ga'>GA</span>
          
            <div className="scroll-container-curadoria">
                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>
            </div>
        </div>

        <br />

        <div className='materia-dinamica'>
            <div className="indicador-periodo">4°Período</div>

            Em <span className='fundo-materia'>PAA</span>
          
            <div className="scroll-container-curadoria">
                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>

                <button onClick={openModal} className="box-curadoria">
                    Tomás<br />
                    "Lista de ativida..."<br />
                    <button className='btn-aceitar'></button>
                    <button className='btn-rejeitar'></button>
                </button>
            </div>
        </div>

        <br />

        <div className='materia-dinamica'>
            <div className="indicador-periodo">5°Período</div>

            Em <span className='fundo-materia-ia'>IA</span>
          
            <br />
            <br />
            <div>Nenhum conteúdo publicado no momento. Você está atualizado.</div>
            
        </div>


      </div>

      <div className='linha-vertical'></div>

      <div className='aceite-curadores'>

        <div className="indicador-periodo"> Aceite curadores</div><br />

        <div>
            <button onClick={openSecondModal} className="box-curadoria">

                <div className='titulo-box-curadoria'>Rodrigo</div>
                <button className='btn-aceitar'></button>
                <button className='btn-rejeitar'></button>
                <img src={foto} alt="Foto usuário" className='foto-usuario-box-curador'/>
            </button>
        </div>

        <div>
          <button onClick={openSecondModal} className="box-curadoria">

                <div className='titulo-box-curadoria'>Vinícius</div>
                <button className='btn-aceitar'></button>
                <button className='btn-rejeitar'></button>
                <img src={foto} alt="Foto usuário" className='foto-usuario-box-curador'/>
          </button>
        </div>

        <div>
          <button onClick={openSecondModal} className="box-curadoria">

                <div className='titulo-box-curadoria'>Marcos</div>
                <button className='btn-aceitar'></button>
                <button className='btn-rejeitar'></button>
                <img src={foto} alt="Foto usuário" className='foto-usuario-box-curador'/>
          </button>
        </div>

        {/* MOdal exercícios */}
        {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div className="top" >“Exercícios de fixação”</div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br /> {/* Conteúdos do post ficarão aqui />*/}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div>
                        <button onClick={closeModal} class="btn-aceitar-modal"></button>
                        <button onClick={closeModal} class="btn-recusar-modal"></button>
                    </div>
                </div>
              </div>
            )}
        {/* FIM MODAL */}

        {/* Modal curador */}
        {isSecondModalOpen && (
        <div className="modal-overlay">
            <div className="modal-content">
            <div className="top">Aceitar curador?</div>

            <img src={foto} alt="Foto usuário" className='foto-modal-aprovar-curadoria'/>

            <div>
                <button onClick={closeSecondModal} class="btn-aceitar-modal"></button>
                <button onClick={closeSecondModal} class="btn-recusar-modal"></button>
            </div>
            </div>
        </div>
        )}
        {/* FIM MODAL */}

    </div>
    </div>
  );
};

export default AprovarCuradoria;
