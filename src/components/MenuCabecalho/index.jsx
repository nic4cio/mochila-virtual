import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToBottom = () => {
    const html = document.documentElement;
    const y = html.scrollHeight - window.innerHeight;
    html.scrollTo({ top: y, behavior: 'smooth' });
};

function MenuCabecalho(props) {
    
    // const scrollToBottom = () => {

    //     if (ta na pagina home){
    //         scroll para o fim
    //     } else if (nao ta pagina){
    //         ir para a pagina home 
    //         timeout 
    //         DEPOIS: scroll para o fim
    //     }
        
    //     codigo para dar scroll:
    //         const html = document.documentElement;
    //         const y = html.scrollHeight - window.innerHeight;
    //         html.scrollTo({ top: y, behavior: 'smooth' });
    // };  onClick={scrollToBottom}

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span ><Link to="/" ><span  className={props.curador} >Seja um Curador</span></Link></span>
            <span><Link to="/login"><span className={props.entrar}>Entrar</span></Link></span>
            <span><Link to="/cadastro"><span className={props.registrar}>Registre-se</span></Link></span>
        </div>
    );
}

export default MenuCabecalho;