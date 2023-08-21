import Logo from "../../assets/pdslogo.svg"
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

function Disciplinas() {
  const materiais = "23 Materiais";
  const current = new Date().toLocaleString();

  return (
    <div className="App">
      <FontePoppins/>
      <Navbar expand="lg" bg="#343434">
        <img src={Logo} className="App-logo" alt="logo" />
        <Form.Control
          style={{
            width: "17em",
            backgroundColor: "#adadad",
            fontWeight: "bold",
          }}
          placeholder="Buscar materiais, disciplinas, ..."
        />
      </Navbar>
      <Container className="titleCard">
        <h1 style={{ color: "#FFFFFF", padding: "8px" }}>
          Projeto e Análise de Algoritmos
        </h1>
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
          <Col></Col>
        </Row>
        <Stack>
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
                <h2>Como identificar variante de laço</h2>
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
                <h2>Como identificar variante de laço</h2>
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
