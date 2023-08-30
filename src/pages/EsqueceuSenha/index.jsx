import Cabecalho from '../../components/Cabecalho';
import FontePoppins from '../../components/FontePoppins';
import '../Estilo/Registros.css';

function EsqueceuSenha() {
  return (
    <div className='imageRegistros'>
      <FontePoppins />
      <Cabecalho home="" materias="" curador="" entrar="" registrar=""/>
      <tbody className="container-senhaRegistros tamanhoContainerRegistros">
        <div className="boxRegistros">
          <h3>Digite seu email cadastrado</h3>
          <h5 className="laranjaRegistros">Você receberá um email para alterar sua senha</h5>
        </div>
        <div className="boxRegistros">
          <form>
            <input type="text" placeholder="Email" size="25"/>
            <input type="text" placeholder="Confirmar email" size="25"/>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default EsqueceuSenha;