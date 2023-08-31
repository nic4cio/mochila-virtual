import { Link, useLocation } from 'react-router-dom';

function MenuCabecalho(props) {

    // Ainda não funciona ;-;
    const location = useLocation();

    const handleCuradorClick = () => {
        if (location.pathname !== '/') {
            window.location.href = '/';

            handleCuradorClick()           
        } else {
            scrollTo(0, 1900);
        }
    };  

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span><Link to="/"><span  className={props.curador} onClick={handleCuradorClick}>Seja um Curador</span></Link></span>
            <span><Link to="/login"><span className={props.entrar}>Entrar</span></Link></span>
            <span><Link to="/cadastro"><span className={props.registrar}>Registre-se</span></Link></span>
        </div>
    );
}

export default MenuCabecalho;