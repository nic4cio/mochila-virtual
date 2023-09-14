import { Link } from 'react-router-dom';
import usuarioFoto from '../../assets/homem-generico.png'

// Esses props não tão funcionando ainda ;-;
function MenuCabecalhoLogado(props) {

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span><Link to="/solicitar-curador"><span className={props.curador}>Seja um Curador</span></Link></span>
            <span><Link to=""><span className={props.disciplinas}>Disciplinas</span></Link></span>
            <span><Link to=""><span className={props.suaMochila}>Sua Mochila</span></Link></span>
            <span><img src={usuarioFoto} alt="foto-usuario" style={{width: "50px", borderRadius: "50%"}} /></span>
            <span style={{color: "#BF7A47", marginLeft: "10px"}}>Olá, Vinícius!</span>
        </div>
    );
}

export default MenuCabecalhoLogado;