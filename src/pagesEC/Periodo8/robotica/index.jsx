import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox8";
    let materia = "Robótica";
    let publicacoes = "10";
    let professor = "Icaro Queiroz";
    //let curadores = "";
    let assuntos = [
        "Cinemática de Robôs",
        "Dinâmica de Robôs",
        "Sensores em Robótica",
        "Atuadores em Robótica",
        "Programação de Robôs",
        "Visão Computacional em Robótica",
        "Aprendizado de Máquina em Robótica",
        "Controle de Robôs Móveis",
        "Robótica Colaborativa",
        "Robótica Autônoma",
        "Robótica Industrial",
        "Robótica Médica",
        "Robótica de Serviço",
        "Ética e Robótica",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
