import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stack,
  Container,
  Col,
  Row,
  FormLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import Verificado from "../../assets/Verificado.svg"

import ConteudoDisciplinaTeste from "../../pages/ConteudoDisciplinaTeste";

function BlocoCadaDisciplina(props) {
    const current = new Date().toLocaleString();

    const user = "MuriloUrquiza";
    return (
        <Container style={{maxWidth: '800px'}}>
              <Row >
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  <FormLabel>{user}</FormLabel>
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />28
                  <Icon.ArrowDown style={{ margin: "2px" }} />2
                </Col>
              </Row>
              <Stack>
                <h2>{props.titulo}</h2>
                <h6>{current}</h6>
              </Stack>
              <Row style={{marginTop:"40px"}}>
                <Col>
                  <FormLabel>Verificado</FormLabel>
                  <img src={Verificado} style={{marginLeft:"8px", height:'22px'}}/>
                </Col>
                <Col style={{display: "flex", justifyContent: "end",}}>
                  <div className="backConteudoDisciplina">{props.assunto}</div>
                </Col>
                 
              </Row>
              <hr></hr>
              <ConteudoDisciplinaTeste style={{maxWidth: '800px'}} pdf={props.pdf} descricao={props.descricao}/>
        </Container>
    );
}

export default BlocoCadaDisciplina;