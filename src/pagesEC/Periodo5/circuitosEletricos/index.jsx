import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox5";
    let materia = "Circuitos Elétricos";
    let publicacoes = "10";
    let professor = "Davi Bibiano";
    //let curadores = "";
    let assuntos = [
        "Lei de Ohm",
        "Análise de Circuitos DC",
        "Elementos de Circuitos",
        "Teoremas de Circuitos",
        "Análise de Circuitos AC",
        "Circuitos RLC",
        "Transformada de Laplace",
        "Sistemas Trifásicos",
        "Transientes e Resposta em Frequência",
        "Amplificadores Operacionais",
        "Teoria de Redes de Duas Portas",
        "Circuitos Digitais",
        "Análise de Circuitos em Estado Estacionário",
        "Aplicações em Eletrônica",
        "Simulação de Circuitos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
