import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function RedesComp() {

    let cor = "titleCardbox3";
    let materia = "Redes de Computadores";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Topologias de Rede",
        "Protocolos de Rede",
        "Modelo OSI",
        "Arquiteturas de Rede",
        "Endereçamento IP",
        "Roteamento",
        "Switches e Roteadores",
        "Protocolos de Roteamento",
        "Redes Sem Fio",
        "Segurança de Rede",
        "Virtualização de Rede",
        "Redes de Área Local (LAN)",
        "Redes de Área Ampla (WAN)",
        "Redes de Data Center",
        "Monitoramento e Gerenciamento de Rede"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default RedesComp;
