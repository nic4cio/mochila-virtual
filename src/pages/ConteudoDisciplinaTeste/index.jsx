import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import FontePoppins from '../../components/FontePoppins';


import invariante from '../../components/Pdf/Invariante.pdf';

import Comentario from "../../components/Comentario";
import AddComentario from '../../components/AddComentario';

import { useState } from 'react';

function ConteudoDisciplina(props) {
    window.scrollTo(0, 0); //Reinicia o scroll
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const Compartilhar = () => {

        setMostrarAlerta(true);
        setTimeout(() => {
            setMostrarAlerta(false);
        }, 4000); 
    };
                          

    return (
        <div className="imageRegistros">
            <FontePoppins />
            <tbody >
                <h3 >{props.titulo} !</h3>
                <h5 >{props.descricao}</h5>
                <div style={{textAlign:'center'}}>
                    <iframe src={props.pdf} height={ 600 } className="pdfConteudo"></iframe>
                    <a href={props.pdf} target="_blank" style={{textDecoration:'none', color:'#78D6CF', fontSize:'20px'}}>Acesse o LINK do Conteúdo</a>
                    <hr />
                </div>
                <div className="abaxioPDFConteudo">
                    <span>
                        <Icon.ArrowUp style={{ margin: "2px" , color: "green"}} />28
                        <Icon.ArrowDown style={{ margin: "2px", color: "red" }} />2
                    </span>
                    <button className="linkConteudo" href="">Comentários</button>
                    <button onClick={Compartilhar} className="linkConteudo">Compartilhar</button>
                    <button className="linkConteudo" href="">Download</button>
                    <button className="linkConteudoDenunciar" href="">Denunciar</button>
                </div>

                {/*Vai ser mostrado no alerta */}
                {mostrarAlerta && (
                    <div className="alertaAreaTransferencia">
                    Link copiado para a área de transferência
                    </div>
                )}
                
                <AddComentario />
                <Comentario comentario="Muito bom"/>
                <div className="marginBottomConteudo"></div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;