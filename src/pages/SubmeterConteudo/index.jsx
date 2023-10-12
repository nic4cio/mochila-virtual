import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import "./style.css";
import BlocoCadaDisciplina from '../../components/BlocoCadaDisciplina';
import Swal from 'sweetalert2';
import { dadosCursos, corPorCursoPeriodo, OpcaoDisciplina, InputArquivo } from './dadosCursos';
import { createContent } from '../../services/api';

const bancoDados = [];

const SubmeterConteudo = () => {
  // window.scrollTo(0, 0); quebrando

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState();
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState(null);
  const [assuntosSelecionados, setAssuntosSelecionados] = useState([]); 
  const referenciaInputArquivo = useRef(null);

  const lidarComAlertaEnviar = () => {
    Swal.fire({
        title: 'Conteúdo Enviado!',
        text: 'Quando um curador aprovar ele será publicado.',
        icon: 'success',
        confirmButtonText: 'OK',
    });
  };

  const lidarComMudancaDeArquivo = (e) => {
    const arquivo = e.target.files[0];
    console.log("Arquivo selecionado:", arquivo);
    setArquivoSelecionado(arquivo);
  };

  const lidarComCliqueNoBotao = () => {
    referenciaInputArquivo.current.click();
  };

  const lidarComMudancaDeCurso = (e) => {
    const cursoSelecionado = e.target.value;
    setCursoSelecionado(cursoSelecionado);
    setPeriodoSelecionado("Período");
  };

  const lidarComMudancaDePeriodo = (e) => {
    setPeriodoSelecionado(e.target.value);
    setDisciplinasSelecionadas([]);
    setDisciplinaSelecionada(null); 
  };

  const selecionarDisciplina = (curso, periodo, disciplina) => {
    setDisciplinasSelecionadas([{ curso, periodo, disciplina }]);
    setDisciplinaSelecionada(disciplina); 
    setAssuntosSelecionados([]); 
  };
  
  const lidarComCliqueNaDisciplina = (curso, periodo, disciplina) => {
    const disciplinaSelecionada = disciplinasSelecionadas.find(
      (item) => item.curso === curso && item.periodo === periodo
    );
  
    if (!disciplinaSelecionada || disciplinaSelecionada.disciplina !== disciplina) {
      selecionarDisciplina(curso, periodo, disciplina);
    } else {

      setDisciplinasSelecionadas([]);
      setDisciplinaSelecionada(null); 
      setAssuntosSelecionados([]); 
    }
  };

  const [title, setTitle] = useState(''); 
  const [descricao, setDescricao] = useState(''); 
  const [banco, setBanco] = useState(bancoDados);

  const tituloHandler = (event) => {
    setTitle(event.target.value);
  }

  const descricaoHandler = (event) => {
    setDescricao(event.target.value);
  }

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();

    const materia = materiaCerta();

    const conteudoData = {
      titulo: title,
      assunto: 'teste', 
      pdf: arquivoSelecionado ? URL.createObjectURL(arquivoSelecionado) : '',
      descricao: descricao,
      materia: materia,
      status: 'AGUARDANDO_APROVACAO',
    };

    const token = sessionStorage.getItem('access_token');

    try {
      await createContent(conteudoData, token);
    }catch (error) {
      console.error(error.response.data.message);
      setErrorMessage(error.response.data.message)
    }

    setBanco(prevBanco => {
      return [conteudoData, ...prevBanco];
    });

    console.log(conteudoData);
    setTitle('');
    setArquivoSelecionado(null);
    setDescricao('');
  }

  const materiaCerta = () => {
    switch(disciplinaSelecionada) {
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

  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <div id="conteudo-geral-submeter">
        <div id="conteudo-esquerda">
          <div className="titulo-submeter">Submeter Conteúdo</div>
          <p className="paragrofo-explicando">
            <span className='azul'>Escolha a matéria e o conteúdo, anexe seu PDF, coloque um título </span>
            e, por fim, envie conteúdos para serem aprovados por nosso grupo de curadores.
          </p>

          <br />

          <p className="paragrofo-explicando">
            Para serem publicados, esses conteúdos precisam ser aprovados:
            <span className='marrom'> qualitativamente, eficientemente e eticamente. </span>
            Além de que, após postados, continuarão a ser avaliados pelos usuários por meio de curtidas e comentários.
          </p>

          <br />

          <p className="paragrofo-explicando">
            Lembre-se que você também pode ser curador e ajudar a avaliar os conteúdos, clique em Seja um Curador e veja os pré-requisitos.
          </p>
        </div>

        <span className='test'>&gt;</span>

        <div id="conteudo-direita-sub">
          <form onSubmit={submitHandler}>
            <div className="titulo-dados">Preencha abaixo!</div>
            <hr style={{color:"#FFF"}}/>
            <div className="subtitulo-dados">1. Em qual matéria você deseja enviar o conteúdo?</div>

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
                <div className="subject-contain">
                  {dadosCursos[cursoSelecionado].disciplinas[periodoSelecionado].map((disciplina) => (
                    <OpcaoDisciplina
                      key={disciplina}
                      value={disciplina}
                      curso={cursoSelecionado}
                      periodo={periodoSelecionado}
                      selecionado={disciplinasSelecionadas.some((item) => item.curso === cursoSelecionado && item.periodo === periodoSelecionado && item.disciplina === disciplina)}
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

            {disciplinaSelecionada && (
              <div>
                <br />

                <select className="aaa">
                  {dadosCursos[cursoSelecionado].assuntos[disciplinaSelecionada].map((assunto) => (
                    <option 
                      key={assunto} 
                      value={assunto}
                    >
                      {assunto}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="arquivo" className='subtitulo-dados'>3. Anexe seu conteúdo:</label><br />
              <button type="button" className="custom-button" onClick={lidarComCliqueNoBotao}>
                Selecionar arquivo
              </button>
              <InputArquivo
                type="file"
                id="arquivo"
                name="arquivo"
                accept=".pdf"
                onChange={lidarComMudancaDeArquivo}
                ref={referenciaInputArquivo}
              />
              {arquivoSelecionado && <div className='arquivo-selecionado'><span className='branco'>Arquivo selecionado:</span> {arquivoSelecionado.name}</div>}
            </div>

            <div className="subtitulo-dados">4. Título:</div>
            <input type="text" className='titulo-input' value={title} onChange={tituloHandler}/>

            <div className="subtitulo-dados">5. Escreva uma breve descrição:</div>
            <textarea className="text-area" name="comentario" rows="4" cols="25" value={descricao} onChange={descricaoHandler}></textarea><br />

            <button type='submit' className="enviar" onClick={lidarComAlertaEnviar}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmeterConteudo;