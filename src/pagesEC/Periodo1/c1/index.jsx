import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox";
    let materia = "Cálculo 1";
    let publicacoes = "10";
    let professor = "Xu Yang";
    //let curadores = "";
    let assuntos = [
        "Funções e Gráficos",
        "Limites e Continuidade",
        "Derivadas",
        "Aplicações de Derivadas",
        "Integrais Definidas",
        "Técnicas de Integração",
        "Aplicações de Integrais",
        "Funções Trigonométricas",
        "Sequências e Séries",
        "Teorema do Valor Médio e Teorema do Valor Extremo",
        "Integração Numérica",
        "Equações Diferenciais",
        "Modelagem Matemática",
        "Aplicações em Engenharia de Computação",
        "Laboratórios e Exercícios Práticos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
