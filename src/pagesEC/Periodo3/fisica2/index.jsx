import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Fisica2() {

    let cor = "titleCardbox3";
    let materia = "Física 2";
    let publicacoes = "10";
    let professor = "Maria Socorro";
    //let curadores = "";
    let assuntos = [
        "Eletrostática",
        "Lei de Gauss",
        "Capacitores",
        "Corrente Elétrica",
        "Circuitos de Corrente Contínua",
        "Campos Magnéticos",
        "Lei de Ampère",
        "Indução Eletromagnética",
        "Circuitos de Corrente Alternada",
        "Ondas Eletromagnéticas",
        "Óptica Geométrica",
        "Óptica Física",
        "Termodinâmica",
        "Ondas Sonoras e Acústica",
        "Física Moderna"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Fisica2;
