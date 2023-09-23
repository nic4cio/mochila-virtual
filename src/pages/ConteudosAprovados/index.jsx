import { useState, useEffect } from 'react';
import Verificado from "../../assets/Verificado.svg"
import "../../pages/Estilo/Disciplinas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stack,
  Container,
  Col,
  Row,
  FormLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import FontePoppins from "../../components/FontePoppins";
import Cabecalho from "../../components/Cabecalho";
import CabecalhoLogado from "../../components/CabecalhoLogado";

import { Link } from 'react-router-dom';


import BlocoCadaDisciplina from "../../components/BlocoCadaDisciplina";

import { getContent } from "../../services/api";

function Disciplinas() {
  const current = new Date().toLocaleString();

  const [banco, setBanco] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getContent(); 
        setBanco(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

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
      <Container className="body">
        <Stack>
          <h1 style={{margin: '0px auto', padding: '30px'}}>Conteúdos Aprovados</h1>
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
