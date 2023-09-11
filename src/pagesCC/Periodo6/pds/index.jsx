import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Pds() {

    let cor = "titleCardbox6";
    let materia = "Projeto e Desenvolvimento de Sistemas";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Requisitos de Software",
        "Arquitetura de Software",
        "Modelagem de Dados",
        "Linguagem de Programação",
        "Design de Interface de Usuário (UI/UX)",
        "Desenvolvimento de Código",
        "Teste de Software",
        "Controle de Versão e Gerenciamento de Código",
        "Ciclo de Desenvolvimento de Software",
        "Documentação de Software",
        "Segurança de Software",
        "Testes de Aceitação do Usuário (UAT)",
        "Implantação e Integração",
        "Manutenção de Software",
        "Gerenciamento de Projeto de Software"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Pds;
