import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function ProbEst() {

    let cor = "titleCardbox3";
    let materia = "Probabilidade e Estatística";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Probabilidade",
        "Variáveis Aleatórias",
        "Distribuição de Probabilidade",
        "Distribuições de Probabilidade Comuns",
        "Teorema do Limite Central",
        "Amostragem e Estimação",
        "Intervalos de Confiança",
        "Testes de Hipóteses",
        "Correlação e Regressão",
        "Estatísticas Descritivas",
        "Amostragem Aleatória Simples",
        "Experimentos Aleatórios",
        "Análise de Séries Temporais",
        "Estatística Bayesiana",
        "Aplicações em Ciência e Indústria"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default ProbEst;
