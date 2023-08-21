import Cabecalho from '../../components/Cabecalho';
import FontePoppins from '../../components/FontePoppins';
import '../Estilo/Registros.css';

function EsqueceuSenha() {
  return (
    <div>
      <FontePoppins />
      <Cabecalho />
      <tbody className="container-senhaRegistros">
        <div className="boxRegistros">
          <h3>Digite seu email cadastrado</h3>
          <h4 className="laranjaRegistros">Você receberá um email para alterar sua senha</h4>
        </div>
        <div className="boxRegistros">
          <form>
            <input type="text" placeholder="Email" size="35"/>
            <input type="text" placeholder="Confirmar email" size="35"/>
            <button type="submit">Confirmar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default EsqueceuSenha;