import Logo from "../../assets/pdslogo.svg";
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

import { Link } from 'react-router-dom';

function Disciplinas(props) {
  const current = new Date().toLocaleString();

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      <Cabecalho home="" materias="" curador="" entrar="" registrar=""/>
      <Container className={props.cor}>
        <h1 style={{ color: "black", padding: "180px 8px 8px 8px", fontWeight:'600'}}>
          {props.materia}
        </h1>
      </Container>
      <Container className="body">
        <Row>
          <Col>
            <div className="descriptionArea">
              <h4 style={{ color: "#FFFFFF" }}>{props.publicacoes} Publicações</h4>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF", marginBottom:"15px" }}>Professor:</h4>
              <h6 style={{ color: "#FFFFFF", marginLeft:"15px" }}>{props.professor}</h6>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF" }}>Curadores:</h4>
              <h6 style={{ color: "#BF7A47", marginLeft:"15px" }}>@GabrielNicacio</h6>
              <h6 style={{ color: "#BF7A47", marginLeft:"15px" }}>@MuriloUrquiza</h6>
              <h6 style={{ color: "#BF7A47", marginLeft:"15px" }}>@ViniciusMaia</h6>
              <h6 style={{ color: "#BF7A47", marginLeft:"15px" }}>@ArthurSampaio</h6>
              <hr style={{color:'white'}}/>
              <h4 style={{ color: "#FFFFFF" }}>Buscar assunto:</h4>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[0]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[1]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[2]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[3]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[4]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[5]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[6]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[7]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[8]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[9]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[10]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[11]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[12]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[13]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label={props.assuntos[14]} style={{ color: "white" }} />
              </Stack>
              <Stack className="filterArea">
                <Form.Check label="Outros" style={{ color: "white" }} />
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
