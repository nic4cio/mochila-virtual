import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function LogicaComputacao() {

    let cor = "titleCardbox";
    let materia = "Lógica para Computação";
    let publicacoes = "10";
    let professor = "Fabio Paraguacu";
    //let curadores = "";
    let assuntos = [
        "Lógica Proposicional",
        "Lógica de Primeira Ordem",
        "Tabelas-Verdade",
        "Leis da Lógica",
        "Demonstrações Lógicas",
        "Álgebra Booleana",
        "Sintaxe e Semântica Lógica",
        "Raciocínio Dedutivo e Indutivo",
        "Resolução de Problemas Lógicos",
        "Lógica de Programação",
        "Teorema de Gödel",
        "Lógica Temporal",
        "Lógica Modal",
        "Linguagens Formais",
        "Aplicações em Inteligência Artificial"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default LogicaComputacao;
