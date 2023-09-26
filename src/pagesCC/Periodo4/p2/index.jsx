import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function P2() {

    let cor = "titleCardbox4";
    let materia = "Programação 2";
    let publicacoes = "10";
    let professor = "Mario Hozano";
    //let curadores = "";
    let assuntos = [
        "Padrões de Projeto (Design Patterns)",
        "Arquiteturas de Software",
        "Desenvolvimento Orientado a Objetos (OOD)",
        "Testes de Software",
        "Gerenciamento de Configuração",
        "Documentação de Software",
        "Desenvolvimento Ágil",
        "Controle de Qualidade de Código",
        "Integração Contínua e Desdobramento Contínuo (CI/CD)",
        "Gestão de Equipe de Desenvolvimento",
        "Desenvolvimento de Interfaces de Programação de Aplicativos (APIs)",
        "Desenvolvimento de Aplicações Web e Móveis",
        "Segurança de Software",
        "Usabilidade e Experiência do Usuário (UX/UI)",
        "Empacotamento e Distribuição de Software"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default P2;
