import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function MetodPesquisa() {

    let cor = "titleCardbox7";
    let materia = "Metodologia de Pesquisa";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Formulação do Problema de Pesquisa",
        "Revisão da Literatura",
        "Definição de Objetivos e Hipóteses",
        "Seleção de Método de Pesquisa",
        "Coleta de Dados",
        "Amostragem",
        "Procedimentos de Coleta de Dados",
        "Análise de Dados",
        "Validade e Confiabilidade",
        "Interpretação dos Resultados",
        "Discussão",
        "Conclusões",
        "Limitações do Estudo",
        "Ética na Pesquisa",
        "Divulgação e Publicação"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default MetodPesquisa;
