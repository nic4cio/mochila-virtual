import React, { useState, useRef } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import "./style.css";
import BlocoCadaDisciplina from '../../components/BlocoCadaDisciplina';
import Swal from 'sweetalert2';
import { dadosCursos, corPorCursoPeriodo, OpcaoDisciplina, InputArquivo } from './dadosCursos';

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
            <div className="titulo-dados">Olá, <span className="marrom">Vinícius</span>. Preencha abaixo!</div>
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
                    <option key={assunto} value={assunto}>
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