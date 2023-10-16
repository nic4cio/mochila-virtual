import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function AprendMaquina() {

    let cor = "titleCardbox-computacao-visual";
    let materia = "Aprendizagem de Máquina";
    let publicacoes = "10";
    let professor = "Aydano Machado";
    //let curadores = "";
    let assuntos = [
        "Introdução ao Aprendizado de Máquina",
        "Pré-processamento de Dados",
        "Aprendizado Supervisionado",
        "Algoritmos de Classificação",
        "Algoritmos de Regressão",
        "Aprendizado Não Supervisionado",
        "Algoritmos de Agrupamento",
        "Redução de Dimensionalidade",
        "Aprendizado por Reforço",
        "Redes Neurais Artificiais",
        "Frameworks de Aprendizado de Máquina",
        "Avaliação de Modelos",
        "Seleção de Recursos",
        "Ética e Viés em Aprendizado de Máquina",
        "Aplicações do Aprendizado de Máquina"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default AprendMaquina;
