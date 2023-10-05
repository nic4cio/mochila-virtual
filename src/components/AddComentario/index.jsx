import { useState } from 'react';
import { createComment } from '../../services/api';

function AddComentario({ conteudoId }) {
  const [comentario, setComentario] = useState('');

  const componentesHandler = (event) => {
    setComentario(event.target.value);
  };

  const adicionarComponente = async (event) => {
    event.preventDefault();

    try {
      // Call the createComment function with the conteudoId and comentario text
      await createComment(conteudoId, comentario); // Pass the comment as an object
      // You may want to update the UI here if needed
      setComentario('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }

    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={adicionarComponente} className="comentarioCaixaConteudo">
        <input
          type="text"
          className="formConteudo"
          value={comentario}
          onChange={componentesHandler}
          placeholder="Escreva seu comentário"
          size="35"
        />
        <button type="submit" className="comentarioConteudo">
          + Adicionar comentário
        </button>
      </form>
    </div>
  );
}

export default AddComentario;