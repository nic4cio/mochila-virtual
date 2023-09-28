import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function InglêsInstrumental() {

    let cor = "titleCardbox";
    let materia = "Inglês Instrumental";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Programação em Inglês",
        "Algoritmos e Estruturas de Dados",
        "Redes de Computadores",
        "Banco de Dados",
        "Sistemas Operacionais",
        "Desenvolvimento Web",
        "Engenharia de Software",
        "Inteligência Artificial e Aprendizado de Máquina",
        "Segurança da Informação",
        "Internet das Coisas (IoT)",
        "Arquitetura de Computadores",
        "Desenvolvimento de Aplicativos Móveis",
        "Engenharia de Software Embarcado",
        "Cloud Computing",
        "Robótica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default InglêsInstrumental;
