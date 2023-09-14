import "../Estilo/Materias.css"
import FontePoppins from '../../components/FontePoppins';
import Cabecalho from "../../components/Cabecalho";
import CabecalhoLogado from "../../components/CabecalhoLogado";
import MateriasEC2 from "../MateriasEC2/index";

import { Link } from 'react-router-dom';

const MateriasEC = () => {

    window.scrollTo(0, 0); //Reinicia o scroll

    const isAuthenticated = sessionStorage.getItem('access_token') !== null;

    let usuarioLogado = '';

  if (isAuthenticated) {
    usuarioLogado = <CabecalhoLogado home="" curador="" disciplinas="menuaSpanRegistros" suaMochila=""/>
  } else {
    usuarioLogado = <Cabecalho home="" curador="" entrar="" registrar=""/>;
  }

  return (
    <div className="imageRegistros">
        <FontePoppins/>
        {usuarioLogado}
        <MateriasEC2 />
        <footer>Todos os direitos reservados</footer>
    </div>
  )
}

export default MateriasEC