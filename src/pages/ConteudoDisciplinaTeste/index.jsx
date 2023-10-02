import Cabecalho from "../../components/Cabecalho";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

import FontePoppins from '../../components/FontePoppins';


import invariante from '../../components/Pdf/Invariante.pdf';

import Comentario from "../../components/Comentario";
import AddComentario from '../../components/AddComentario';

import { getContentVotes, upvoteContent, downvoteContent } from "../../services/api";

import { useState, useEffect } from 'react';

function ConteudoDisciplina(props) {
    window.scrollTo(0, 0); //Reinicia o scroll
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [votes, setVotes] = useState({ upvotes: 0, downvotes: 0 });

    const Compartilhar = () => {

        setMostrarAlerta(true);
        setTimeout(() => {
            setMostrarAlerta(false);
        }, 4000); 
    };
         
    useEffect(() => {
        // Define an async function for fetching content
        const fetchData = async () => {
          try {
            const response = await getContentVotes(props.id);
            setVotes(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData(); // Call the async function to fetch data when the component mounts
      }, [votes]);

      const handleUpvote = async () => {
          try {
            const updatedContent = await upvoteContent(props.id);
            setVotes(updatedContent.votes); // Atualize o número de votos após a resposta da API
          } catch (error) {
            console.error(error)
          }
      };

      const handleDownvote = async () => {
        try {
          const updatedContent = await downvoteContent(props.id);
          setVotes(updatedContent.votes); // Atualize o número de votos após a resposta da API
        } catch (error) {
            console.error(error)
        }
      };

    return (
        <div className="imageRegistros">
            <FontePoppins />
            <tbody >
                <h3 >{props.titulo} !</h3>
                <h5 >{props.descricao}</h5>
                <div style={{textAlign:'center'}}>
                    <iframe src={props.pdf} height={ 600 } className="pdfConteudo"></iframe>
                    <a href={props.pdf} target="_blank" style={{textDecoration:'none', color:'#78D6CF', fontSize:'20px'}} rel="noreferrer">Acesse o LINK do Conteúdo</a>
                    <hr />
                </div>
                <div className="abaxioPDFConteudo">
                    <span>
                        <button onClick={handleUpvote}><Icon.ArrowUp style={{ margin: "2px" , color: "green"}} />{votes && votes.upvotes !== undefined ? votes.upvotes : 0}</button>
                        <button onClick={handleDownvote}><Icon.ArrowDown style={{ margin: "2px", color: "red" }} />{votes && votes.downvotes !== undefined ? votes.downvotes : 0}</button>
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
                
                <AddComentario conteudoId={props.id} />
                <Comentario comentario="Muito bom"/>
                <div className="marginBottomConteudo"></div>
            </tbody>
        </div>
    );
}

export default ConteudoDisciplina;