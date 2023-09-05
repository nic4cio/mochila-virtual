import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

function MenuCabecalho(props) {

    const alerta = () => {
        Swal.fire({
            title: 'Tentativa Inválida',
            text: 'Você precisa estar logado.',
            icon: 'info', // Ícone personalizado (warning, success, error, etc.)
            confirmButtonText: 'OK',
        });
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