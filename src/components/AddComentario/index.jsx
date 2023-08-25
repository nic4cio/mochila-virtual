import { useState } from 'react';

import Comentario from "../Comentario";

function AddComentario() {
    const [componentes, setComponentes] = useState([Comentario]); // Estado para manter os componentes

    const adicionarComponente = () => {
        setComponentes([...componentes, <Comentario comentario="Bom material" key={componentes.length} />]);
    };

    return(
        <div>
            <div>
                <div className="comentarioCaixaConteudo">
                    <input className="formConteudo" type="text" placeholder="Escreva seu comentário" size="35"/>
                    <button onClick={adicionarComponente} className="comentarioConteudo">+ Adicionar comentário</button>
                </div>
            </div>
                {componentes.map((componente, index) => (
                    <div key={index}>{componente}</div>))}
        </div>
    );
}

export default AddComentario;