import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Sistemas de Controle 1";
    let publicacoes = "10";
    let professor = "Thiago Damasceno";
    //let curadores = "";
    let assuntos = [
        "Introdução aos Sistemas de Controle",
        "Modelagem de Sistemas Dinâmicos",
        "Resposta no Domínio do Tempo",
        "Análise de Estabilidade",
        "Controladores e Compensadores",
        "Resposta em Frequência",
        "Técnicas de Projeto de Controladores",
        "Sistemas de Controle em Malha Aberta e Malha Fechada",
        "Controle de Sistemas de Tempo Contínuo e Tempo Discreto",
        "Controladores Digitais",
        "Análise de Resposta Transiente",
        "Controladores de Lugar das Raízes",
        "Controle de Sistemas Múltiplos",
        "Sistemas de Controle em Tempo Real",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
