import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox7";
    let materia = "Processamento Digital de Sinais";
    let publicacoes = "10";
    let professor = "Jobson Nascimento";
    //let curadores = "";
    let assuntos = [
        "Sinais e Sistemas",
        "Amostragem e Reconstrução de Sinais",
        "Transformada de Fourier",
        "Transformada Z",
        "Filtros Digitais",
        "Transformada de Laplace Discreta",
        "Processamento de Sinais de Voz",
        "Processamento de Sinais de Imagem",
        "Compressão de Sinais",
        "Análise Espectral",
        "Processamento de Sinais Biomédicos",
        "Aplicações em Telecomunicações",
        "Processamento de Sinais Multimídia",
        "Processamento de Sinais em Tempo Real",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
