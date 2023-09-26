import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function MatDiscreta() {

    let cor = "titleCardbox";
    let materia = "Matemática Discreta";
    let publicacoes = "10";
    let professor = "Bruno Pimentel";
    //let curadores = "";
    let assuntos = [
        "Teoria dos Conjuntos",
        "Relações",
        "Funções",
        "Álgebra Booleana",
        "Teoria dos Números",
        "Relações",
        "Congruência Linear",
        "Métodos de provas",
        "Teorema Chinês do Resto",
        "Teorema de Fermat",
        "Introdução a Criptografia",
        "Teoria dos Conjuntos Finitos",
        "Álgebra de Boole e Circuitos Lógicos",
        "Teoria dos Números Criptográficos",
        "Probabilidade Discreta"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default MatDiscreta;
