import BuscarCabecalho from '../BuscarCabecalho/index.jsx';
import MenuCabecalhoLogado from '../MenuCabecalhoLogado/index.jsx';

function CabecalhoLogado(props) {
    return (
        <thead className='cabecalhoRegistro'> 
          <BuscarCabecalho />
          <MenuCabecalhoLogado home={props.home} curador={props.curador} disciplinas={props.disciplinas} suaMochila={props.suaMochila} />
        </thead>
    );
}

export default CabecalhoLogado;