import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Tópicos em Sistemas Distribuídos: Algoritmos Distribuídos I";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Modelos de Computação Distribuída",
        "Comunicação em Redes Distribuídas",
        "Coordenação Distribuída",
        "Consenso Distribuído",
        "Distribuição de Dados",
        "Detecção de Falhas",
        "Tolerância a Falhas",
        "Algoritmos de Roteamento",
        "Algoritmos de Distribuição de Recursos",
        "Segurança em Sistemas Distribuídos",
        "Sistemas de Mensagens Assíncronas",
        "Protocolos de Consistência",
        "Virtualização e Contêineres",
        "Escalabilidade e Desempenho",
        "Aplicações de Algoritmos Distribuídos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
