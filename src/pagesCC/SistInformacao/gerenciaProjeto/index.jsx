import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function GerenciaProjeto() {

    let cor = "titleCardbox-sistemas-de-informacao";
    let materia = "Gerência de Projeto";
    let publicacoes = "10";
    let professor = "Rafael Amorim";
    //let curadores = "";
    let assuntos = [
        "Introdução à Gerência de Projetos",
        "Ciclo de Vida de Projetos",
        "Estruturação do Projeto",
        "Planejamento do Projeto",
        "Avaliação de Riscos",
        "Gerenciamento de Recursos",
        "Monitoramento e Controle",
        "Comunicação e Relatórios",
        "Gestão de Qualidade",
        "Gestão de Mudanças",
        "Liderança e Equipe de Projeto",
        "Ferramentas de Gerenciamento de Projetos",
        "Ética em Gerência de Projetos",
        "Projetos Globais e Virtuais",
        "Casos de Estudo e Práticas Melhores"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default GerenciaProjeto;
