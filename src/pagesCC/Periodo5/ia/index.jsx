import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Ia() {

    let cor = "titleCardbox5";
    let materia = "Inteligência Artificial";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Aprendizado de Máquina (Machine Learning)",
        "Redes Neurais Artificiais",
        "Processamento de Linguagem Natural (PLN)",
        "Visão Computacional",
        "Robótica Inteligente",
        "Agentes Inteligentes",
        "Aprendizado Profundo (Deep Learning)",
        "Algoritmos de IA",
        "Ética em IA",
        "IA e Medicina",
        "IA e Automóveis Autônomos",
        "IA na Indústria",
        "IA na Educação",
        "IA na Finança",
        "Futuro da IA"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Ia;
