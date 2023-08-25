import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import FontePoppins from '../../components/FontePoppins';
import "./style.css";

import invariante from '../../components/Pdf/Invariante.pdf';

import Comentario from "../../components/Comentario";
import AddComentario from '../../components/AddComentario';

function ConteudoDisciplina() {
    return (
        <div className="imageRegistros">
            <FontePoppins />
            <Cabecalho />
            <tbody className="corpoConteudo">
                <h6 >Por: <span className="tituloH6Conteudo">ViniciusMaia</span></h6>
                <h3 >Como identificar invariante de laço</h3>
                <div> 
                    <iframe src={invariante} height={ 600 } className="pdfConteudo"></iframe>
                </div>
                <div className="abaxioPDFConteudo">
                    <span>
                        <Icon.ArrowUp style={{ margin: "2px" , color: "green"}} />28
                        <Icon.ArrowDown style={{ margin: "2px", color: "red" }} />2
                    </span>
                    <a className="linkConteudo" href="">Comentários</a>
                    <a className="linkConteudo" href="">Compartilhar</a>
                    <a className="linkConteudo" href="">Download</a>
                    <span className="paddingLeftConteudo"></span>
                    <a className="linkConteudo" href="">Denunciar</a>
                </div>
                
                <AddComentario />
                <Comentario comentario="Muito bom"/>
                <Comentario comentario="Excelente conteúdo de como identificar laços!"/>
                <div className="marginBottomConteudo"></div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;