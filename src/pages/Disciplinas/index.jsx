import Logo from "../../assets/pdslogo.svg";
import Verificado from "../../assets/Verificado.svg"
import "../Estilo/Disciplinas.css";
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

import { Link } from 'react-router-dom';

function Disciplinas() {
  const materiais = "23";
  const current = new Date().toLocaleString();

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      <Cabecalho home="" materias="" curador="" entrar="" registrar=""/>
      <Container className="titleCard">
        <h1 style={{ color: "black", padding: "180px 8px 8px 8px", fontWeight:'600'}}>
          Projeto e Análise de Algoritmos
        </h1>
      </Container>
      <Container className="body">
        <Row>
          <Col>
            <div className="descriptionArea">
              <h4 style={{ color: "#FFFFFF" }}>{materiais} Publicações</h4>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF", marginBottom:"15px" }}>Professor:</h4>
              <h6 style={{ color: "#FFFFFF", marginLeft:"15px" }}>Ryan Pinheiro</h6>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF" }}>Curadores:</h4>
              <h6 style={{ color: "#FF8283", marginLeft:"15px" }}>@GabrielNicacio</h6>
              <h6 style={{ color: "#FF8283", marginLeft:"15px" }}>@MuriloUrquiza</h6>
              <h6 style={{ color: "#FF8283", marginLeft:"15px" }}>@ViniciusMaia</h6>
              <h6 style={{ color: "#FF8283", marginLeft:"15px" }}>@ArthurSampaio</h6>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF" }}>Buscar assunto:</h4>
              <Stack className="filterArea">
                <Form.Check label="Corretude" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Complexidade" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Algoritmo Guloso" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Np-completude" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Listas" style={{ color: "white" }} />
              </Stack>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF" }}>Buscar listas:</h4>
              <Stack className="filterArea">
                <Form.Check label="AB 1" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="AB 2" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Reavaliação" style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Final" style={{ color: "white" }} />
              </Stack>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Stack>
          <Container>
            <Stack direction="horizontal" gap={1} className="shareContent">
              <Button variant="light" >
                <Icon.Dropbox color="green" />
              </Button>
              <Button variant="light">
                <Icon.Youtube color="green" />
              </Button>
              <Button variant="light">
                <Icon.Upload color="green" />
              </Button>
              <Button variant="light">
                <Icon.Share color="green" />
              </Button>
            </Stack>
          </Container>
          <Link to='/conteudo-disciplina' className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>MuriloUrquiza</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />
                  28
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
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <div className="backConteudoDisciplina">Corretude</div>
                </Col>
              </Row>
            </Container>
          </Link>
          <Link to='/conteudo-disciplina' className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>ViniciusMaia</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />
                  28
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
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end"
                  }}
                >
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
