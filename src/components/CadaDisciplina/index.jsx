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

import Swal from 'sweetalert2';

function Disciplinas(props) {
  const current = new Date().toLocaleString();

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

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      <Cabecalho/>
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
              <Button variant="light" onClick={alerta}>
                <Icon.Dropbox color="green" />
              </Button>
              <Button variant="light" onClick={alerta}>
                <Icon.Youtube color="green" />
              </Button>
              <Button variant="light" onClick={alerta}>
                <Icon.Upload color="green" />
              </Button>
              <Button variant="light" onClick={alerta}>
                <Icon.Share color="green" />
              </Button>
            </Stack>
          <Link to='/conteudo-disciplina' className="contentArea">
            <Container>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>MuriloUrquiza</FormLabel>
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
                <Col style={{display: "flex", justifyContent: "end",}}>
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
