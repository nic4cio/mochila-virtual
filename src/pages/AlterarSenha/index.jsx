import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

function AlterarSenha() {
  return (
    <div className='imageRegistros'>
      <FontePoppins />
      <Cabecalho home="" materias="" curador="" entrar="" registrar=""/>
      <tbody className="container-senhaRegistros">
        <TituloImagem titulo="Alteração de senha"/>
        <div className="boxRegistros">
          <form>
            <input type="password" placeholder="Senha" size="25"/>
            <input type="password" placeholder="Confirmar senha" size="25"/>
            <input type="password" placeholder="Nova senha" size="25"/>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default AlterarSenha;