import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import styled from 'styled-components';
import "./style.css";

import BlocoCadaDisciplina from '../../components/BlocoCadaDisciplina';
import Invariante from '../../components/Pdf/Invariante.pdf';

import Swal from 'sweetalert2';

const bancoDados = [
];

const SubmeterConteudo = () => {
  window.scrollTo(0, 0); // Reinicia o scroll

  const lidarComAlertaEnviar = () => {
    Swal.fire({
        title: 'Conteúdo Enviado!',
        text: 'Quando um curador aprovar ele será publicado.',
        icon: 'success', // Ícone personalizado (warning, success, error, etc.)
        confirmButtonText: 'OK',
    });
};

  const InputArquivo = styled.input`
    display: none;
  `;

  const OpcaoDisciplina = styled.option`
    background-color: #343434;
    width: 60px;
    height: 40px;
    padding-top: 8px;
    margin-right: 5px;
    font-weight: bold;
    border-radius: 13px;
    text-align: center;
    float: left;

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '1º Período' &&
      `
        background-color: #FF7474;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '2º Período' &&
      `
        background-color: #8979FD;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '3º Período' &&
      `
        background-color: #F27FEF;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '4º Período' &&
      `
        background-color: #87E4FE;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '5º Período' &&
      `
        background-color: #FCD878;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '6º Período' &&
      `
        background-color: #90FCDF;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === '7º Período' &&
      `
        background-color: #E9FD7A;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === 'Computação Visual' &&
      `
        background-color: #7394FD;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === 'Sistemas Inteligentes' &&
      `
        background-color: #F8B076;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === 'Sistemas de Computação' &&
      `
        background-color: #F27ED6;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.periodo === 'Sistemas de Informação' &&
      `
        background-color: #F24430;
        color: white;
      `}

    ${(props) =>
      props.curso === 'CC' &&
      props.selecionado &&
      `
        background-color: #FFF;
        color: black;
      `}
  `;

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState([]);
  const referenciaInputArquivo = useRef(null);

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
  };

  const dadosCursos = {
    "Curso": {
      periodos: ["Período"],
      disciplinas: [],
    },
    "CC": {
      periodos: ["Período", "1º Período", "2º Período", "3º Período", "4º Período", "5º Período", "6º Período", "7º Período", "Computação Visual", "Sistemas Inteligentes", "Sistemas de Computação", "Sistemas de Informação"],
      disciplinas: {
        "1º Período": [
          "P1",
          "LÓG",
          "CSÉ",
          "MD",
          "CDI"
        ],
        "2º Período": [
          "ED",
          "BD",
          "OAC",
          "GA"
        ],
        "3º Período": [
          "REDC",
          "TG",
          "PROB",
          "ÁLG"
        ],
        "4º Período": [
          "P2",
          "P3",
          "PAA",
          "TCOMP"
        ],
        "5º Período": [
          "SO",
          "COMPI",
          "IA",
          "CG"
        ],
        "6º Período": ["PDS"],
        "7º Período": [
          "MET",
          "ND"
        ],
        "Computação Visual": [
          "C3",
          "AM",
          "REAP",
          "PDI",
          "VISC"
        ],
        "Sistemas Inteligentes": [
          "C3",
          "AMÁQ",
          "RNAP",
          "CEVO",
          "CD"
        ],
        "Sistemas de Computação": [
          "C3",
          "SDG",
          "FPGA",
          "SE",
          "MICR"
        ],
        "Sistemas de Informação": [
          "CLP",
          "SDI",
          "IHM",
          "Gp",
          "SEG"
        ]
      },
    },
  };

  const lidarComCliqueNaDisciplina = (curso, periodo, disciplina) => {
    const indiceDisciplina = disciplinasSelecionadas.findIndex(
      (item) => item.curso === curso && item.periodo === periodo && item.disciplina === disciplina
    );
    if (indiceDisciplina === -1) {
      setDisciplinasSelecionadas([
        ...disciplinasSelecionadas,
        { curso, periodo, disciplina }
      ]);
    } else {
      setDisciplinasSelecionadas([
        ...disciplinasSelecionadas.slice(0, indiceDisciplina),
        ...disciplinasSelecionadas.slice(indiceDisciplina + 1)
      ]);
    }
  };

  const [title, setTitle] = useState(''); 
  const [banco, setBanco] = useState(bancoDados);

  const tituloHandler = (event) => {
    setTitle(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const conteudoData = {
      titulo: title,
      pdf: arquivoSelecionado,
    };

    setBanco(prevBanco => {
      return [conteudoData, ...prevBanco];
    });

    console.log(conteudoData);
    setTitle('');
    setArquivoSelecionado(null);
  }

  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <div id="conteudo-geral-submeter">
        <div id="conteudo-esquerda">
          <div className="titulo-submeter">Submeter Conteúdo</div>
          <p className="paragrofo-explicando"><span className='azul'>Esolha a matéria e o conteúdo, anexe seu PDF, coloque um título </span>
          e, por fim, envie contéudos para serem aprovados por nosso grupo de curadores.
            </p>

            <br />

            <p className="paragrofo-explicando">Para serem publicados, esses conteúdos precisam ser aprovados:
            <span className='marrom'> qualitativamente, eficientemente e eticamente. </span> Além de que, após postados, continuarão a ser avaliados pelos usuários por meio de curtidas e comentários.
            </p>

            <br />

            <p className="paragrofo-explicando">Lembre-se que você também pode ser curador e ajudar a avaliar os conteúdos, clique em Seja um Curador e veja os pré-requisitos.
            </p>
        </div>

        <span className='test'>&gt;</span>  {/*&gt; == ">"*/}

        <div id="conteudo-direita-sub">
          <form onSubmit={submitHandler}>
            <div className="titulo-dados">Olá, <span className="marrom">Vinícius</span>. Preencha abaixo!</div><hr style={{color:"#FFF"}}/>
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

            <div>
              <label htmlFor="arquivo" className='subtitulo-dados'>2. Anexe seu conteúdo:</label><br />
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

            <div className="subtitulo-dados">3. Título:</div>
            <input type="text" className='titulo-input' value={title} onChange={tituloHandler}/>

            <div className="subtitulo-dados">4. Escreva uma breve descrição:</div>
            <textarea className="text-area" name="comentario" rows="4" cols="25"></textarea><br />

            <button type='submit' className="enviar" onClick={lidarComAlertaEnviar}>Enviar</button>
          </form>
        </div>
      </div>
      {
        banco.map((titulo) => (
          <BlocoCadaDisciplina titulo={titulo.titulo} pdf={titulo.pdf}/>
      ))}
    </div>
  );
};

export default SubmeterConteudo;
