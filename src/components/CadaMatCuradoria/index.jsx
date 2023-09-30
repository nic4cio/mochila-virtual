import { useState } from 'react';

import Swal from 'sweetalert2';

import axios from 'axios';

import { updateContent } from '../../services/api.js'

function CadaMatCuradoria (props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = async () => {
        setModalOpen(false);

        const token = sessionStorage.getItem('access_token');

        try {
            await updateContent(props.id, props.conteudoData, token);
        }catch (error) {
            console.error(error.response.data.message);
        }

        Swal.fire({
            title: 'Conteúdo Publicado!',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              location.reload();
            }
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
                        <button onClick={closeModal} className="btn-aceitar-modal">T</button>
                        <button onClick={closeModal2} className="btn-recusar-modal">F</button>
                    </div>
                </div>
              </div>
            )}
        </span>
    );
}

export default CadaMatCuradoria;