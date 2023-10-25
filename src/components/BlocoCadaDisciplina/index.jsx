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

import { useState, useEffect } from 'react';

import ConteudoDisciplinaTeste from "../../pages/ConteudoDisciplinaTeste";

import { getContentVotes, getUser } from "../../services/api";

function BlocoCadaDisciplina(props) {
    const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });

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

    // const current = new Date().toLocaleString();

    // const user = "MuriloUrquiza";

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
      // Define an async function for fetching content
      const fetchData = async () => {
        try {
          const response = await getContentVotes(props.id);
          setVotes(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData(); // Call the async function to fetch data when the component mounts
    }, [isModalOpen]);


    return (
      <div className="contentArea">
        <Container onClick={openModal} style={{width:'800px', border:'none', cursor:'pointer'}}>
              <Row>
                <Col style={{ display: "flex", justifyContent: "start" }}>
                  <Icon.Person style={{ margin: "5px" }} />
                  {        
                    banco2.map((conteudoData, index) => conteudoData.id == props.userId &&
                      <FormLabel key={index} conteudoData = {conteudoData}>{conteudoData.firstName}</FormLabel>
                    )
                  }
                </Col>
                <Col style={{ display: "flex", justifyContent: "end" }}>
                  <Icon.ArrowUp style={{ margin: "2px" }} />{votes.upvotes}
                  <Icon.ArrowDown style={{ margin: "2px" }} />{votes.downvotes}
                </Col>
              </Row>
              <Stack>
                <h2 style={{ wordWrap: 'break-word' }}>{props.titulo}</h2>
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
                        <ConteudoDisciplinaTeste user={props.user} id={props.id} pdf={props.pdf} descricao={props.descricao} titulo={props.titulo}/>
                      </div>
                    </div>
                  )}
        
      </div>
    );
}

export default BlocoCadaDisciplina;