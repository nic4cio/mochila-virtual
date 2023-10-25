import { useState, useEffect } from 'react';
import "../../pages/Estilo/Disciplinas.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stack,
  Container,
} from "react-bootstrap";
import FontePoppins from "../../components/FontePoppins";
import MenuCabecalho from "../../components/MenuCabecalho";
import MenuCabecalhoLogado from "../../components/MenuCabecalhoLogado";

import { Link } from 'react-router-dom';


import BlocoCadaDisciplina from "../../components/BlocoCadaDisciplina";

import { getContent } from "../../services/api";

import logoImage from '../../assets/mochila-azul-verde.png';

function Disciplinas() {
  const [banco, setBanco] = useState([]);
  const [input, setInput] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value.toLowerCase());
};

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

  let cont = 0;

  return (
    <div className="App imageRegistros">
      <FontePoppins/>
      {isAuthenticated && 
      <thead className='cabecalhoRegistro'> 
        <div className="logoRegistros">
            <Link to={"/home"}><img alt="" src={logoImage}/></Link>
            <form> 
                <input type="text" size="25" placeholder="Buscar materiais, disciplinas, ..." value={input} onChange={handleInput} autoFocus={true}/>
            </form>
        </div>
        <MenuCabecalhoLogado  />
      </thead>
      }
      {!isAuthenticated && 
      <thead className='cabecalhoRegistro'> 
        <div className="logoRegistros">
            <Link to={"/home"}><img alt="" src={logoImage}/></Link>
            <form> 
                <input type="text" size="25" placeholder="Buscar materiais, disciplinas, ..." value={input} onChange={handleInput} autoFocus={true} />
            </form>
        </div>
        <MenuCabecalho  />
      </thead>
      }
      <Container className="body">
        <Stack>
          <h1 style={{margin: '0px auto', padding: '30px'}}>Conteúdos Aprovados</h1><hr style={{width:'800px', margin:'30px auto'}}/>
            {
              banco.map((conteudoData, index) => (
                (((conteudoData.status == 'APROVADO' && ++cont > 0) && (conteudoData.titulo.toLowerCase().includes(input) || conteudoData.materia.toLowerCase().includes(input) || conteudoData.assunto.toLowerCase().includes(input))) &&
                <div key={index} style={{width:'850px', margin:'0px auto'}}>
                  <span style={{color:'#BF7A47', backgroundColor:'#161F23', borderRadius:'5px', padding:'3px 8px'}}>{conteudoData.materia}</span>
                  <BlocoCadaDisciplina id={conteudoData.id} titulo={conteudoData.titulo} pdf={conteudoData.pdf} assunto={conteudoData.assunto} descricao={conteudoData.descricao}/>
                  <br />
                </div>
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
