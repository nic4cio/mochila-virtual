import React, { useState, useRef, useEffect } from 'react';
import FontePoppins from '../../components/FontePoppins';
import CabecalhoLogado from "../../components/CabecalhoLogado";
import foto from "../../assets/homem-generico.png";
import styled from 'styled-components';
import "./style.css";

import Cabecalho from "../../components/Cabecalho";

import { dadosCursos, corPorCursoPeriodo, OpcaoDisciplina, InputArquivo } from './dadosCursos';

import { curadoriaUser } from '../../services/api';

import Swal from 'sweetalert2';

import axios from 'axios';

const SolicitarCurador = () => {
  const accessToken = sessionStorage.getItem('access_token');
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
  }, []);
  window.scrollTo(0, 0); // Reinicia o scroll

  const lidarComAlertaEnviar = async () => {
    event.preventDefault();

    const token = sessionStorage.getItem('access_token');

    try {
      await curadoriaUser(userData.id, arquivoSelecionado ? URL.createObjectURL(arquivoSelecionado) : '', descricao, token);
    }catch (error) {
      console.error(error.response.data.message);
    }

    Swal.fire({
      title: 'Enviado para análise!',
      icon: 'success', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
    });
  };

  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");
  const [periodoSelecionado, setPeriodoSelecionado] = useState("Período");
  const [disciplinasSelecionadasLocal, setDisciplinasSelecionadasLocal] = useState([]);
  const referenciaInputArquivo = useRef(null);

  const [descricao, setDescricao] = useState("");

  const handleDescricao = (event) => {
    setDescricao(event.target.value);
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
      <CabecalhoLogado home="" curador="menuaSpanRegistros" disciplinas="" suaMochila=""/>
      <FontePoppins />

      <div id="conteudo-geral">
        <div id="conteudo-esquerda">
          <div className="titulo-curadoria">Solicitar ser curador</div>
          <img src={foto} alt="Foto usuário" className='foto-usuario-solicitar' />
          <div className="subtitulo-dados" style={{maxWidth:'430px', textAlign:"Center"}}>Você será curador em todas as matérias possíveis diante seu histórico!</div>
        </div>

        <div id="conteudo-direita">
          <form onSubmit={lidarComAlertaEnviar}>
            <div className="titulo-dados">Olá. Envie os dados abaixo:</div>

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
            <textarea className="text-area" name="comentario" rows="4" cols="25" value={descricao} onChange={handleDescricao}></textarea><br />

            <button type='submit' className="enviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolicitarCurador;