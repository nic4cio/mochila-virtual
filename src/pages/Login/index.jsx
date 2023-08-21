import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <FontePoppins />
      <Cabecalho />
      <tbody className="containerRegistros">
        <TituloImagem titulo="Olá, estudante!"/>
        <div className="boxRegistros">
          <form>
            <input type="text" placeholder="Email" size="35"/>
            <input type="password" placeholder="Senha" size="35"/>
            <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
            <Link to="/cadastro">Cadastre-se agora!</Link>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default App;