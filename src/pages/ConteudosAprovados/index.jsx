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

  let cont = 0;

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      {usuarioLogado}
      <Container className="body">
        <Stack>
          <h1 style={{margin: '0px auto', padding: '30px'}}>Conteúdos Aprovados</h1><hr style={{width:'800px', margin:'30px auto'}}/>
            {
              banco.map((conteudoData, index) => (
                ((conteudoData.status == 'APROVADO' && ++cont > 0) &&
                <BlocoCadaDisciplina key={index} titulo={conteudoData.titulo} pdf={conteudoData.pdf} assunto={conteudoData.assunto} descricao={conteudoData.descricao}/>
                )
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
