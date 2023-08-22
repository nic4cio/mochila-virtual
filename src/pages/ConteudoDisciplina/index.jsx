import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import Pdf from "../../components/Pdf/index";

import "./style.css";

function ConteudoDisciplina() {
    return (
        <div>
            <Cabecalho />
            <tbody className="corpoConteudo">
                <h5>Por: ViniciusMaia</h5>
                <h2>Como identificar invariante de laço</h2>
                <div> 
                    <Pdf />
                </div>
                <div>
                    <span>
                        <Icon.ArrowUp style={{ margin: "2px" }} />28
                        <Icon.ArrowDown style={{ margin: "2px" }} />2
                    </span>
                    <a href="">Comentários</a>
                    <a href="">Compartilhar</a>
                    <a href="">Download</a>
                    <a href="">Denunciar</a>
                </div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;