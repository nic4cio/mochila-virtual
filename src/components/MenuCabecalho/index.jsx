import { Link } from 'react-router-dom';

function MenuCabecalho() {
    return(
        <div className="menuRegistros">
            <span><a href=".">Matérias</a></span>
            <span><a href=".">Seja um Curador</a></span>
            <span><Link to="/login">Entrar</Link></span>
            <span><Link to="/cadastro"><span>Registre-se</span></Link></span>
        </div>
    );
}

export default MenuCabecalho;