import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Pdi() {

    let cor = "titleCardbox-computacao-visual";
    let materia = "Processamento de Imagem";
    let publicacoes = "10";
    let professor = "Tiago Vieira";
    //let curadores = "";
    let assuntos = [
        "Fundamentos de Processamento de Imagem",
        "Pré-processamento de Imagem",
        "Transformações Geométricas",
        "Segmentação de Imagem",
        "Extração de Características",
        "Morfologia Matemática",
        "Filtros de Imagem",
        "Correspondência de Imagens",
        "Transformada de Fourier e Espacial",
        "Detecção de Borda",
        "Reconhecimento de Padrões em Imagens",
        "Processamento de Imagem em Cores",
        "Processamento de Imagem em Tempo Real",
        "Visão Computacional",
        "Aplicações de Processamento de Imagem"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Pdi;
