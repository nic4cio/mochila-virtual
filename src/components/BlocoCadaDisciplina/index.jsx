import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stack,
  Col,
  Container,
  Row,
  FormLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import Verificado from "../../assets/Verificado.svg"

import { useState } from 'react';

import ConteudoDisciplinaTeste from "../../pages/ConteudoDisciplinaTeste";

function BlocoCadaDisciplina(props) {
    const current = new Date().toLocaleString();

    const user = "MuriloUrquiza";

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
      <div>
        <Container onClick={openModal} style={{maxWidth: '800px', backgroundColor:"#161F23", color:'white', border:'none', cursor:'pointer'}}>
              <Row>
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
              
        </Container>
          {isModalOpen && (
                    <div className="modal-overlay-2">
                      <div className="modal-content-2">
                        <button onClick={closeModal} className="btn-recusar-modal-2">X</button>
                        <ConteudoDisciplinaTeste pdf={props.pdf} descricao={props.descricao} titulo={props.titulo}/>
                      </div>
                    </div>
                  )}
        
      </div>
    );
}

export default BlocoCadaDisciplina;