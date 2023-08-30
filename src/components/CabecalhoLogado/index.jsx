import BuscarCabecalho from '../BuscarCabecalho/index.jsx';
import MenuCabecalhoLogado from '../MenuCabecalhoLogado/index.jsx';

function CabecalhoLogado() {
    return (
        <thead className='cabecalhoRegistro'> 
          <BuscarCabecalho />
          <MenuCabecalhoLogado />
        </thead>
    );
}

export default CabecalhoLogado;