import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function GeometriaAnalitica() {

    let cor = "titleCardbox2";
    let materia = "Geometria Analítica";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Sistemas de Coordenadas",
        "Pontos, Linhas e Planos",
        "Distância e Comprimento de Segmentos de Reta",
        "Equações de Retas",
        "Ângulos e Inclinações",
        "Circunferências",
        "Parábolas, Elipses e Hipérboles",
        "Translação e Rotação",
        "Sistemas de Equações Lineares",
        "Vetores no Plano e no Espaço",
        "Produto Escalar e Produto Vetorial",
        "Plano Cartesiano Tridimensional",
        "Geometria Analítica em Coordenadas Polares",
        "Interseção de Curvas",
        "Aplicações em Física e Engenharia"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default GeometriaAnalitica;
