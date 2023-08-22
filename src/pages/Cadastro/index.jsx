import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';

function Cadastrar() {
  return (
    <div>
      <FontePoppins />
      <Cabecalho />
      <tbody className="container-senhaRegistros">
        <TituloImagem titulo="Cadastre-se agora!"/>
        <div className="boxRegistros">
          <form>
            <input type="text" placeholder="Email" size="25"/>
            <input type="password" placeholder="Senha" size="25"/>
            <input type="password" placeholder="Confirmar senha" size="25"/>
            <span className="verdeRegistros">Já possui uma conta? <Link to="/login">Clique aqui para fazer login!</Link></span>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default Cadastrar;