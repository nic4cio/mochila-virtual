import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Oac() {

    let cor = "titleCardbox2";
    let materia = "Organização e Arquitetura de computadores";
    let publicacoes = "10";
    let professor = "Rafael Amorim";
    //let curadores = "";
    let assuntos = [
        "Arquitetura de Software",
        "Padrões de Projeto (Design Patterns)",
        "Arquitetura em Camadas",
        "Model-View-Controller (MVC)",
        "Microsserviços",
        "Arquitetura Orientada a Serviços (SOA)",
        "Arquitetura de Pipeline",
        "Padrões de Comunicação",
        "Injeção de Dependência (DI)",
        "Arquitetura Monolítica",
        "Arquitetura de Software Escalável",
        "Refatoração de Software",
        "Padrões de Arquitetura de Segurança",
        "Arquitetura Orientada a Eventos (EDA)",
        "Arquitetura de Software Distribuído"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Oac;
