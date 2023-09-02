import { Link } from 'react-router-dom';

function MenuCabecalho(props) {

    const alerta = () => {
        alert("Você deve estar logado antes!")
    };

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span ><Link to="/login"><span  className={props.curador} onClick={alerta}>Seja um Curador</span></Link></span>
            <span><Link to="/login"><span className={props.entrar}>Entrar</span></Link></span>
            <span><Link to="/cadastro"><span className={props.registrar}>Registre-se</span></Link></span>
        </div>
    );
}

export default MenuCabecalho;