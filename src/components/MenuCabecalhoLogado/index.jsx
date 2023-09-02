import { Link } from 'react-router-dom';

// Esses props não tão funcionando ainda ;-;
function MenuCabecalhoLogado(props) {

    const alerta = () => {
        alert("Você deve estar logado antes!")
    };

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span><Link to="/curador"><span className={props.curador} onClick={alerta}>Seja um Curador</span></Link></span>
            <span><img src="src/assets/homem-generico.png" alt="foto-usuario" style={{width: "50px", borderRadius: "50%"}} /></span>
            <span style={{color: "#BF7A47", marginLeft: "10px"}}>Olá, Vinícius!</span>
        </div>
    );
}

export default MenuCabecalhoLogado;