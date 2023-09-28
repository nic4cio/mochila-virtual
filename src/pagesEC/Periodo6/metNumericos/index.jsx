import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Métodos Numéricos";
    let publicacoes = "10";
    let professor = "Thales Vieira";
    //let curadores = "";
    let assuntos = [
        "Erro de Aritmética de Ponto Flutuante",
        "Métodos de Solução de Equações Não Lineares",
        "Interpolação e Aproximação",
        "Integração Numérica",
        "Diferenciação Numérica",
        "Resolução Numérica de Sistemas Lineares",
        "Método de Mínimos Quadrados",
        "Solução Numérica de Equações Diferenciais Ordinárias (EDOs)",
        "Equações Diferenciais Parciais (EDPs)",
        "Análise de Estabilidade e Convergência",
        "Aplicações em Engenharia da Computação",
        "Programação Numérica",
        "Software e Ferramentas Numéricas",
        "Análise de Erro e Incerteza",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
