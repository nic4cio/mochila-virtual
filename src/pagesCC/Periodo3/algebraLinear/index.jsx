import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function AlgebraLinear() {

    let cor = "titleCardbox3";
    let materia = "Álgebra Linear";
    let publicacoes = "10";
    let professor = "Libel Fonseca";
    //let curadores = "";
    let assuntos = [
        "Vetores",
        "Espaços Vetoriais",
        "Operações Vetoriais",
        "Independência Linear",
        "Base e Dimensão",
        "Transformações Lineares",
        "Matrizes",
        "Espaço Nulo e Espaço Coluna",
        "Sistemas de Equações Lineares",
        "Determinantes",
        "Autovalores e Autovetores",
        "Diagonalização",
        "Espaços Ortogonais",
        "Decomposição QR",
        "Álgebra Linear Numérica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default AlgebraLinear;
