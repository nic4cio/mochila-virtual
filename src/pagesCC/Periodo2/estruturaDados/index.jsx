import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function EstruturaDados() {

    let cor = "titleCardbox2";
    let materia = "Estrutura de Dados";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Arrays",
        "Listas Ligadas",
        "Pilhas (Stacks)",
        "Filas (Queues)",
        "Árvores",
        "Árvores Binárias",
        "Árvores Balanceadas",
        "Grafos",
        "Tabelas Hash",
        "Listas Duplamente Ligadas",
        "Heaps",
        "Grafos Direcionados",
        "Fila de Prioridade",
        "Árvores B",
        "Grafos Ponderados"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default EstruturaDados;
