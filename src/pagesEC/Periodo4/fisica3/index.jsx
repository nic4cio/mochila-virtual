import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox4";
    let materia = "Física 3";
    let publicacoes = "10";
    let professor = "Marcos Vermelho";
    //let curadores = "";
    let assuntos = [
        "Eletromagnetismo",
        "Ondas Eletromagnéticas",
        "Óptica Geométrica",
        "Óptica Física",
        "Relatividade Especial",
        "Mecânica Quântica",
        "Modelos Atômicos",
        "Física de Partículas",
        "Núcleos e Reações Nucleares",
        "Física dos Semicondutores",
        "Física da Matéria Condensada",
        "Energia Nuclear e Fusão",
        "Cosmologia",
        "Física Computacional",
        "Aplicações em Tecnologia"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
