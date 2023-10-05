import { useState } from 'react';

import foto from "../../assets/homem-generico.png";

import {dadosCursos, OpcaoDisciplina,} from "../../pages/SolicitarCurador/dadosCursos";

import { serCuradorUser } from '../../services/api';

import Swal from 'sweetalert2';

function CadaCurador(props) {
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    const openSecondModal = () => {
        setSecondModalOpen(true);
    };

    const closeSecondModal = async () => {
        setSecondModalOpen(false);
        let disciplinas = [];
        disciplinasSelecionadasLocal.forEach((element) => {
          disciplinas = [...disciplinas, materiaCerta(element.disciplina)];
        });

        const token = sessionStorage.getItem('access_token');

        console.log(disciplinas);

        try {
          await serCuradorUser(props.conteudoData.id, disciplinas, token);
        }catch (error) {
            console.error(error.response.data.message);
        }

        Swal.fire({
          title: 'Curador Aceito!',
          icon: 'sucess',
          confirmButtonText: 'OK',
      }).then((result) => {
          if (result.isConfirmed) {
          location.reload();
          }
      });
    
    };

    const materiaCerta = (mat) => {
      switch(mat) {
        case 'P1':
           return 'Programação 1';
        case 'LÓG':
          return'Lógica para Computação';
        case 'CSÉ':
          return 'Computação, Sociedade e Ética';
        case 'MD':
          return 'Matemática Discreta';
        case 'CDI':
          return 'Cálculo Diferencial e Integral';
        case 'INGL':
          return 'Inglês Instrumental';
        case 'IENG':
          return 'Introdução à Engenharia da Computação';
  
        case 'FÍSI':
          return 'Física 1';
        case 'CÁL2':
          return 'Cálculo 2';
        case 'CIDI':
          return 'Circuitos Digitais';
        case 'DESE':
          return 'Desenho';
        case 'ED':
          return 'Estrutura de Dados';
        case 'BD':
          return 'Banco de Dados';
        case 'OAC':
          return 'Organização e Arquitetura de computadores';
        case 'GA':
          return 'Geometria Analítica';
  
        
        case 'LFAU':
          return 'Linguagens Formais, Autômatos e Computibilidade';
        case 'PSOF':
          return 'Programação 2';
        case 'REDC':
          return 'Redes de Computadores';
        case 'TG':
          return 'Teoria dos Grafos';
        case 'PROB':
          return 'Probabilidade e Estatística';
        case 'ÁLG':
          return 'Álgebra Linear';
        case 'FÍS2':
          return 'Física 2';
        case 'QUTE':
          return 'Química Tecnológica';
  
        case 'P2':
          return 'Programação 2';
        case 'P3':
          return 'Programação 3';
        case 'PAA':
          return 'PAA';
        case 'TCOMP':
          return 'Teoria da Computação';
        case 'ENGS':
          return 'Engenharia de Software';
        case 'CÁL4':
          return 'Cálculo 4';
        case 'VACO':
          return 'Variáveis Complexas';
        case 'FÍEX':
          return 'Física 3';
  
        case 'SO':
          return 'Sistemas Operacionais';
        case 'COMPI':
          return 'Compiladores';
        case 'IA':
          return 'Inteligência Artificial';
        case 'CG':
          return 'Computação Gráfica';
        case 'CIEL':
          return 'Circuitos Elétricos';
        case 'SISE':
          return 'Sinais e Sistemas';
  
        case 'PDS':
          return 'Projeto e Desenvolvimento de Sistemas';
        case 'PRCO':
          return 'Princípios de Comunicação';
        case 'ELET':
          return 'Eletrônica';
        case 'METN':
          return 'Métodos Numéricos';
        case 'SICO':
          return 'Sistemas de Controle 1';
        case 'EMPE':
          return 'Empreendedorismo';
        case 'FETR':
          return 'Fenômenos de Transporte';
  
        case 'MET':
          return 'Metodologia de Pesquisa';
        case 'ND':
          return 'Noções de Direito';
        case 'SICO2':
          return 'Sistemas de Controle 2';
        case 'INEL':
          return 'Instrumentação Eletrônica';
        case 'PDIS':
          return 'Processamento Digital de Sinais';
  
        case 'AUIN':
          return 'Automação Industrial';
        case 'ROBÓ':
          return 'Robótica';
        case 'MÉSO':
          return 'Mecânica dos Sólidos';
  
        case 'SEVE':
          return 'Sistemas de Evento Discretos';
        case 'PRLP':
          return 'Paradigmas de Linguagem de Programação';
        case 'LAPR':
          return 'Laboratório de Programação';
        case 'FLIB':
          return 'Fundamentos de Libras';
        case 'DBON':
          return 'Desenvolvimento Baseado em Ontologias';
        case 'TECÉ':
          return 'Tópicos Especiais em Circuitos Elétricos';
        case 'LAED':
          return 'Laboratório de Estrutura de Dados';
        case 'LAEL':
          return 'Laboratório de Eletrônica';
        case 'LACE':
          return 'Laboratório de Circuitos Eletrônicos';
        case 'REPE':
          return 'Redes de Petri';
        case 'TSD1':
          return 'Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos I';
        case 'TSD2':
          return 'Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos II';
        case 'ITIN':
          return 'Introdução a Teoria da Informação';
        case 'IA2':
          return 'Inteligência Artificial 2';
        case 'DCQC':
          return 'Desenvolvimento com QT/C++';
  
        case 'C3':
          return 'Cálculo 3';
        case 'AM':
          return 'Aprendizagem de Máquina';
        case 'RNAP':
          return 'Redes Neurais e Aprendizado Profundo';
        case 'PDI':
          return 'Processamento de Imagem';
        case 'VISC':
          return 'Visão Computacional';
  
        case 'CEVO':
          return 'Computação Evolucionária';
        case 'CD':
          return 'Ciência de Dados';
  
        case 'SDG':
          return 'Sistemas Digitais';
        case 'FPGA':
          return 'Fgpa';
        case 'SE':
          return 'Sistemas Embarcados';
        case 'MICR':
          return 'Microcontroladores e Aplicações';
  
        case 'CLP':
          return 'CLP';
        case 'SDI':
          return 'Sistemas Distribuídos';
        case 'IHM':
          return 'Interação homem-máquina';
        case 'GP':
          return 'Gerência de Projeto';
        case 'SEG':
          return 'Segurança de Sistemas Computacionais';
      }
    }

  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadasLocal, setDisciplinasSelecionadasLocal] = useState([]);

  const lidarComMudancaDeCurso = (e) => {
    const cursoSelecionado = e.target.value;
    setCursoSelecionado(cursoSelecionado);
    setPeriodoSelecionado("Período");
  };

  const lidarComMudancaDePeriodo = (e) => {
    const novoPeriodoSelecionado = e.target.value;
    setPeriodoSelecionado(novoPeriodoSelecionado);

    if (cursoSelecionado !== "Curso") {
      if (disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado] && disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado][novoPeriodoSelecionado]) {
        setDisciplinasSelecionadasLocal(disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado][novoPeriodoSelecionado]);
      } else {
        const periodoAnterior = disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado] && Object.keys(disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado]).find(periodo => periodo !== "Período");
        if (periodoAnterior) {
          setDisciplinasSelecionadasLocal(disciplinasSelecionadasPorCursoPeriodo[cursoSelecionado][periodoAnterior]);
        } else {
          setDisciplinasSelecionadasLocal([]);
        }
      }
    }
  };

  const lidarComCliqueNaDisciplina = (curso, periodo, disciplina) => {
    const novasDisciplinasSelecionadas = [...disciplinasSelecionadasLocal];

    const indiceDisciplina = novasDisciplinasSelecionadas.findIndex((item) =>
      item.curso === curso && item.periodo === periodo && item.disciplina === disciplina
    );

    if (indiceDisciplina === -1) {
      novasDisciplinasSelecionadas.push({ curso, periodo, disciplina });
    } else {
      novasDisciplinasSelecionadas.splice(indiceDisciplina, 1);
    }

    setDisciplinasSelecionadasLocal(novasDisciplinasSelecionadas);
  };

    return (
    <div>
        <button onClick={openSecondModal} className="box-curadoria">
                <div className='titulo-box-curadoria'>{props.conteudoData.firstName.substring(0, 10)}</div>
                
                <button className='btn-analisar'>Análise</button>
                <img src={foto} alt="Foto usuário" className='foto-usuario-box-curador'/>
        </button>
        {isSecondModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                <div className="top" >Aceitar curador?</div>
                <div style={{textAlign:'center', marginTop:'15px'}}>
                    <iframe src="https://www.ic.unicamp.br/~ripolito/peds/mc102z/aula2/Aula2-ProfRezende.pdf" height={ 600 } className="pdfConteudo"></iframe>
                    <hr />
                </div>

                <h2 style={{marginLeft:'10px', color:'black'}}>Matérias:</h2>

                <span style={{maxWidth:'700px'}}>
                  {disciplinasSelecionadasLocal && disciplinasSelecionadasLocal.map((cada, index) => (
                    <span key={index} style={{margin:'5px 0px 0px 5px', color:'black'}}>{cada.disciplina}, </span>
                  )) }
                </span>

                <div className="subtitulo-dados" style={{marginLeft:'15px', color:'black'}}>1. Em qual(is) matéria(s) você aprova o curador?</div>

                <select value={cursoSelecionado} onChange={lidarComMudancaDeCurso}>
                {Object.keys(dadosCursos).map((curso) => (
                    <option key={curso} value={curso}>
                    {curso}
                    </option>
                ))}
                </select>
                <select value={periodoSelecionado} onChange={lidarComMudancaDePeriodo}>
                {dadosCursos[cursoSelecionado].periodos.map((periodo) => (
                    <option key={periodo} value={periodo}>
                    {periodo}
                    </option>
                ))}
                </select>

                {periodoSelecionado !== "Período" && (
                <div>
                    <br />
                    <div className="subject-container">
                    {dadosCursos[cursoSelecionado].disciplinas[periodoSelecionado].map((disciplina) => (
                        <OpcaoDisciplina
                        key={disciplina}
                        value={disciplina}
                        curso={cursoSelecionado}
                        periodo={periodoSelecionado}
                        selecionado={disciplinasSelecionadasLocal.some((item) =>
                            item.curso === cursoSelecionado && item.periodo === periodoSelecionado && item.disciplina === disciplina
                        )}
                        onClick={() => lidarComCliqueNaDisciplina(cursoSelecionado, periodoSelecionado, disciplina)}
                        >
                        {disciplina}
                        </OpcaoDisciplina>
                    ))}
                    </div>
                    <br />
                    <br />
                </div>
                )}
    
                <div>
                    <button onClick={closeSecondModal} className="btn-aceitar-modal">Enviar</button>
                </div>
                </div>
            </div>
            )}
    </div>
    );
}

export default CadaCurador;