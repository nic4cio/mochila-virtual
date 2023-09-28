import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox8";
    let materia = "Mecânica dos Sólidos";
    let publicacoes = "10";
    let professor = "Andressa Oliveira";
    //let curadores = "";
    let assuntos = [
        "Introdução à Mecânica dos Sólidos",
        "Tensão e Deformação",
        "Lei de Hooke",
        "Cisalhamento e Flexão",
        "Torque e Tensão de Torção",
        "Critérios de Falha",
        "Análise de Vigas e Pórticos",
        "Deflexões e Deformações Axiais",
        "Elementos Finitos",
        "Análise de Tensões Termomecânicas",
        "Análise de Fadiga",
        "Comportamento Não Linear",
        "Análise de Tensões Tridimensionais",
        "Elementos de Máquina e Projeto de Estruturas",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
