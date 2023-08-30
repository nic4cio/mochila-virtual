import { Link } from 'react-router-dom';

function MenuCabecalhoLogado() {
    return(
        <div className="menuRegistros">
            <span><Link to="/materiascc">Matérias</Link></span>
            <span><a href=".">Seja um Curador</a></span>
            <span><img src="src/assets/homem-generico.png" alt="foto-usuario" style={{width: "50px", borderRadius: "50%"}} /></span>
            <span style={{color: "#BF7A47", marginLeft: "10px"}}>Olá, Vinícius!</span>
        </div>
    );
}

export default MenuCabecalhoLogado;