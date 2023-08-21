import loginImage from '../../assets/login.svg';

function TituloImagem(props) {
    return (
        <div className="boxRegistros">
            <h3>{props.titulo}</h3>
            <img alt="" src={loginImage}/>
        </div>
    );
}

export default TituloImagem;