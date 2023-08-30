import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import FontePoppins from '../../components/FontePoppins';
import "./style.css";

import invariante from '../../components/Pdf/Invariante.pdf';

import Comentario from "../../components/Comentario";
import AddComentario from '../../components/AddComentario';

import React, { useState } from 'react';

function ConteudoDisciplina() {
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
            <Cabecalho home="" materias="" curador="" entrar="" registrar=""/>
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
                <Comentario comentario="Excelente conteúdo de como identificar laços!"/>
                <div className="marginBottomConteudo"></div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;