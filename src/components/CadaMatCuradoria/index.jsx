import { useState } from 'react';

import Swal from 'sweetalert2';

import axios from 'axios';

function CadaMatCuradoria (props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const [newStatus, setNewStatus] = useState(''); // Estado para armazenar o novo status
    const [conteudoId, setConteudoId] = useState(1); // Substitua pelo ID do conteúdo correto
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = async () => {
        setModalOpen(false);
    // teste
        setIsLoading(true);

        try {
        // Substitua 'URL_DO_SEU_BACKEND' pela URL real do seu servidor
        const response = await axios.patch(`http://localhost:3333/conteudos/${props.id}`, {
            status: 'APROVADO',
        });

        // Lide com a resposta se necessário
        console.log('Status atualizado com sucesso:', response.data);

        } catch (error) {
        // Lide com erros, por exemplo, exibindo uma mensagem de erro ao usuário
        console.error('Erro ao atualizar o status:', error);
        } finally {
        setIsLoading(false);
        }
        // fazer o Patch -> status = 'Aprovado'
        Swal.fire({
            title: 'Conteúdo Publicado!',
            icon: 'success', // Ícone personalizado (warning, success, error, etc.)
            confirmButtonText: 'OK',
        });
    };

    const closeModal2 = () => {
        setModalOpen(false);
        //Enviar um email para o usuario
        Swal.fire({
            title: 'Conteúdo Recusado!',
            icon: 'error', // Ícone personalizado (warning, success, error, etc.)
            confirmButtonText: 'OK',
        });
    };

    return (
        <span>
            <button onClick={openModal} className="box-curadoria">
                <span style={{fontSize:'20px'}}>{props.titulo}</span><br />
                <div style={{margin:'10px 10px 0px 10px'}}>{props.descricao}</div><br />
                <button className='btn-aceitar'>T</button>
                <button className='btn-rejeitar'>F</button>
            </button>
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div className="top" >{props.descricao}</div>
                    <div style={{margin:'20px'}}> 
                        <iframe src={props.pdf} height={ 600 } className="pdfConteudo"></iframe>
                    </div>

                    <div>
                        <button onClick={closeModal} disabled={isLoading} class="btn-aceitar-modal">T</button>
                        <button onClick={closeModal2} class="btn-recusar-modal">F</button>
                    </div>
                </div>
              </div>
            )}
        </span>
    );
}

export default CadaMatCuradoria;