import { useState, useEffect } from 'react';
import { getContent } from "../../services/api";

function MatCuradoria(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const openSecondModal = () => {
        setSecondModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const closeSecondModal = () => {
        setSecondModalOpen(false);
    };

    const [banco, setBanco] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await getContent(); 
            setBanco(response.data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData(); 
    }, []);

    let cont = 0;
    return (
        <div style={{margin:'5px'}}>
            <span className={"fundo-materia-2 " + props.cor}>{props.materia}</span>
          
            <div className="scroll-container-curadoria">
                {
                  banco.map((conteudoData, index) => (conteudoData.materia == props.materia &&
                    <button onClick={openModal} className="box-curadoria" key={index}>
                        <span style={{fontSize:'20px'}}>{conteudoData.titulo}</span><br />
                        <div style={{margin:'10px 10px 0px 10px'}}>{conteudoData.descricao}</div><br />
                        <button className='btn-aceitar'>T</button>
                        <button className='btn-rejeitar'>F</button>
                        {cont++}
                    </button>
                  ))
                }
                {
                  (cont == 0 && <span style={{marginLeft: '30px'}}>Sem conteúdos. Você está atualizado! </span>)
                }
            </div>
        </div>
    );
}

export default MatCuradoria;