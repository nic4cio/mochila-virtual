import logoImage from '../../assets/mochila-azul-verde.png';
import { Link } from 'react-router-dom';

function BuscarCabecalho() {
    return (
        <div className="logoRegistros">
        <Link to={"/home"}><img alt="" src={logoImage}/></Link>
            <Link to={"/conteudos-aprovados"}><form> 
                <input type="text" size="25" placeholder="Buscar materiais, disciplinas, ..." />
            </form></Link>
        </div>
    );
}

export default BuscarCabecalho;