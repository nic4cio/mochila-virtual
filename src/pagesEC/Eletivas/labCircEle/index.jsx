import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Laboratório de Circuitos Eletrônicos";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Montagem de Circuitos",
        "Medições Elétricas",
        "Análise de Circuitos",
        "Amplificadores",
        "Circuitos Digitais",
        "Fontes de Alimentação",
        "Amostragem e Digitalização",
        "Osciladores e Temporizadores",
        "Comunicação de Dados",
        "Projeto de Projetos de Eletrônica",
        "Resolução de Problemas e Depuração",
        "Segurança em Eletrônica",
        "Documentação e Relatórios",
        "Integração com Software",
        "Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
