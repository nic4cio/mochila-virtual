import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox7";
    let materia = "Instrumentação Eletrônica";
    let publicacoes = "10";
    let professor = "Tiago Almeida";
    //let curadores = "";
    let assuntos = [
        "Sensores e Transdutores",
        "Amplificação de Sinais",
        "Conversão Analógico-Digital (ADC)",
        "Conversão Digital-Analógica (DAC)",
        "Filtros e Filtragem",
        "Teoria de Erros de Medição",
        "Sistemas de Aquisição de Dados",
        "Interfaces e Comunicação",
        "Telemetria e Comunicação sem Fio",
        "Automação e Controle",
        "Instrumentação Virtual",
        "Calibração de Instrumentos",
        "Aplicações Práticas",
        "Segurança em Instrumentação",
        "Projeto de Sistemas de Medição"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
