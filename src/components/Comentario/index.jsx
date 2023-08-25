import * as Icon from "react-bootstrap-icons";

function Comentario(props) {
    return(
        <div className="comentarioFeitoConteudo">
            <div>
                <span className="azulConteudo">MuriloUrquiza:</span>
                <a className="linkConteudo marginComentarioConteudo" href="">Denunciar</a>
            </div>
            <div className="marginContedo">
                <span>{props.comentario}</span> 
            </div>
            <div>
                <span>
                    <Icon.ArrowUp style={{ margin: "2px"}} />6
                    <Icon.ArrowDown style={{ margin: "2px"}} />3
                </span>
            </div>
        </div>
    );
}

export default Comentario;