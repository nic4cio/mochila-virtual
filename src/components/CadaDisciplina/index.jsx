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

import { getContent, getUser } from "../../services/api";

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
    "Final",
  ];

  const alerta = () => {
    Swal.fire({
        title: 'Tentativa Inválida',
        text: 'Você precisa estar logado.',
        icon: 'info', 
        confirmButtonText: 'OK',
    });
};

const lidarComAlertaEnviar = (erro) => {
  if(erro == 1){
    Swal.fire({
      title: 'Falha!',
      icon: 'error', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
  });
  } else{
    Swal.fire({
      title: 'Conteúdo Enviado!',
      text: 'Quando um curador aprovar ele será publicado.',
      icon: 'success', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
    });

    mostrarFormulario();
  }
  
};

const lidarComAlertaEnviar2 = (erro) => {
  if(erro == 1){
    Swal.fire({
      title: 'Falha!',
      icon: 'error', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
  });
  } else{
    Swal.fire({
      title: 'Conteúdo Enviado!',
      text: 'Quando um curador aprovar ele será publicado.',
      icon: 'success', // Ícone personalizado (warning, success, error, etc.)
      confirmButtonText: 'OK',
    });

    mostrarFormulario2();
  }
};

const mostrarFormulario = () => {
  if (!isAuthenticated) {
    alerta();
  } else {
    document.getElementById('esconderFormulario2').style.display = 'none';
    const elemento = document.getElementById('esconderFormulario');
    if (elemento.style.display === 'block') {
      elemento.style.display = 'none'; 
    } else {
      elemento.style.display = 'block'; 
    }
  }
};

const mostrarFormulario2 = () => {
  if (!isAuthenticated) {
    alerta();
  } else {
    document.getElementById('esconderFormulario').style.display = 'none';
    const elemento = document.getElementById('esconderFormulario2');
    if (elemento.style.display === 'block') {
      elemento.style.display = 'none'; 
    } else {
      elemento.style.display = 'block'; 
    }
  }
};

const [arquivoSelecionado2, setArquivoSelecionado2] = useState('');

const linkHandler = (event) => {
  setArquivoSelecionado2(event.target.value);
}

const [title2, setTitle2] = useState(''); 
const [assunto2, setAssunto2] = useState(''); 
const [descricao2, setDescricao2] = useState(''); 

  const tituloHandler2 = (event) => {
    setTitle2(event.target.value);
  }

  const assuntoHandler2 = (event) => {
    setAssunto2(event.target.value);
  }

  const descricaoHandler2 = (event) => {
    setDescricao2(event.target.value);
  }

  const submitHandler2 = async (event) => {
    event.preventDefault();

    const conteudoData = {
      titulo: title2,
      assunto: assunto2,
      pdf: arquivoSelecionado2,
      descricao: descricao2,
      materia: props.materia,
      status: 'AGUARDANDO_APROVACAO',
    };

    console.log(conteudoData.pdf);

    const token = sessionStorage.getItem('access_token');

    try {
      await createContent(conteudoData, token);
      setErrorMessage('');
      lidarComAlertaEnviar2(0);
    }catch (error) {
      console.error(error.response.data.message);
      setErrorMessage(error.response.data.message);
      lidarComAlertaEnviar2(1);
    }

    setBanco(prevBanco => {
      return [conteudoData, ...prevBanco];
    });

    setTitle2('');
    setAssunto2('');
    setDescricao2('');
    setArquivoSelecionado2('');

  }

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

    console.log(conteudoData.pdf);

    const token = sessionStorage.getItem('access_token');

    try {
      await createContent(conteudoData, token);
      setErrorMessage('');

      lidarComAlertaEnviar(0);
    }catch (error) {
      console.error(error.response.data.message);
      setErrorMessage(error.response.data.message)

      lidarComAlertaEnviar(1);
    }

    setBanco(prevBanco => {
      return [conteudoData, ...prevBanco];
    });

    setTitle('');
    setAssunto('');
    setDescricao('');
    setArquivoSelecionado('');
    
  }

  const isAuthenticated = sessionStorage.getItem('access_token') !== null;

  let usuarioLogado = '';

  if (!isAuthenticated) {
    usuarioLogado = <Cabecalho />;
  } else {
    usuarioLogado = <CabecalhoLogado />;
  }

  let cont = 0;

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

  const [valoresSelecionados, setValoresSelecionados] = useState([]);

  const handleSelecionarAssunto = (event) => {
    const valorSelecionado = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Adicionar valor selecionado ao array
      setValoresSelecionados([...valoresSelecionados, valorSelecionado]);
    } else {
      // Remover valor selecionado do array
      const novosValoresSelecionados = valoresSelecionados.filter((item) => item !== valorSelecionado);
      setValoresSelecionados(novosValoresSelecionados);
    }
  };

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
            {
              banco.map((conteudoData, index) => (
                (((props.materia == conteudoData.materia && conteudoData.status === 'APROVADO') && (valoresSelecionados == '' || valoresSelecionados.includes(conteudoData.assunto)) && ++cont > 0)
                )
            ))}
              <h4>{cont} Publicações</h4>
              <hr/>

              <h4 style={{ marginBottom:"15px" }}>Professor:</h4>
              <h6 style={{ marginLeft:"15px" }}>{props.professor}</h6>
              <hr/>

              <h4>Curadores:</h4>
              {        
                banco2.map((conteudoData, index) => (conteudoData.role == 'CURADOR') && (conteudoData.matCurador.includes(props.materia)) && ++cont2 > 0 &&
                  <h6 key={index} className="curadorDisciplinas">@{conteudoData.firstName}</h6>
                )
              }
              {
                  (cont2 == 0 && <span style={{marginLeft: '30px'}}>Sem curador.</span>)
                }
              <hr/>

              <h4>Buscar assunto:</h4>
              {props.assuntos.map((assunto, index) => (
                <Stack key={index} className="filterArea">
                <Form.Check label={assunto} value={assunto} checked={valoresSelecionados.includes(assunto)} onChange={handleSelecionarAssunto}/>
              </Stack>
              ))}
              <Stack className="filterArea">
                <Form.Check label="Outros" value="Outros" checked={valoresSelecionados.includes("Outros")} onChange={handleSelecionarAssunto}/>
              </Stack>
              <hr/>

              <h4>Buscar listas:</h4>
              <div>
                {listas.map((assunto, index) => (
                  <Stack key={index} className="filterArea">
                  <Form.Check label={assunto} value={assunto} checked={valoresSelecionados.includes(assunto)} onChange={handleSelecionarAssunto}/>
                </Stack>
                ))}
              </div>
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
              <Button variant="light" onClick={mostrarFormulario2}>
                <label style={{marginRight: '10px'}}>Link</label>
                <Icon.Share color="green" />
              </Button>
            </Stack>
            {errorMessage && <p className="alert alert-danger error-message" >{"Preencha todos os campos!"}</p>}
            <Stack direction="horizontal" id="esconderFormulario">
                <div className="titulo-dados marrom">
                  Submeter PDF!
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
                    <option value="AB1">AB1</option>
                    <option value="AB2">AB2</option>
                    <option value="Reavaliação">Reavaliação</option>
                    <option value="Final">Final</option>
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

                  <button type='submit' className="enviar">Enviar</button>

                </form>
            </Stack>
            <Stack direction="horizontal" id="esconderFormulario2">
                <div className="titulo-dados marrom">
                  Submeter Link!
                </div><hr/>
                <form onSubmit={submitHandler2}>
                  <div className="subtitulo-dados">1. Título:</div>
                  <input type="text" className='titulo-input' value={title2} onChange={tituloHandler2}/>
                  <div className="subtitulo-dados">2. Assunto:</div>
                  <select id="seuSelect" value={assunto2} onChange={assuntoHandler2}>
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
                    <option value="AB1">AB1</option>
                    <option value="AB2">AB2</option>
                    <option value="Reavaliação">Reavaliação</option>
                    <option value="Final">Final</option>
                  </select>
                  <div>
                    <label htmlFor="arquivo" className='subtitulo-dados'>3. Cole seu Link:</label><br />
                    <input type="text" className='titulo-input' value={arquivoSelecionado2} onChange={linkHandler}/>
                  </div>

                  <div className="subtitulo-dados">4. Escreva uma breve descrição:</div>
                  <textarea className="text-area" value={descricao2} onChange={descricaoHandler2} name="comentario" rows="4" cols="25"></textarea><br />

                  <button type='submit' className="enviar">Enviar</button>

                </form>
            </Stack>
            {
              banco.map((conteudoData, index) => (
                (((props.materia == conteudoData.materia && conteudoData.status === 'APROVADO' && (valoresSelecionados == '' || valoresSelecionados.includes(conteudoData.assunto)))) &&
                <div className="contentArea" key={index}>
                  <BlocoCadaDisciplina userId={conteudoData.userId} id={conteudoData.id} titulo={conteudoData.titulo} pdf={conteudoData.pdf} assunto={conteudoData.assunto} descricao={conteudoData.descricao} createdAt={conteudoData.createdAt}/>
                </div>)
            ))}
            {
              cont == 0 && <span style={{margin: '20px auto', fontSize:'20px'}}>Sem conteúdos no momento! </span>
            }
        </Stack>
      </Container>
    </div>
  );
}

export default Disciplinas;
