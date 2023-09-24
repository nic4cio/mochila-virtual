import { useState } from 'react';

function CadaMatCuradoria (props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
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
                        <button onClick={closeModal} class="btn-aceitar-modal">T</button>
                        <button onClick={closeModal} class="btn-recusar-modal">F</button>
                    </div>
                </div>
              </div>
            )}
        </span>
    );
}

export default CadaMatCuradoria;