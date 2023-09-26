import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import styled from 'styled-components';
import "./style.css";

import { dadosCursos, corPorCursoPeriodo, OpcaoDisciplina, InputArquivo } from './dadosCursos';

const SolicitarCurador = () => {
  window.scrollTo(0, 0); // Reinicia o scroll

  const lidarComAlertaEnviar = () => {
    alert("Formulário enviado!");
  };

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadasLocal, setDisciplinasSelecionadasLocal] = useState([]);
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

    const novasDisciplinasSelecionadasPorCursoPeriodo = { ...disciplinasSelecionadasPorCursoPeriodo };
    if (!novasDisciplinasSelecionadasPorCursoPeriodo[curso]) {
      novasDisciplinasSelecionadasPorCursoPeriodo[curso] = {};
    }
    novasDisciplinasSelecionadasPorCursoPeriodo[curso][periodo] = novasDisciplinasSelecionadas;
    setDisciplinasSelecionadasPorCursoPeriodo(novasDisciplinasSelecionadasPorCursoPeriodo);
  };

  return (
    <div>
      <CabecalhoLogado />
      <FontePoppins />

      <div id="conteudo-geral">
        <div id="conteudo-esquerda">
          <div className="titulo-curadoria">Solicitar ser curador</div>
          <img src={foto} alt="Foto usuário" className='foto-usuario-solicitar' />
        </div>

        <div id="conteudo-direita">
          <form action="">
            <div className="titulo-dados">Olá, <span className="marrom">Vinícius</span>. Envie os dados abaixo:</div>
            <div className="subtitulo-dados">Em qual(is) matéria(s) você deseja ser curador?</div>

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
              <label htmlFor="arquivo" className='subtitulo-dados'>Anexe seu histórico analítico:</label><br />
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

            <div className="subtitulo-dados">Escreva razões de porque você gostaria de ser curador</div>
            <textarea className="text-area" name="comentario" rows="4" cols="25"></textarea><br />

            <button className="enviar" onClick={lidarComAlertaEnviar}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolicitarCurador;