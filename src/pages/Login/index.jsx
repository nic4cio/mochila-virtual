import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='imageRegistros'>
      <FontePoppins />
      <Cabecalho home="" materias="" curador="" entrar="menuaSpanRegistros" registrar=""/>
      <tbody className="containerRegistros">
        <TituloImagem titulo="Olá, estudante!"/>
        <div className="boxRegistros">
          <form>
            <input type="text" placeholder="Email" size="25"/>
            <input type="password" placeholder="Senha" size="25"/>
            <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
            <Link to="/cadastro">Cadastre-se agora!</Link>
            <Link to="/usuario-logado"><button type="submit">Entrar</button></Link>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default App;