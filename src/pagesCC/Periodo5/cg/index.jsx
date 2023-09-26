import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Cg() {

    let cor = "titleCardbox5";
    let materia = "Computação Gráfica";
    let publicacoes = "10";
    let professor = "Marcelo Oliveira";
    //let curadores = "";
    let assuntos = [
        "Rasterização e Vetorização",
        "Modelagem 3D",
        "Renderização",
        "Texturização",
        "Animação",
        "Realidade Virtual (VR) e Realidade Aumentada (AR)",
        "Gráficos de Jogos",
        "Simulação",
        "Visualização de Dados",
        "Edição de Imagens",
        "Técnicas de Pintura Digital",
        "Computação Gráfica em Medicina",
        "Computação Gráfica em Design Industrial",
        "Computação Gráfica em Animação por Computador (CGI)",
        "Tendências em Computação Gráfica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Cg;
