import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Grafos() {

    let cor = "titleCardbox3";
    let materia = "Teoria dos Grafos";
    let publicacoes = "10";
    let professor = "Rian Pinheiro";
    //let curadores = "";
    let assuntos = [
        "Grafos e Subgrafos",
        "Grafos Dirigidos",
        "Grafos Não-dirigidos",
        "Grafos Ponderados",
        "Grafos Conexos e Desconexos",
        "Árvores e Florestas",
        "Grafos Bipartidos",
        "Caminhos e Ciclos",
        "Grafos Eulerianos e Hamiltonianos",
        "Matriz de Adjacência e Lista de Adjacência",
        "Algoritmos de Busca",
        "Algoritmos de Caminho Mínimo",
        "Algoritmos de Fluxo Máximo",
        "Grafos Planos",
        "Aplicações em Redes Sociais"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Grafos;
