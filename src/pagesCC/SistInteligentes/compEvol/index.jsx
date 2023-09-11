import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function compEvol() {

    let cor = "titleCardbox-sistemas-inteligentes";
    let materia = "Computação Evolucionária";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Introdução à Computação Evolucionária",
        "Algoritmos Genéticos",
        "Programação Genética",
        "Estratégias Evolucionárias",
        "Evolução Diferencial",
        "Algoritmos Evolucionários Multiobjetivo",
        "Algoritmos Evolucionários Paralelos",
        "Aprendizado de Máquina Evolucionário",
        "Otimização de Hiperparâmetros",
        "Aplicações Práticas",
        "Algoritmos Evolucionários em Jogos e Simulações",
        "Evolução de Redes Neurais Artificiais",
        "Computação Quântica e Evolucionária",
        "Teoria da Computação Evolucionária",
        "Tendências em Computação Evolucionária"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default compEvol;
