import { useState } from 'react';

import Swal from 'sweetalert2';

import axios from 'axios';

import { updateContent, recusarContent } from '../../services/api.js'

import '../CadaMatCuradoria/style.css'

function CadaMatCuradoria (props) {
    const [isModalOpen, setModalOpen] = useState(false);

    const [valorSelecionado, setValorSelecionado] = useState("");
    const [valorSelecionado2, setValorSelecionado2] = useState("");
    const [valorSelecionado3, setValorSelecionado3] = useState("");

  // Manipulador de eventos para atualizar o estado quando uma opção for selecionada
    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    const handleChange2 = (event) => {
        setValorSelecionado2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValorSelecionado3(event.target.value);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal3 = () => {
        setModalOpen(false);
    };

    const closeModal = async () => {
        setModalOpen(false);

        const token = sessionStorage.getItem('access_token');

        if(1 + parseInt(valorSelecionado) + parseInt(valorSelecionado2) + parseInt(valorSelecionado3) >= 7){

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
        } else {

            try {
                await recusarContent(props.id, props.conteudoData, token);
            }catch (error) {
                console.error(error.response.data.message);
            }

            Swal.fire({
                title: 'Conteúdo Recusado!',
                icon: 'error',
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                location.reload();
                }
            });
        }
    };

    const closeModal2 = async () => {
        setModalOpen(false);
        //Enviar um email para o usuario
        const token = sessionStorage.getItem('access_token');

        try {
            await recusarContent(props.id, props.conteudoData, token);
        }catch (error) {
            console.error(error.response.data.message);
        }

        Swal.fire({
            title: 'Conteúdo Recusado!',
            icon: 'error',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
            location.reload();
            }
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
                  <div className="top" style={{ display: 'flex', justifyContent: 'space-between' }}>{props.descricao} <button onClick={closeModal3} className="fecharCuradoria">X</button></div>
                    <div style={{margin:'10px 20px 5px'}}> 
                        <iframe src={props.pdf} height={ 600 } className="pdfConteudo"></iframe>
                    </div>

                    <h3 style={{color:'black', margin:'0px 10px'}}>Avalie o Conteúdo ⬇ <h6 style={{marginTop:'10px'}}>Essa avaliação consiste em 3 critérios:</h6></h3>
                    <div style={{backgroundColor:'black', margin:'0px auto 0px 10px', padding:'5px 14px', borderRadius:'5px'}}>
                        <form>
                            <h4>Termos Éticos:</h4>
                            <label className='testandoNow'>
                                <input type="radio" id="opcao1" name="opcao" value="1" onChange={handleChange} checked={valorSelecionado === "1"}/>
                                <span className="custom-radio">1</span>
                            </label>
                                
                            <label className='testandoNow2'>
                                <input type="radio" id="opcao2" name="opcao" value="2" onChange={handleChange} checked={valorSelecionado === "2"}/>
                                <span className="custom-radio">2</span>
                            </label>

                            <label className='testandoNow3'>
                                <input type="radio" id="opcao3" name="opcao" value="3" onChange={handleChange} checked={valorSelecionado === "3"}/>
                                <span className="custom-radio">3</span>
                            </label>
                        </form>

                        <form >
                            <h4>Corretude <span style={{fontSize:'15px'}}>(matéria e título)</span>:</h4>
                            <label className='testandoNow'>
                                <input type="radio" id="opcao1" name="opcao" value="1" onChange={handleChange2} checked={valorSelecionado2 === "1"}/>
                                <span className="custom-radio">1</span>
                            </label>
                                
                            <label className='testandoNow2'>
                                <input type="radio" id="opcao2" name="opcao" value="2" onChange={handleChange2} checked={valorSelecionado2 === "2"}/>
                                <span className="custom-radio">2</span>
                            </label>

                            <label className='testandoNow3'>
                                <input type="radio" id="opcao3" name="opcao" value="3" onChange={handleChange2} checked={valorSelecionado2 === "3"}/>
                                <span className="custom-radio">3</span>
                            </label>
                        </form>

                        <form >
                            <h4>Qualidade Técnica:</h4>
                            <label className='testandoNow'>
                                <input type="radio" id="opcao1" name="opcao" value="1" onChange={handleChange3} checked={valorSelecionado3 === "1"}/>
                                <span className="custom-radio">1</span>
                            </label>
                                
                            <label className='testandoNow2'>
                                <input type="radio" id="opcao2" name="opcao" value="2" onChange={handleChange3} checked={valorSelecionado3 === "2"}/>
                                <span className="custom-radio">2</span>
                            </label>

                            <label className='testandoNow3'>
                                <input type="radio" id="opcao3" name="opcao" value="3" onChange={handleChange3} checked={valorSelecionado3 === "3"}/>
                                <span className="custom-radio">3</span>
                            </label>
                        </form>
                    </div>
                    <div>
                        <button onClick={closeModal} className="enviarCuradoria">Avaliar</button> <span style={{color:'black'}}>|</span>
                        <button onClick={closeModal2} className="recusarCuradoria">Recusar</button>
                    </div>    
                </div>
              </div>
            )}
        </span>
    );
}

export default CadaMatCuradoria;