import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Desenvolvimento Baseado em Ontologias";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Introdução às Ontologias",
        "Linguagens de Ontologia",
        "Modelagem Ontológica",
        "Ontologias e a Web Semântica",
        "Repositórios de Ontologias",
        "Raciocínio com Ontologias",
        "Alinhamento de Ontologias",
        "Aplicações de Ontologias",
        "Engenharia de Conhecimento",
        "Ontologias e Aprendizado de Máquina",
        "Padrões e Ferramentas Ontológicas",
        "Avaliação de Ontologias",
        "Desenvolvimento de Aplicações Baseadas em Ontologias",
        "Ontologias e Inteligência Artificial",
        "Ética e Privacidade em Ontologias"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
