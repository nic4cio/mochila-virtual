import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Paa() {

    let cor = "titleCardbox4";
    let materia = "PAA";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Análise de Complexidade",
        "Algoritmos de Ordenação",
        "Algoritmos de Busca",
        "Algoritmos de Grafos",
        "Algoritmos de Programação Dinâmica",
        "Algoritmos de Fluxo Máximo",
        "Algoritmos de Geometria Computacional",
        "Algoritmos Greedy",
        "Algoritmos de Correspondência",
        "Algoritmos de Compressão de Dados",
        "Algoritmos de Aproximação",
        "Algoritmos em Cadeias de Caracteres",
        "Algoritmos Distribuídos",
        "Algoritmos Paralelos",
        "Problemas NP-Completos e Teoria da Complexidade"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Paa;
