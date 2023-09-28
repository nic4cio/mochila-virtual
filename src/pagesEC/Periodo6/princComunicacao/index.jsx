import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Princípios de Comunicação";
    let publicacoes = "10";
    let professor = "Jobson Araújo";
    //let curadores = "";
    let assuntos = [
        "Sinais e Sistemas de Comunicação",
        "Modulação",
        "Demodulação",
        "Canais de Comunicação",
        "Codificação de Canal",
        "Multiplexação",
        "Espectro e Banda Passante",
        "Comunicação Digital",
        "Sistemas de Comunicação sem Fio",
        "Redes de Comunicação",
        "Comunicação de Dados",
        "Compressão de Dados",
        "Padrões de Comunicação",
        "Comunicação por Fibra Óptica",
        "Segurança de Comunicação"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
