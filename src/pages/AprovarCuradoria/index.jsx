import { useState, useEffect } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import "./style.css";

import { getUser } from "../../services/api";

import MatCuradoria from "../../components/MatCuradoria";

import CadaCurador from "../../components/CadaCurador"

import axios from 'axios';


const AprovarCuradoria = () => {
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

  window.scrollTo(0, 0); // Reinicia o scroll


      const [banco2, setBanco2] = useState([]);

      useEffect(() => {
          const fetchData = async () => {
          try {
              const response = await getUser(); 
              setBanco2(response.data); 
          } catch (error) {
              console.error('Error fetching data:', error);
          }
          };
  
          fetchData(); 
      }, []);

      let cont2 = 0;

  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <br />
      <br />

      {
        (userData.curso == '"CC"' || userData.curso == 'CC') &&
        <div className='aprove-conteudos'>

        <h3>Aprove conteúdos</h3>
        <div className="indicador-periodo">1°Período</div>

        {userData.matCurador.includes("Programação 1") && <MatCuradoria cor="titleCardbox" materia="Programação 1"/>}
        {userData.matCurador.includes("Matemática Discreta") && <MatCuradoria cor="titleCardbox" materia="Matemática Discreta"/>}
        {userData.matCurador.includes("Cálculo Diferencial e Integral") && <MatCuradoria cor="titleCardbox" materia="Cálculo Diferencial e Integral"/>}
        {userData.matCurador.includes("Computação, Sociedade e Ética") && <MatCuradoria cor="titleCardbox" materia="Computação, Sociedade e Ética"/>}
        {userData.matCurador.includes("Lógica para Computação") && <MatCuradoria cor="titleCardbox" materia="Lógica para Computação"/>}

        <div className="indicador-periodo">2°Período</div>

        {userData.matCurador.includes("Organização e Arquitetura de computadores") && <MatCuradoria cor="titleCardbox2" materia="Organização e Arquitetura de computadores"/>}
        {userData.matCurador.includes("Geometria Analítica") && <MatCuradoria cor="titleCardbox2" materia="Geometria Analítica"/>}
        {userData.matCurador.includes("Estrutura de Dados") && <MatCuradoria cor="titleCardbox2" materia="Estrutura de Dados"/>}
        {userData.matCurador.includes("Banco de Dados") && <MatCuradoria cor="titleCardbox2" materia="Banco de Dados"/>}

        <div className="indicador-periodo">3°Período</div>

        {userData.matCurador.includes("Redes de Computadores") && <MatCuradoria cor="titleCardbox3" materia="Redes de Computadores"/>}
        {userData.matCurador.includes("Probabilidade e Estatística") && <MatCuradoria cor="titleCardbox3" materia="Probabilidade e Estatística"/>}
        {userData.matCurador.includes("Teoria dos Grafos") && <MatCuradoria cor="titleCardbox3" materia="Teoria dos Grafos"/>}
        {userData.matCurador.includes("Álgebra Linear") && <MatCuradoria cor="titleCardbox3" materia="Álgebra Linear"/>}

        <div className="indicador-periodo">4°Período</div>

        {userData.matCurador.includes("Teoria da Computação") && <MatCuradoria cor="titleCardbox4" materia="Teoria da Computação"/>}
        {userData.matCurador.includes("PAA") && <MatCuradoria cor="titleCardbox4" materia="PAA"/>}
        {userData.matCurador.includes("Programação 3") && <MatCuradoria cor="titleCardbox4" materia="Programação 3"/>}
        {userData.matCurador.includes("Programação 2") && <MatCuradoria cor="titleCardbox4" materia="Programação 2"/>}

        <div className="indicador-periodo">5°Período</div>

        {userData.matCurador.includes("Sistemas Operacionais") && <MatCuradoria cor="titleCardbox5" materia="Sistemas Operacionais"/>}
        {userData.matCurador.includes("Inteligência Artificial") && <MatCuradoria cor="titleCardbox5" materia="Inteligência Artificial"/>}
        {userData.matCurador.includes("Compiladores") && <MatCuradoria cor="titleCardbox5" materia="Compiladores"/>}
        {userData.matCurador.includes("Computação Gráfica") && <MatCuradoria cor="titleCardbox5" materia="Computação Gráfica"/>}

        <div className="indicador-periodo">6°Período</div>

        {userData.matCurador.includes("Projeto e Desenvolvimento de Sistemas") && <MatCuradoria cor="titleCardbox6" materia="Projeto e Desenvolvimento de Sistemas"/>}

        <div className="indicador-periodo">7°Período</div>

        {userData.matCurador.includes("Noções de Direito") && <MatCuradoria cor="titleCardbox7" materia="Noções de Direito"/>}
        {userData.matCurador.includes("Metodologia de Pesquisa") && <MatCuradoria cor="titleCardbox7" materia="Metodologia de Pesquisa"/>}

        <div className="indicador-periodo">Computação Visual</div>

        {userData.matCurador.includes("Aprendizagem de Máquina") && <MatCuradoria cor="titleCardbox-computacao-visual" materia="Aprendizagem de Máquina"/>}
        {userData.matCurador.includes("Cálculo 3") && <MatCuradoria cor="titleCardbox-computacao-visual" materia="Cálculo 3"/>}
        {userData.matCurador.includes("Processamento de Imagem") && <MatCuradoria cor="titleCardbox-computacao-visual" materia="Processamento de Imagem"/>}
        {userData.matCurador.includes("Redes Neurais e Aprendizado Profundo") && <MatCuradoria cor="titleCardbox-computacao-visual" materia="Redes Neurais e Aprendizado Profundo"/>}
        {userData.matCurador.includes("Visão Computacional") && <MatCuradoria cor="titleCardbox-computacao-visual" materia="Visão Computacional"/>}

        <div className="indicador-periodo">Sistemas Inteligentes</div>

        {userData.matCurador.includes("Computação Evolucionária") && <MatCuradoria cor="titleCardbox-sistemas-inteligentes" materia="Computação Evolucionária"/>}
        {userData.matCurador.includes("Ciência de Dados") && <MatCuradoria cor="titleCardbox-sistemas-inteligentes" materia="Ciência de Dados"/>}


        <div className="indicador-periodo">Sistemas de Computação</div>

        {userData.matCurador.includes("Sistemas Embarcados") && <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Sistemas Embarcados"/>}
        {userData.matCurador.includes("Sistemas Digitais") && <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Sistemas Digitais"/>}
        {userData.matCurador.includes("Microcontroladores e Aplicações") && <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Microcontroladores e Aplicações"/>}
        {userData.matCurador.includes("Fgpa") && <MatCuradoria cor="titleCardbox-sistemas-de-computacao" materia="Fgpa"/>}

        <div className="indicador-periodo">Sistemas de Informação</div>

        {userData.matCurador.includes("Sistemas Distribuídos") && <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Sistemas Distribuídos"/>}
        {userData.matCurador.includes("Segurança de Sistemas Computacionais") && <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Segurança de Sistemas Computacionais"/>}
        {userData.matCurador.includes("Interação homem-máquina") && <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Interação homem-máquina"/>}
        {userData.matCurador.includes("CLP") && <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="CLP"/>}
        {userData.matCurador.includes("Gerência de Projeto") && <MatCuradoria cor="titleCardbox-sistemas-de-informacao" materia="Gerência de Projeto"/>}

        <br />

      </div>

      }
      { (userData.curso == '"EC"' || userData.curso == 'EC') &&
        <div className='aprove-conteudos'>

        <h3>Aprove conteúdos</h3>
        <div className="indicador-periodo">1°Período</div>

        {userData.matCurador.includes("Inglês Instrumental") && <MatCuradoria cor="titleCardbox" materia="Inglês Instrumental"/>}
        {userData.matCurador.includes("Programação 1") && <MatCuradoria cor="titleCardbox" materia="Programação 1"/>}
        {userData.matCurador.includes("Matemática Discreta") && <MatCuradoria cor="titleCardbox" materia="Matemática Discreta"/>}
        {userData.matCurador.includes("Cálculo 1") && <MatCuradoria cor="titleCardbox" materia="Cálculo 1"/>}
        {userData.matCurador.includes("Geometria Analítica") && <MatCuradoria cor="titleCardbox" materia="Geometria Analítica"/>}
        {userData.matCurador.includes("Introdução à Engenharia da Computação") && <MatCuradoria cor="titleCardbox" materia="Introdução à Engenharia da Computação"/>}

        <div className="indicador-periodo">2°Período</div>

        {userData.matCurador.includes("Lógica para Computação") && <MatCuradoria cor="titleCardbox2" materia="Lógica para Computação"/>}
        {userData.matCurador.includes("Estrutura de Dados") && <MatCuradoria cor="titleCardbox2" materia="Estrutura de Dados"/>}
        {userData.matCurador.includes("Física 1") && <MatCuradoria cor="titleCardbox2" materia="Física 1"/>}
        {userData.matCurador.includes("Cálculo 2") && <MatCuradoria cor="titleCardbox2" materia="Cálculo 2"/>}
        {userData.matCurador.includes("Álgebra Linear") && <MatCuradoria cor="titleCardbox2" materia="Álgebra Linear"/>}
        {userData.matCurador.includes("Circuitos Digitais") && <MatCuradoria cor="titleCardbox2" materia="Circuitos Digitais"/>}
        {userData.matCurador.includes("Desenho") && <MatCuradoria cor="titleCardbox2" materia="Desenho"/>}

        <div className="indicador-periodo">3°Período</div>

        {userData.matCurador.includes("Linguagens Formais, Autômatos e Computibilidade") && <MatCuradoria cor="titleCardbox3" materia="Linguagens Formais, Autômatos e Computibilidade"/>}
        {userData.matCurador.includes("Programação 2") && <MatCuradoria cor="titleCardbox3" materia="Programação 2"/>}
        {userData.matCurador.includes("Física 2") && <MatCuradoria cor="titleCardbox3" materia="Física 2"/>}
        {userData.matCurador.includes("Cálculo 3") && <MatCuradoria cor="titleCardbox3" materia="Cálculo 3"/>}
        {userData.matCurador.includes("Metodologia de Pesquisa") && <MatCuradoria cor="titleCardbox3" materia="Metodologia de Pesquisa"/>}
        {userData.matCurador.includes("Sistemas Digitais") && <MatCuradoria cor="titleCardbox3" materia="Sistemas Digitais"/>}
        {userData.matCurador.includes("Química Tecnológica") && <MatCuradoria cor="titleCardbox3" materia="Química Tecnológica"/>}

        <div className="indicador-periodo">4°Período</div>

        {userData.matCurador.includes("Probabilidade e Estatística") && <MatCuradoria cor="titleCardbox4" materia="Probabilidade e Estatística"/>}
        {userData.matCurador.includes("Engenharia de Software") && <MatCuradoria cor="titleCardbox4" materia="Engenharia de Software"/>}
        {userData.matCurador.includes("Cálculo 4") && <MatCuradoria cor="titleCardbox4" materia="Cálculo 4"/>}
        {userData.matCurador.includes("Variáveis Complexas") && <MatCuradoria cor="titleCardbox4" materia="Variáveis Complexas"/>}
        {userData.matCurador.includes("Organização e Arquitetura de computadores") && <MatCuradoria cor="titleCardbox4" materia="Organização e Arquitetura de computadores"/>}
        {userData.matCurador.includes("Física 3") && <MatCuradoria cor="titleCardbox4" materia="Física 3"/>}

        <div className="indicador-periodo">5°Período</div>

        {userData.matCurador.includes("PAA") && <MatCuradoria cor="titleCardbox5" materia="PAA"/>}
        {userData.matCurador.includes("Circuitos Elétricos") && <MatCuradoria cor="titleCardbox5" materia="Circuitos Elétricos"/>}
        {userData.matCurador.includes("Redes de Computadores") && <MatCuradoria cor="titleCardbox5" materia="Redes de Computadores"/>}
        {userData.matCurador.includes("Sinais e Sistemas") && <MatCuradoria cor="titleCardbox5" materia="Sinais e Sistemas"/>}
        {userData.matCurador.includes("Inteligência Artificial") && <MatCuradoria cor="titleCardbox5" materia="Inteligência Artificial"/>}
        {userData.matCurador.includes("Sistemas Operacionais") && <MatCuradoria cor="titleCardbox5" materia="Sistemas Operacionais"/>}
        {userData.matCurador.includes("Teoria dos Grafos") && <MatCuradoria cor="titleCardbox5" materia="Teoria dos Grafos"/>}

        <div className="indicador-periodo">6°Período</div>

        {userData.matCurador.includes("Princípios de Comunicação") && <MatCuradoria cor="titleCardbox6" materia="Princípios de Comunicação"/>}
        {userData.matCurador.includes("Eletrônica") && <MatCuradoria cor="titleCardbox6" materia="Eletrônica"/>}
        {userData.matCurador.includes("Métodos Numéricos") && <MatCuradoria cor="titleCardbox6" materia="Métodos Numéricos"/>}
        {userData.matCurador.includes("Sistemas de Controle 1") && <MatCuradoria cor="titleCardbox6" materia="Sistemas de Controle 1"/>}
        {userData.matCurador.includes("Computação, Sociedade e Ética") && <MatCuradoria cor="titleCardbox6" materia="Computação, Sociedade e Ética"/>}
        {userData.matCurador.includes("Empreendedorismo") && <MatCuradoria cor="titleCardbox6" materia="Empreendedorismo"/>}
        {userData.matCurador.includes("Fenômenos de Transporte") && <MatCuradoria cor="titleCardbox6" materia="Fenômenos de Transporte"/>}

        <div className="indicador-periodo">7°Período</div>

        {userData.matCurador.includes("Banco de Dados") && <MatCuradoria cor="titleCardbox7" materia="Banco de Dados"/>}
        {userData.matCurador.includes("Noções de Direito") && <MatCuradoria cor="titleCardbox7" materia="Noções de Direito"/>}
        {userData.matCurador.includes("Sistemas de Controle 2") && <MatCuradoria cor="titleCardbox7" materia="Sistemas de Controle 2"/>}
        {userData.matCurador.includes("Microcontroladores e Aplicações") && <MatCuradoria cor="titleCardbox7" materia="Microcontroladores e Aplicações"/>}
        {userData.matCurador.includes("Instrumentação Eletrônica") && <MatCuradoria cor="titleCardbox7" materia="Instrumentação Eletrônica"/>}
        {userData.matCurador.includes("Processamento Digital de Sinais") && <MatCuradoria cor="titleCardbox7" materia="Processamento Digital de Sinais"/>}

        <div className="indicador-periodo">8°Período</div>

        {userData.matCurador.includes("Computação Gráfica") && <MatCuradoria cor="titleCardbox8" materia="Computação Gráfica"/>}
        {userData.matCurador.includes("Sistemas Embarcados") && <MatCuradoria cor="titleCardbox8" materia="Sistemas Embarcados"/>}
        {userData.matCurador.includes("Sistemas Distribuídos") && <MatCuradoria cor="titleCardbox8" materia="Sistemas Distribuídos"/>}
        {userData.matCurador.includes("Automação Industrial") && <MatCuradoria cor="titleCardbox8" materia="Automação Industrial"/>}
        {userData.matCurador.includes("Robótica") && <MatCuradoria cor="titleCardbox8" materia="Robótica"/>}
        {userData.matCurador.includes("Mecânica dos Sólidos") && <MatCuradoria cor="titleCardbox8" materia="Mecânica dos Sólidos"/>}

        <div className="indicador-periodo">Eletivas</div>

        {userData.matCurador.includes("CLP") && <MatCuradoria cor="titleCardeletivas-ec" materia="CLP"/>}
        {userData.matCurador.includes("Sistemas de Evento Discretos") && <MatCuradoria cor="titleCardeletivas-ec" materia="Sistemas de Evento Discretos"/>}
        {userData.matCurador.includes("Compiladores") && <MatCuradoria cor="titleCardeletivas-ec" materia="Compiladores"/>}
        {userData.matCurador.includes("Paradigmas de Linguagem de Programação") && <MatCuradoria cor="titleCardeletivas-ec" materia="Paradigmas de Linguagem de Programação"/>}
        {userData.matCurador.includes("Gerência de Projeto") && <MatCuradoria cor="titleCardeletivas-ec" materia="Gerência de Projeto"/>}
        {userData.matCurador.includes("Laboratório de Programação") && <MatCuradoria cor="titleCardeletivas-ec" materia="Laboratório de Programação"/>}

        {userData.matCurador.includes("Fundamentos de Libras") && <MatCuradoria cor="titleCardeletivas-ec" materia="Fundamentos de Libras"/>}
        {userData.matCurador.includes("Desenvolvimento Baseado em Ontologias") && <MatCuradoria cor="titleCardeletivas-ec" materia="Desenvolvimento Baseado em Ontologias"/>}
        {userData.matCurador.includes("Tópicos Especiais em Circuitos Elétricos") && <MatCuradoria cor="titleCardeletivas-ec" materia="Tópicos Especiais em Circuitos Elétricos"/>}
        {userData.matCurador.includes("Laboratório de Estrutura de Dados") && <MatCuradoria cor="titleCardeletivas-ec" materia="Laboratório de Estrutura de Dados"/>}
        {userData.matCurador.includes("Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos I") && <MatCuradoria cor="titleCardeletivas-ec" materia="Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos I"/>}
        {userData.matCurador.includes("Laboratório de Eletrônica") && <MatCuradoria cor="titleCardeletivas-ec" materia="Laboratório de Eletrônica"/>}

        {userData.matCurador.includes("Laboratório de Circuitos Eletrônicos") && <MatCuradoria cor="titleCardeletivas-ec" materia="Laboratório de Circuitos Eletrônicos"/>}
        {userData.matCurador.includes("Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos II") && <MatCuradoria cor="titleCardeletivas-ec" materia="Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos II"/>}
        {userData.matCurador.includes("Redes de Petri") && <MatCuradoria cor="titleCardeletivas-ec" materia="Redes de Petri"/>}
        {userData.matCurador.includes("Introdução a Teoria da Informação") && <MatCuradoria cor="titleCardeletivas-ec" materia="Introdução a Teoria da Informação"/>}
        {userData.matCurador.includes("Inteligência Artificial 2") && <MatCuradoria cor="titleCardeletivas-ec" materia="Inteligência Artificial 2"/>}
        {userData.matCurador.includes("Desenvolvimento com QT/C++") && <MatCuradoria cor="titleCardeletivas-ec" materia="Desenvolvimento com QT/C++"/>}


        <br />

      </div>
      }
      <div className='linha-vertical'></div>


      
      <div className='aceite-curadores'>

        <h3> Aceite curadores</h3><br />
          {        
            banco2.map((conteudoData, index) => (conteudoData.role == 'ANALISE') && ++cont2 > 0 &&
              <CadaCurador key={index} conteudoData = {conteudoData}/>
            )
          }
          {
                  (cont2 == 0 && <span style={{marginLeft: '30px'}}>Sem curador para aprovar! </span>)
                }
      </div>

    </div>
  );
};

export default AprovarCuradoria;
