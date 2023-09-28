import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox4";
    let materia = "Variáveis Complexas";
    let publicacoes = "10";
    let professor = "Jobson Nascimento";
    //let curadores = "";
    let assuntos = [
        "Números Complexos",
        "Funções Complexas",
        "Limites e Continuidade",
        "Derivadas Complexas",
        "Integração Complexa",
        "Teorema Residual",
        "Séries de Laurent e Singularidades",
        "Teorema de Liouville",
        "Teoria de Funções de Função Única",
        "Teorema de Resíduos em Aplicações",
        "Transformadas Integrais Complexas",
        "Aplicações em Engenharia e Física",
        "Funções Analíticas",
        "Teorema do Valor Médio de Poisson",
        "Teoria de Residência"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
