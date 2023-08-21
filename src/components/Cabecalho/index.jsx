import BuscarCabecalho from '../BuscarCabecalho/index.jsx';
import MenuCabecalho from '../MenuCabecalho/index.jsx';

function Cabecalho() {
    return (
        <thead> 
          <BuscarCabecalho />
          <MenuCabecalho />
        </thead>
    );
}

export default Cabecalho;