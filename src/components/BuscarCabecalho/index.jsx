import logoImage from '../../assets/pdslogo.svg';

function BuscarCabecalho() {
    return (
        <div className="logoRegistros">
        <Link to={"/home"}><img alt="" src={logoImage}/></Link>
            <form>
              <input type="text" size="25" placeholder="Buscar materiais, disciplinas, ..."></input>
            </form>
        </div>
    );
}

export default BuscarCabecalho;