import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function SistDistribuidos() {

    let cor = "titleCardbox-sistemas-de-informacao";
    let materia = "Sistemas Distribuídos";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Introdução a Sistemas Distribuídos",
        "Comunicação em Redes",
        "Coordenação e Consistência",
        "Modelos de Concorrência",
        "Tolerância a Falhas",
        "Segurança em Sistemas Distribuídos",
        "Algoritmos de Consenso",
        "Distribuição de Dados",
        "Middleware e Plataformas Distribuídas",
        "Virtualização de Recursos",
        "Arquiteturas de Sistemas Distribuídos",
        "Cloud Computing",
        "IoT (Internet das Coisas)",
        "Aplicações de Sistemas Distribuídos",
        "Tendências em Sistemas Distribuídos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default SistDistribuidos;
