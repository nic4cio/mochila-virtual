import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function MicroAplicacoes() {

    let cor = "titleCardbox-sistemas-de-computacao";
    let materia = "Microcontroladores e Aplicações";
    let publicacoes = "10";
    let professor = "Erick Barboza";
    //let curadores = "";
    let assuntos = [
        "Introdução a Microcontroladores",
        "Arquitetura de Microcontroladores",
        "Programação de Microcontroladores",
        "Periféricos de Microcontroladores",
        "Comunicação Serial",
        "Interrupções e Temporização",
        "Memória de Programa e Dados",
        "Conversão Analógico-Digital (ADC)",
        "PWM (Modulação por largura de pulso)",
        "Interface com Sensores",
        "Sistemas de Controle Embarcados",
        "Microcontroladores em Eletrônica de Consumo",
        "Aplicações Automotivas",
        "Microcontroladores em Dispositivos Médicos",
        "Desenvolvimento de Projetos com Microcontroladores"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default MicroAplicacoes;
