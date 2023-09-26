import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Compiladores() {

    let cor = "titleCardbox5";
    let materia = "Compiladores";
    let publicacoes = "10";
    let professor = "Arturo Dominguez";
    //let curadores = "";
    let assuntos = [
        "Fases do Compilador",
        "Análise Léxica",
        "Análise Sintática",
        "Análise Semântica",
        "Tabela de Símbolos",
        "Geração de Código Intermediário",
        "Otimização de Código",
        "Geração de Código de Máquina",
        "Compiladores vs. Interpretadores",
        "Linguagens de Programação",
        "Bibliotecas e APIs",
        "Depuração",
        "Compiladores Just-in-Time (JIT)",
        "Compiladores de Linguagem de Montagem",
        "Compiladores de Alto Desempenho"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Compiladores;
