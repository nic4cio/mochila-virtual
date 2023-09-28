import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Fisica1() {

    let cor = "titleCardbox3";
    let materia = "Física 1";
    let publicacoes = "10";
    let professor = "Osvaldo Rosso";
    //let curadores = "";
    let assuntos = [
        "Cinemática",
        "Dinâmica",
        "Leis de Conservação",
        "Trabalho e Energia",
        "Impulso e Colisões",
        "Rotação e Momento Angular",
        "Gravitação Universal",
        "Fluidos",
        "Ondas e Som",
        "Óptica",
        "Eletricidade e Magnetismo",
        "Circuitos Elétricos",
        "Campo Elétrico e Campo Magnético",
        "Eletromagnetismo",
        "Termodinâmica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Fisica1;
