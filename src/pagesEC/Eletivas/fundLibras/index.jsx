import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Fundamentos de Libras";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "História e Evolução da Libras",
        "Estrutura Linguística",
        "Alfabeto Manual",
        "Sinais Básicos",
        "Expressões Faciais e Movimentos Corporais",
        "Gramática de Libras",
        "Compreensão Contextual",
        "Variações Regionais",
        "Cultura Surda",
        "Acessibilidade e Inclusão",
        "Interpretação em Libras",
        "Legislação e Direitos",
        "Tecnologia e Recursos de Apoio",
        "Educação em Libras",
        "Desafios e Barreiras"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
