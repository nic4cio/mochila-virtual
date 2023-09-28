import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Introdução a Teoria da Informação";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Conceitos Básicos de Informação",
        "Entropia",
        "Códigos de Huffman",
        "Teoria da Codificação",
        "Canal de Comunicação",
        "Taxa de Transmissão e Eficiência de Codificação",
        "Teorema da Codificação de Canal",
        "Compressão de Dados",
        "Teoria da Informação e Criptografia",
        "Aplicações Práticas",
        "Teoria da Informação e Machine Learning",
        "Teoria da Informação e Redes de Computadores",
        "Teoria da Informação Quântica",
        "Teoria da Informação e Redes Sociais",
        "Aplicações em Inteligência Artificial"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
