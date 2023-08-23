import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import Pdf from "../../components/Pdf/index";
import FontePoppins from '../../components/FontePoppins';
import "./style.css";

function ConteudoDisciplina() {
    return (
        <div>
            <FontePoppins />
            <Cabecalho />
            <tbody className="corpoConteudo">
                <h6 >Por: <span className="tituloH6Conteudo">ViniciusMaia</span></h6>
                <h3 >Como identificar invariante de laço</h3>
                <div className="pdfConteudo"> 
                    <Pdf />
                </div>
                <div className="abaxioPDFConteudo linkConteudo">
                    <span>
                        <Icon.ArrowUp style={{ margin: "2px" }} />28
                        <Icon.ArrowDown style={{ margin: "2px" }} />2
                    </span>
                    <a href="">Comentários</a>
                    <a href="">Compartilhar</a>
                    <a href="">Download</a>
                    <span className="paddingLeftConteudo"></span>
                    <a href="">Denunciar</a>
                </div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;