import { Link } from 'react-router-dom';

function MenuCabecalho(props) {
    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span><Link to="/materiascc"><span className={props.materias}>Matérias</span></Link></span>
            <span><a href="."><span className={props.curador}>Seja um Curador</span></a></span>
            <span><Link to="/login"><span className={props.entrar}>Entrar</span></Link></span>
            <span><Link to="/cadastro"><span className={props.registrar}>Registre-se</span></Link></span>
        </div>
    );
}

export default MenuCabecalho;