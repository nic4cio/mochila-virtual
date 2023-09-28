import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos II";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Escalonamento de Transações Distribuídas",
        "Distribuição de Conteúdo em Redes Peer-to-Peer (P2P)",
        "Computação em Nuvem e Orquestração de Contêineres",
        "Sistemas de Armazenamento Distribuído",
        "Bases de Dados Distribuídas NoSQL",
        "Tolerância a Partições de Rede",
        "Consistência em Escala",
        "Distribuição de Dados Geograficamente Distribuídos",
        "Sistemas de Blockchain e Contratos Inteligentes",
        "Redes de Sensores sem Fio",
        "Sistemas Distribuídos em Tempo Real",
        "Aplicações de Machine Learning Distribuído",
        "Sistemas de Rastreamento e Gerenciamento de Recursos",
        "Sistemas de Recomendação Distribuídos",
        "Aplicações em IoT (Internet das Coisas)"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
