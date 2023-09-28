import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo2() {

    let cor = "titleCardbox2";
    let materia = "Cálculo 2";
    let publicacoes = "10";
    let professor = "Xu Yang";
    //let curadores = "";
    let assuntos = [
        "Integração Definida",
        "Técnicas de Integração",
        "Sequências e Séries Infinitas",
        "Cálculo Vetorial",
        "Geometria Analítica",
        "Equações Diferenciais Ordinárias (EDOs)",
        "Transformada de Laplace",
        "Sistemas de Coordenadas Curvilíneas",
        "Teoria das Séries de Fourier",
        "Integrais de Linha e Superfície",
        "Equações Diferenciais Parciais (EDPs)",
        "Análise Complexa",
        "Transformada de Fourier",
        "Cálculo Numérico",
        "Aplicações em Engenharia de Computação"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo2;
