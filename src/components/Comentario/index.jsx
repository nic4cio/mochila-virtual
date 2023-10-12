import * as Icon from "react-bootstrap-icons";
import { getUser } from "../../services/api";
import { useState, useEffect } from 'react';

function Comentario(props) {

    const [banco2, setBanco2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await getUser(); 
            setBanco2(response.data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData(); 
    }, []);

    return(
        <div className="blockConteudo">
            <div className="comentarioFeitoConteudo">
                <div>
                    {        
                        banco2.map((conteudoData, index) => conteudoData.id == props.userId &&
                        <span className="azulConteudo" key={index} conteudoData = {conteudoData}>{conteudoData.firstName}:</span>
                        )
                    }
                    
                    <a className="linkConteudo marginComentarioConteudo" href="">Denunciar</a>
                </div>
                <div className="marginContedo">
                    <span>{props.comentario}</span> 
                </div>
            </div>
        </div>
    );
}

export default Comentario;