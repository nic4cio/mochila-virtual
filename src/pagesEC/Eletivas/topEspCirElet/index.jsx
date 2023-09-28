import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Tópicos Especiais em Circuitos Elétricos";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Circuitos Elétricos de Alta Frequência",
        "Eletrônica de Potência",
        "Circuitos Integrados Analógicos",
        "Dispositivos Semicondutores de Potência",
        "Circuitos Resonantes e Osciladores",
        "Circuitos Bioeletrônicos",
        "Circuitos em Nanoescala",
        "Circuitos para Comunicações Ópticas",
        "Projeto de Circuitos Integrados",
        "Circuitos para Eletrônica de Consumo",
        "Circuitos para Automação e Controle Industrial",
        "Circuitos para Eletrônica Embarcada",
        "Circuitos para Telecomunicações",
        "Circuitos de RF (Radiofrequência)",
        "Circuitos para Sistemas de Controle de Potência"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
