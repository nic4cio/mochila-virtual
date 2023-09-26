import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Clp() {

    let cor = "titleCardbox-sistemas-de-informacao";
    let materia = "CLP";
    let publicacoes = "10";
    let professor = "Rafael Amorim";
    //let curadores = "";
    let assuntos = [
        "Introdução às Linguagens de Programação",
        "Sintaxe e Semântica",
        "Tipos de Dados",
        "Variáveis e Constantes",
        "Estruturas de Controle",
        "Funções e Procedimentos",
        "Escopo de Variáveis",
        "Recursão",
        "Programação Orientada a Objetos",
        "Manipulação de Exceções",
        "Programação Funcional",
        "Paradigmas de Linguagens de Programação",
        "Compilação vs. Interpretação",
        "Gerenciamento de Memória",
        "Linguagens de Programação Populares"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Clp;
