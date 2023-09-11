import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function sistemasEmbarcados() {

    let cor = "titleCardbox-sistemas-de-computacao";
    let materia = "Sistemas Embarcados";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Introdução a Sistemas Embarcados",
        "Microcontroladores",
        "Arquitetura de Computadores Embarcados",
        "Programação de Baixo Nível",
        "Sistemas Operacionais Embarcados",
        "Periféricos e Interfaces",
        "Comunicação sem Fio",
        "Economia de Energia",
        "Desenvolvimento de Firmware",
        "Segurança em Sistemas Embarcados",
        "Depuração e Testes",
        "Design de Sistemas Embarcados",
        "Sistemas Embarcados em Tempo Real",
        "Sistemas Embarcados em Automóveis",
        "Tendências em Sistemas Embarcados"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default sistemasEmbarcados;
