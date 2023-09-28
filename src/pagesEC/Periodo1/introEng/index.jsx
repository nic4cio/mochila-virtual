import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function IntroEng() {

    let cor = "titleCardbox";
    let materia = "Introdução à Engenharia da Computação";
    let publicacoes = "10";
    let professor = "Thiago Cordeiro";
    //let curadores = "";
    let assuntos = [
        "História da Computação",
        "Arquitetura de Computadores",
        "Fundamentos de Programação",
        "Sistemas Operacionais",
        "Redes de Computadores",
        "Algoritmos e Estruturas de Dados",
        "Engenharia de Software",
        "Inteligência Artificial",
        "Segurança da Informação",
        "Desenvolvimento de Projetos em Equipe",
        "Ética e Responsabilidade Social",
        "Tendências Tecnológicas",
        "Empreendedorismo em Tecnologia",
        "Robótica",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default IntroEng;
