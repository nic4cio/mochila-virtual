import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function IntroEng() {

    let cor = "titleCardbox";
    let materia = "Introdução à Engenharia da Computação";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default IntroEng;
