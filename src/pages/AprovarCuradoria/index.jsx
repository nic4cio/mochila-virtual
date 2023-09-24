import React, { useState, useEffect } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import "./style.css";

import { getContent } from "../../services/api";

import MatCuradoria from "../../components/MatCuradoria";


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

  const [banco, setBanco] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent(); 
        setBanco(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  let cont = 0;


  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <br />
      <br />

      <div className='aprove-conteudos'>

        <h3>Aprove conteúdos</h3>
        <div className="indicador-periodo">1°Período</div>

        <MatCuradoria cor="titleCardbox" materia="Programação 1"/>
        <MatCuradoria cor="titleCardbox" materia="Matemática Discreta"/>
        <MatCuradoria cor="titleCardbox" materia="Cálculo Diferencial e Integral"/>
        <MatCuradoria cor="titleCardbox" materia="Computação, Sociedade e Ética"/>
        <MatCuradoria cor="titleCardbox" materia="Lógica para Computação"/>

        <div className="indicador-periodo">2°Período</div>

        <MatCuradoria cor="titleCardbox2" materia="Organização e Arquitetura de computadores"/>
        <MatCuradoria cor="titleCardbox2" materia="Geometria Analítica"/>
        <MatCuradoria cor="titleCardbox2" materia="Estrutura de Dados"/>
        <MatCuradoria cor="titleCardbox2" materia="Banco de Dados"/>

        <div className="indicador-periodo">3°Período</div>

        <MatCuradoria cor="titleCardbox3" materia="Redes de Computadores"/>
        <MatCuradoria cor="titleCardbox3" materia="Probabilidade e Estatística"/>
        <MatCuradoria cor="titleCardbox3" materia="Teoria dos Grafos"/>
        <MatCuradoria cor="titleCardbox3" materia="Álgebra Linear"/>

        <div className="indicador-periodo">4°Período</div>

        <MatCuradoria cor="titleCardbox4" materia="Teoria da Computação"/>
        <MatCuradoria cor="titleCardbox4" materia="PAA"/>
        <MatCuradoria cor="titleCardbox4" materia="Programação 3"/>
        <MatCuradoria cor="titleCardbox4" materia="Programação 2"/>

        <div className="indicador-periodo">5°Período</div>

        <MatCuradoria cor="titleCardbox5" materia="Sistemas Operacionais"/>
        <MatCuradoria cor="titleCardbox5" materia="Inteligência Artificial"/>
        <MatCuradoria cor="titleCardbox5" materia="Compiladores"/>
        <MatCuradoria cor="titleCardbox5" materia="Computação Gráfica"/>

        <div className="indicador-periodo">6°Período</div>

        <MatCuradoria cor="titleCardbox6" materia="Projeto e Desenvolvimento de Sistemas"/>

        <div className="indicador-periodo">7°Período</div>

        <MatCuradoria cor="titleCardbox7" materia="Noções de Direito"/>
        <MatCuradoria cor="titleCardbox7" materia="Metodologia de Pesquisa"/>

        <div className="indicador-periodo">Computação Visual</div>

        <MatCuradoria cor="titleCardbox-computacao-visual" materia="Aprendizagem de Máquina"/>
        <MatCuradoria cor="titleCardbox-computacao-visual" materia="Calculo 3"/>
        <MatCuradoria cor="titleCardbox-computacao-visual" materia="Processamento de Imagem"/>
        <MatCuradoria cor="titleCardbox-computacao-visual" materia="Redes Neurais e Aprendizado Profundo"/>
        <MatCuradoria cor="titleCardbox-computacao-visual" materia="Visão Computacional"/>

        <div className="indicador-periodo">Sistemas Inteligentes</div>

        <MatCuradoria cor="titleCardbox-sistemas-inteligentes" materia="Computação Evolucionária"/>
        <MatCuradoria cor="titleCardbox-sistemas-inteligentes" materia="Ciência de Dados"/>


        <div className="indicador-periodo">Sistemas de Computação</div>

        <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Sistemas Embarcados"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Sistemas Digitais"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Microcontroladores e Aplicações"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Fgpa"/>

        <div className="indicador-periodo">Sistemas de Informação</div>

        <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Sistemas Distribuídos"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Segurança de Sistemas Computacionais"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Interação humano-máquina"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="CLP"/>
        <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Gerência de Projeto"/>

        <br />

      </div>
      <div className='linha-vertical'></div>
      {/*
      <div className='aceite-curadores'>

        <h3> Aceite curadores</h3><br />

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
      </div>*/}
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

        {/* Modal curador 
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
         FIM MODAL 

    </div>
    */}
    </div>
  );
};

export default AprovarCuradoria;
