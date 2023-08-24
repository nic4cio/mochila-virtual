import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import Pdf from "../../components/Pdf/index";
import FontePoppins from '../../components/FontePoppins';
import "./style.css";

import invariante from '../../components/Pdf/invariante.pdf';

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
                <div>
                    <form className="comentarioCaixaConteudo">
                        <input className="formConteudo" type="text" placeholder="Escreva seu comentário" size="35"/>
                        <button className="comentarioConteudo">+ Adicionar comentário</button>
                    </form>
                </div>
                <div className="comentarioFeitoConteudo">
                    <div>
                        <span className="azulConteudo">MuriloUrquiza:</span>
                        <a className="linkConteudo" href="">Denunciar</a>
                    </div>
                    <div className="marginContedo">
                        <span>Muito bom!</span> 
                    </div>
                    <div>
                        <span>
                            <Icon.ArrowUp style={{ margin: "2px"}} />6
                            <Icon.ArrowDown style={{ margin: "2px"}} />3
                        </span>
                    </div>
                </div>
                <div className="comentarioFeitoConteudo">
                    <div>
                        <span className="azulConteudo">MuriloUrquiza:</span>
                        <a className="linkConteudo" href="">Denunciar</a>
                    </div>
                    <div className="marginContedo">
                        <span>Muito bom!</span> 
                    </div>
                    <div>
                        <span>
                            <Icon.ArrowUp style={{ margin: "2px"}} />6
                            <Icon.ArrowDown style={{ margin: "2px"}} />3
                        </span>
                    </div>
                </div>
                <div className="comentarioFeitoConteudo">
                    <div>
                        <span className="azulConteudo">MuriloUrquiza:</span>
                        <a className="linkConteudo" href="">Denunciar</a>
                    </div>
                    <div className="marginContedo">
                        <span>Muito bom!</span> 
                    </div>
                    <div>
                        <span>
                            <Icon.ArrowUp style={{ margin: "2px"}} />6
                            <Icon.ArrowDown style={{ margin: "2px"}} />3
                        </span>
                    </div>
                </div>
                <div className="marginBottomConteudo"></div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;