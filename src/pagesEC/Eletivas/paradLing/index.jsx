import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Paradigmas de Linguagem de Programação";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Programação Procedural",
        "Programação Orientada a Objetos (POO)",
        "Programação Funcional",
        "Programação Declarativa",
        "Programação Lógica",
        "Programação Estruturada",
        "Programação Orientada a Eventos",
        "Programação Concorrente e Paralela",
        "Programação Genérica",
        "Programação Orientada a Aspectos (AOP)",
        "Programação Reativa",
        "Programação Baseada em Regras",
        "Programação Orientada a Serviços (SOA - Service-Oriented Architecture)",
        "Programação Orientada a Protocolo (gRPC, REST)",
        "Programação Baseada em Componentes"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
