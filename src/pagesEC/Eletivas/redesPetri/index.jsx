import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Redes de Petri";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Elementos Fundamentais",
        "Modelagem de Sistemas",
        "Semântica",
        "Propriedades de Sistemas",
        "Redes de Petri Coloridas",
        "Análise de Desempenho",
        "Verificação de Software",
        "Controle de Sistemas",
        "Redes de Petri Temporizadas",
        "Ferramentas de Modelagem",
        "Aplicações em Protocolos de Comunicação",
        "Aplicações em Sistemas Embarcados",
        "Aplicações em Sistemas de Produção",
        "Aplicações em Sistemas de Transporte",
        "Aplicações em Biologia e Química"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
