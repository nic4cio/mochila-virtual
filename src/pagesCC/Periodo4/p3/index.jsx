import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function P3() {

    let cor = "titleCardbox4";
    let materia = "Programação 3";
    let publicacoes = "10";
    let professor = "Ranilson Paiva";
    //let curadores = "";
    let assuntos = [
        "Frameworks de Desenvolvimento Web",
        "Desenvolvimento de Aplicações de Uma Página (SPA)",
        "APIs RESTful",
        "Gerenciamento de Estado no Front-End",
        "Desenvolvimento de Aplicativos Web Progressivos (PWAs)",
        "Segurança em Aplicações Web",
        "Banco de Dados no Back-End",
        "Autenticação e Autorização",
        "Desenvolvimento Full-Stack",
        "Arquitetura de Microsserviços",
        "Desenvolvimento Responsivo",
        "Testes Automatizados",
        "Hospedagem e Implantação",
        "Controle de Versão Avançado",
        "Desenvolvimento de Aplicações Web em Tempo Real"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default P3;
