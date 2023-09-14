import Body from "../../components/Body"
import FontePoppins from '../../components/FontePoppins';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


import Cabecalho from '../../components/Cabecalho';
import CabecalhoLogado from '../../components/CabecalhoLogado';

function Home() {
  window.scrollTo(0, 0); //Reinicia o scroll

  const isAuthenticated = sessionStorage.getItem('access_token') !== null;

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page or another appropriate route
    return (
      <div className="imageRegistros">
          <FontePoppins/>
          <Cabecalho home="menuaSpanRegistros" curador="" entrar="" registrar="" />
          <Body/>
      </div>
    );
  }

  return (
    <div className="imageRegistros">
        <FontePoppins/>
        <CabecalhoLogado home="menuaSpanRegistros" curador="" disciplinas="" suaMochila=""/>
        <Body/>
    </div>
  );
}

export default Home;