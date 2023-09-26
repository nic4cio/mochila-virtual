import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function TeoriaComp() {

    let cor = "titleCardbox4";
    let materia = "Teoria da Computação";
    let publicacoes = "10";
    let professor = "Fabio Paraguacu";
    //let curadores = "";
    let assuntos = [
        "Autômatos",
        "Linguagens Formais",
        "Hierarquia de Chomsky",
        "Problemas de Decisão",
        "Complexidade Computacional",
        "Teorema de Church-Turing",
        "Redutibilidade",
        "Máquinas Não-determinísticas",
        "Teoria da Computabilidade",
        "Teoria da Incompletude de Gödel",
        "Teoria da Informação",
        "Teoria da Prova",
        "Autômatos Celulares",
        "Teoria dos Jogos Computacionais",
        "Lógica Matemática"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default TeoriaComp;
