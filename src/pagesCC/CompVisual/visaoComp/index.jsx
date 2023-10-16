import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function VisaoComputacional() {

    let cor = "titleCardbox-computacao-visual";
    let materia = "Visão Computacional";
    let publicacoes = "10";
    let professor = "Tiago Vieira";
    //let curadores = "";
    let assuntos = [
        "Fundamentos de Processamento de Imagem",
        "Pré-processamento de Imagem",
        "Detecção de Borda",
        "Segmentação de Imagem",
        "Extração de Características",
        "Correspondência de Características",
        "Transformação Geométrica",
        "Rastreamento de Objetos",
        "Visão Estéreo e Disparidade",
        "Classificação de Objetos",
        "Detecção de Objetos",
        "Redes Neurais Convolutivas (CNNs)",
        "Visão Computacional 3D",
        "Aplicações de Visão Computacional",
        "Desafios Éticos em Visão Computacional"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default VisaoComputacional;
