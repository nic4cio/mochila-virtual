import { useState, useEffect } from 'react';
import { getContent } from "../../services/api";

import CadaMatCuradoria from '../CadaMatCuradoria';

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
                    <CadaMatCuradoria key={index} titulo={conteudoData.titulo} descricao={conteudoData.descricao} pdf={conteudoData.pdf} cont={console.log(cont++)}/>
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