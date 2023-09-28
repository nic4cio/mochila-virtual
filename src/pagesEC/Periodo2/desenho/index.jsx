import CadaDisciplina from "../../../components/CadaDisciplina"

function Desenho() {

    let cor = "titleCardbox2";
    let materia = "Desenho";
    let publicacoes = "10";
    let professor = "Danielle Lamenha";
    //let curadores = "";
    let assuntos = [
        "Diagramas de Circuitos",
        "Esquemas Elétricos",
        "Diagramas de Blocos",
        "Desenho Assistido por Computador (CAD)",
        "Diagramas de Fluxo",
        "Diagramas UML (Unified Modeling Language)",
        "Desenhos de Placas de Circuito Impresso (PCB)",
        "Desenho Técnico",
        "Modelagem 3D",
        "Documentação de Projetos",
        "Gráficos e Visualização de Dados",
        "Prototipagem Rápida",
        "Realidade Virtual e Aumentada",
        "Desenho de Interfaces de Usuário",
        "Representação Gráfica de Algoritmos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Desenho;
