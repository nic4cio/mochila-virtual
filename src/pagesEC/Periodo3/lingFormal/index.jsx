import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function LingFormal() {

    let cor = "titleCardbox3";
    let materia = "Linguagens Formais, Autômatos e Computibilidade";
    let publicacoes = "10";
    let professor = "Leandro Dias";
    //let curadores = "";
    let assuntos = [
        "Alfabetos e Linguagens",
        "Gramáticas Formais",
        "Expressões Regulares",
        "Autômatos Finitos",
        "Autômatos de Pilha",
        "Máquinas de Turing",
        "Linguagens Recursivas",
        "Decidibilidade e Indecidibilidade",
        "Hierarquia de Chomsky",
        "Teorema de Pumping Lemma",
        "Máquinas de Estado Finito e Reconhecimento de Padrões",
        "Compiladores e Interpretadores",
        "Autômatos em Processamento de Linguagem Natural",
        "Aplicações em Computação",
        "Problemas NP-Completos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default LingFormal;
