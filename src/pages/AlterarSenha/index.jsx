import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

function AlterarSenha() {
  return (
    <div>
      <FontePoppins />
      <Cabecalho />
      <tbody className="container-senhaRegistros">
        <TituloImagem titulo="Alteração de senha"/>
        <div className="boxRegistros">
          <form>
            <input type="password" placeholder="Senha" size="35"/>
            <input type="password" placeholder="Confirmar senha" size="35"/>
            <input type="password" placeholder="Nova senha" size="35"/>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default AlterarSenha;