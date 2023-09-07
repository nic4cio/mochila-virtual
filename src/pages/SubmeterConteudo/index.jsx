import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import styled from 'styled-components';
import "./style.css";

import BlocoCadaDisciplina from '../../components/BlocoCadaDisciplina';
import Invariante from '../../components/Pdf/Invariante.pdf';

import Swal from 'sweetalert2';

import { dadosCursos, corPorCursoPeriodo, OpcaoDisciplina, InputArquivo } from './dadosCursos';

const bancoDados = [
];

const SubmeterConteudo = () => {
  window.scrollTo(0, 0); // Reinicia o scroll

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState([]);
  const referenciaInputArquivo = useRef(null);

  const lidarComAlertaEnviar = () => {
    Swal.fire({
        title: 'Conteúdo Enviado!',
        text: 'Quando um curador aprovar ele será publicado.',
        icon: 'success', // Ícone personalizado (warning, success, error, etc.)
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
