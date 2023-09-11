import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function CienciaDados() {

    let cor = "titleCardbox-sistemas-inteligentes";
    let materia = "Ciência de Dados";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Introdução à Ciência de Dados",
        "Coleta de Dados",
        "Limpeza e Pré-processamento de Dados",
        "Análise Exploratória de Dados (EDA)",
        "Estatística",
        "Aprendizado de Máquina (Machine Learning)",
        "Big Data",
        "Processamento de Linguagem Natural (NLP)",
        "Aprendizado Profundo (Deep Learning)",
        "Mineração de Dados",
        "Visualização de Dados",
        "Modelagem Preditiva",
        "Ética e Privacidade de Dados",
        "Deploy de Modelos",
        "Casos de Uso em Ciência de Dados"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default CienciaDados;
