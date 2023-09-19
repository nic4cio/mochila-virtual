import * as Icon from "react-bootstrap-icons";

function Comentario(props) {
    return(
        <div className="blockConteudo">
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
                        <Icon.ArrowUp style={{ margin: "2px"}} />
                        <Icon.ArrowDown style={{ margin: "2px"}} />
                    </span>
                </div>
            </div>
        </div>
        
    );
}

export default Comentario;