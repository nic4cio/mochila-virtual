import { useState } from 'react';

import Comentario from "../Comentario";

const dadosComentarios = [
];

function AddComentario() {
    const [comentario, setComentario] = useState(''); // Estado para manter os componentes
    const [banco, setBanco] = useState(dadosComentarios);

    const componentesHandler = (event) => {
        setComentario(event.target.value);
    };

    const adicionarComponente = (event) => {
        event.preventDefault();
    
        const comentarioData = {
          comentario: comentario
        };
    
        setBanco(preBanco => {
          return [comentarioData, ...preBanco];
        });

      }

    return(
        <div>
            <form onSubmit={adicionarComponente} className="comentarioCaixaConteudo">
                <input   className="formConteudo" type="text" onClick={componentesHandler} placeholder="Escreva seu comentário" size="35"/>
                <button type='submit' className="comentarioConteudo">+ Adicionar comentário</button>
            </form>
            {banco.map((componente) => (
                <Comentario comentario={componente.comentario}/>)
            )}
        </div>
    );
}

export default AddComentario;