import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Eletrônica";
    let publicacoes = "10";
    let professor = "João Martins";
    //let curadores = "";
    let assuntos = [
        "Introdução à Eletrônica",
        "Componentes Eletrônicos",
        "Amplificadores",
        "Transistores",
        "Circuitos de Bias",
        "Amplificadores de Áudio",
        "Amplificadores de RF",
        "Osciladores",
        "Fontes de Alimentação",
        "Amplificadores de Instrumentação",
        "Eletrônica Digital",
        "Conversão Analógico-Digital",
        "Circuitos Integrados",
        "Amplificadores Operacionais",
        "Microeletrônica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
