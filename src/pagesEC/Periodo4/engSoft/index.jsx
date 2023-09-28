import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox4";
    let materia = "Engenharia de Software";
    let publicacoes = "10";
    let professor = "Arturo Dominguez";
    //let curadores = "";
    let assuntos = [
        "Introdução à Engenharia de Software",
        "Processos de Desenvolvimento de Software",
        "Requisitos de Software",
        "Projeto de Software",
        "Implementação de Software",
        "Teste de Software",
        "Gerenciamento de Configuração de Software",
        "Qualidade de Software",
        "Engenharia de Software Orientada a Objetos",
        "Desenvolvimento Ágil",
        "Documentação de Software",
        "Gerenciamento de Projetos de Software",
        "Segurança de Software",
        "Manutenção e Evolução de Software",
        "Desenvolvimento de Software em Equipe"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
