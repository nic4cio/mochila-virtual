import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Laboratório de Eletrônica";
    let publicacoes = "10";
    let professor = "João Raphael";
    //let curadores = "";
    let assuntos = [
        "Montagem de Circuitos Eletrônicos",
        "Instrumentação",
        "Leis de Kirchhoff e Análise de Circuitos",
        "Amplificadores",
        "Filtros Eletrônicos",
        "Circuitos Digitais",
        "Fontes de Alimentação",
        "Amostragem e Digitalização",
        "Comunicações Eletrônicas",
        "Robótica e Controle",
        "Projeto de Projetos de Eletrônica",
        "Segurança e Normas",
        "Documentação e Relatórios",
        "Simulação e Prototipagem",
        "Integração de Microcontroladores"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
