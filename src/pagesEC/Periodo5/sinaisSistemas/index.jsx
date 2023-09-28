import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox5";
    let materia = "Sinais e Sistemas";
    let publicacoes = "10";
    let professor = "Tiago Almeida";
    //let curadores = "";
    let assuntos = [
        "Introdução a Sinais e Sistemas",
        "Amostragem e Reconstrução",
        "Operações Básicas em Sinais",
        "Séries e Transformadas de Fourier",
        "Transformada de Laplace",
        "Análise de Sistemas LTI",
        "Convolução",
        "Amostragem de Sinais Contínuos",
        "Transformada Z",
        "Análise de Sinais no Domínio da Frequência",
        "Filtros Digitais",
        "Sistemas Discretos e Contínuos",
        "Análise de Sinais de Tempo Real",
        "Aplicações em Processamento de Áudio e Imagem",
        "Aplicações em Comunicações"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
