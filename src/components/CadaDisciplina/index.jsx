import Logo from "../../assets/pdslogo.svg";
import React, { useState, useEffect, useRef } from 'react';
import Verificado from "../../assets/Verificado.svg"
import "../../pages/Estilo/Disciplinas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Stack,
  Form,
  Container,
  Col,
  Row,
  Navbar,
  FormLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import FontePoppins from "../../components/FontePoppins";
import Cabecalho from "../../components/Cabecalho";
import CabecalhoLogado from "../../components/CabecalhoLogado";

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

import BlocoCadaDisciplina from "../BlocoCadaDisciplina";

import { InputArquivo } from '../../pages/SubmeterConteudo/dadosCursos';
import { createContent } from "../../services/api";

import { getContent } from "../../services/api";

function Disciplinas(props) {
  const current = new Date().toLocaleString();

  const [banco, setBanco] = useState([]);

  useEffect(() => {
    // Define an async function for fetching content
    const fetchData = async () => {
      try {
        const response = await getContent(); // Assuming getContent() retrieves content from the '/conteudos' endpoint
        setBanco(response.data); // Assuming the data is an array of content items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts.

  let listas = [
    "AB 1",
    "AB 2",
    "Reavaliação",
    "Final"
  ];

  let curadores = [
    "@GabrielNicacio",
    "@MuriloUrquiza",
    "@ViniciusMaia",
    "@ArthurSampaio"
  ];

  const alerta = () => {
    Swal.fire({
        title: 'Tentativa Inválida',
        text: 'Você precisa estar logado.',
        icon: 'info', 
        confirmButtonText: 'OK',
    });
};

const lidarComAlertaEnviar = () => {
  Swal.fire({
      title: 'Conteúdo Enviado!',
      text: 'Quando um curador aprovar ele será publicado.',
      icon: 'success', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
  });

  mostrarFormulario();
};

const mostrarFormulario = () => {
  const elemento = document.getElementById('esconderFormulario');
  if (elemento.style.display === 'block') {
    elemento.style.display = 'none'; 
  } else {
    elemento.style.display = 'block'; 
  }
};

const [errorMessage, setErrorMessage] = useState('');
const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
const referenciaInputArquivo = useRef(null);

const lidarComMudancaDeArquivo = (e) => {
  const arquivo = e.target.files[0];
  console.log("Arquivo selecionado:", arquivo);
  setArquivoSelecionado(arquivo);
};

const lidarComCliqueNoBotao = () => {
  referenciaInputArquivo.current.click();
};

const [title, setTitle] = useState(''); 
const [assunto, setAssunto] = useState(''); 
const [descricao, setDescricao] = useState(''); 

  const tituloHandler = (event) => {
    setTitle(event.target.value);
  }

  const assuntoHandler = (event) => {
    setAssunto(event.target.value);
  }

  const descricaoHandler = (event) => {
    setDescricao(event.target.value);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    const conteudoData = {
      titulo: title,
      assunto: assunto,
      pdf: arquivoSelecionado ? URL.createObjectURL(arquivoSelecionado) : '',
      descricao: descricao,
      materia: props.materia,
    };

    try {
      await createContent(conteudoData);
    }catch (error) {
      console.error(error.response.data.message);
      setErrorMessage(error.response.data.message)
    }

    setBanco(prevBanco => {
      return [conteudoData, ...prevBanco];
    });

    console.log(conteudoData);
    setTitle('');
    setAssunto('');
    setDescricao('');
    setArquivoSelecionado(null);
  }

  const isAuthenticated = sessionStorage.getItem('access_token') !== null;

  let usuarioLogado = '';

  if (!isAuthenticated) {
    usuarioLogado = <Cabecalho />;
  } else {
    usuarioLogado = <CabecalhoLogado />;
  }

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      {usuarioLogado}
      <Container className={props.cor}>
        <h1 className="tituloDisciplina">{props.materia}</h1>
      </Container>
      <Container className="body">
        <Row>
          <Col>
            <div className="descriptionArea">
              <h4>{props.publicacoes} Publicações</h4>
              <hr/>

              <h4 style={{ marginBottom:"15px" }}>Professor:</h4>
              <h6 style={{ marginLeft:"15px" }}>{props.professor}</h6>
              <hr/>

              <h4>Curadores:</h4>
              {
                curadores.map((curador) => (
                  <h6 className="curadorDisciplinas">{curador}</h6>
                ))
              }
              <hr/>

              <h4>Buscar assunto:</h4>
              {
                props.assuntos.map((assunto) => (
                  <Stack className="filterArea">
                    <Form.Check label={assunto} />
                  </Stack>
                ))
              }
              <Stack className="filterArea">
                <Form.Check label="Outros"/>
              </Stack>
              <hr/>

              <h4>Buscar listas:</h4>
              {
                listas.map((lista) => (
                  <Stack className="filterArea">
                    <Form.Check label={lista} />
                  </Stack>
                ))
              }
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Stack>
            <Stack direction="horizontal" gap={1} className="shareContent">
              <Button variant="light" onClick={mostrarFormulario}>
              <label style={{marginRight: '10px'}}>PDF</label>
                <Icon.Upload color="green" />
              </Button>
              <Button variant="light" onClick={alerta}>
                <label style={{marginRight: '10px'}}>Link</label>
                <Icon.Share color="green" />
              </Button>
            </Stack>
            <Stack direction="horizontal" id="esconderFormulario">
                <div className="titulo-dados marrom">
                  Submeter Conteúdo!
                </div><hr/>
                <form onSubmit={submitHandler}>
                  <div className="subtitulo-dados">1. Título:</div>
                  <input type="text" className='titulo-input' value={title} onChange={tituloHandler}/>
                  <div className="subtitulo-dados">2. Assunto:</div>
                  <select id="seuSelect" value={assunto} onChange={assuntoHandler}>
                    <option value="">Escolha sua opção</option>
                    <option value={props.assuntos[0]}>{props.assuntos[0]}</option>
                    <option value={props.assuntos[1]}>{props.assuntos[1]}</option>
                    <option value={props.assuntos[2]}>{props.assuntos[2]}</option>
                    <option value={props.assuntos[3]}>{props.assuntos[3]}</option>
                    <option value={props.assuntos[4]}>{props.assuntos[4]}</option>
                    <option value={props.assuntos[5]}>{props.assuntos[5]}</option>
                    <option value={props.assuntos[6]}>{props.assuntos[6]}</option>
                    <option value={props.assuntos[7]}>{props.assuntos[7]}</option>
                    <option value={props.assuntos[8]}>{props.assuntos[8]}</option>
                    <option value={props.assuntos[9]}>{props.assuntos[9]}</option>
                    <option value={props.assuntos[10]}>{props.assuntos[10]}</option>
                    <option value={props.assuntos[11]}>{props.assuntos[11]}</option>
                    <option value={props.assuntos[12]}>{props.assuntos[12]}</option>
                    <option value={props.assuntos[13]}>{props.assuntos[13]}</option>
                    <option value={props.assuntos[14]}>{props.assuntos[14]}</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <div>
                    <label htmlFor="arquivo" className='subtitulo-dados'>3. Anexe seu PDF:</label><br />
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

                  <div className="subtitulo-dados">4. Escreva uma breve descrição:</div>
                  <textarea className="text-area" value={descricao} onChange={descricaoHandler} name="comentario" rows="4" cols="25"></textarea><br />

                  <button type='submit' className="enviar" onClick={lidarComAlertaEnviar}>Enviar</button>

                </form>
            </Stack>
            {
              banco.map((conteudoData, index) => (
                <div className="contentArea" key={index}>
                  <BlocoCadaDisciplina titulo={conteudoData.titulo} pdf={conteudoData.pdf} assunto={conteudoData.assunto} descricao={conteudoData.descricao}/>
                </div>
            ))}
          <Link to='/conteudo-disciplina' className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>ViniciusMaia</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />28
                  <Icon.ArrowDown style={{ margin: "2px" }} />2
                </Col>
              </Row>
              <Stack>
                <h2>Como identificar variante de laço</h2>
                <h6>{current}</h6>
              </Stack>
              <Row style={{marginTop:"40px"}}>
                <Col>
                  <FormLabel>Verificado</FormLabel>
                  <img src={Verificado} style={{marginLeft:"8px", height:'22px'}}/>
                </Col>
                <Col style={{display: "flex", justifyContent: "end"}}>
                  <div className="backConteudoDisciplina">Complexidade</div>
                </Col>
              </Row>
            </Container>
          </Link>
        </Stack>
      </Container>
    </div>
  );
}

export default Disciplinas;
