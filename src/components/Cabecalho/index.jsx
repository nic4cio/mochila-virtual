import BuscarCabecalho from '../BuscarCabecalho/index.jsx';
import MenuCabecalho from '../MenuCabecalho/index.jsx';

function Cabecalho(props) {
    return (
        <thead className='cabecalhoRegistro'> 
          <BuscarCabecalho />
          <MenuCabecalho home={props.home} curador={props.curador} entrar={props.entrar} registrar={props.registrar}/>
        </thead>
    );
}

export default Cabecalho;