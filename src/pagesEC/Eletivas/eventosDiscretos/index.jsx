import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Sistemas de Evento Discretos";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Modelagem de Eventos Discretos",
        "Simulação de Sistemas de Eventos Discretos",
        "Redes de Petri",
        "Lógica de Temporal",
        "Controle de Sistemas de Eventos Discretos",
        "Análise de Desempenho",
        "Modelos de Filas",
        "Aplicações Industriais",
        "Protocolos de Comunicação",
        "Aplicações em Transporte e Logística",
        "Engenharia de Tráfego",
        "Aplicações em Saúde",
        "Segurança e Confiabilidade",
        "Aplicações em Jogos e Entretenimento",
        "Aplicações em Sistemas Distribuídos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
