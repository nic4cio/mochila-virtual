import { useState } from 'react';

import Comentario from "../Comentario";
import { createComment } from '../../services/api';

const dadosComentarios = [
];

function AddComentario() {
    const [comentario, setComentario] = useState(''); // Estado para manter os componentes
    const [banco, setBanco] = useState(dadosComentarios);

    const componentesHandler = (event) => {
        setComentario(event.target.value);
    };

    const adicionarComponente = async (event) => {
        event.preventDefault();
    
        const comentarioData = {
          comentario: comentario
        };

        const data = {
          texto: comentario,
          upvote: 0,
          downvote: 0,
        }

        try{
            await createComment(data)
        }catch(error){
            console.error(error.response.data.message);
            setErrorMessage(error.response.data.message)
        }

        setBanco(preBanco => {
          return [comentarioData, ...preBanco];
        });

        setComentario('');
      }

    return(
        <div>
            <form onSubmit={adicionarComponente} className="comentarioCaixaConteudo">
                <input type="text" className="formConteudo" value={comentario} onChange={componentesHandler} placeholder="Escreva seu comentário" size="35"/>
                <button type='submit' className="comentarioConteudo">+ Adicionar comentário</button>
            </form>
            {banco.map((componente, index) => (
                <Comentario key={index} comentario={componente.comentarioData} />
            ))}
        </div>
    );
}

export default AddComentario;