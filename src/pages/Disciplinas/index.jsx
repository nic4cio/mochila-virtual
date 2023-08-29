import "../Estilo/Disciplinas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Stack,
  Form,
  Container,
  Col,
  Row,
  FormLabel,
  Image,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import FontePoppins from "../../components/FontePoppins";
import Cabecalho from "../../components/Cabecalho";
import foto from "../../assets/homem-generico.png";

import { Link } from "react-router-dom";

function Disciplinas() {
  const materiais = "23 Materiais";
  const current = new Date().toLocaleString();

  return (
    <div className="App imageRegistros">
      <FontePoppins />
      <Cabecalho />
      <Container className="titleCard">
        <h1>Projeto e Análise de Algoritmos</h1>
      </Container>
      <Container className="body">
        <Row>
          <Col>
            <div className="descriptionArea">
              <h3 style={{ color: "#FFFFFF" }}>{materiais}</h3>
              <h3 style={{ color: "#FFFFFF" }}>Curadores:</h3>
              <h4 style={{ color: "#FF8283" }}>@Gabriel</h4>
              <h4 style={{ color: "#FF8283" }}>@Arthur</h4>
              <div style={{ display: "flex" }}>
                <h3 style={{ color: "#FFFFFF" }}>Dificuldade:</h3>
                <h3 style={{ color: "#FF8283" }}>5/5</h3>
              </div>
            </div>
            <Stack className="filterArea">
              <Form.Check label="Teste" style={{ color: "white" }} />
            </Stack>
            <Stack className="filterArea">
              <Form.Check label="Teste" style={{ color: "white" }} />
            </Stack>
            <Stack className="filterArea">
              <Form.Check label="Teste" style={{ color: "white" }} />
            </Stack>
          </Col>
        </Row>
        <Stack className="mainArea">
          <Stack direction="horizontal" gap={1} className="shareContent">
            <Button variant="light">
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
          <div className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>Username</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />
                  28
                  <Icon.ArrowDown style={{ margin: "2px" }} />2
                </Col>
              </Row>
              <Stack>
                <Link to="/conteudo-disciplina">
                  <h2>Como identificar variante de laço</h2>
                </Link>
                <h4>{current}</h4>
              </Stack>
              <Row>
                <Col>
                  <FormLabel>Verified</FormLabel>
                  <Icon.Check size={40} color="#42DEE9" />
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <div>Subject</div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>Username</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />
                  28
                  <Icon.ArrowDown style={{ margin: "2px" }} />2
                </Col>
              </Row>
              <Stack>
                <Link to="/conteudo-disciplina">
                  <h2>Como identificar variante de laço</h2>
                </Link>
                <h4>{current}</h4>
              </Stack>
              <Row>
                <Col>
                  <FormLabel>Verified</FormLabel>
                  <Icon.Check size={40} color="#42DEE9" />
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <div>Subject</div>
                </Col>
              </Row>
            </Container>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default Disciplinas;
