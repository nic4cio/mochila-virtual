import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox4";
    let materia = "Cálculo 4";
    let publicacoes = "10";
    let professor = "Fernando Espinoza";
    //let curadores = "";
    let assuntos = [
        "Integrais Múltiplas",
        "Cálculo Vetorial",
        "Equações Diferenciais Ordinárias (EDOs)",
        "Equações Diferenciais Parciais (EDPs)",
        "Séries de Fourier",
        "Transformada de Fourier",
        "Análise Complexa",
        "Métodos Numéricos",
        "Equações Diferenciais Parciais em Duas Dimensões",
        "Modelagem Matemática",
        "Otimização",
        "Equações Diferenciais Estocásticas",
        "Aplicações em Engenharia da Computação",
        "Equações de Diferenças e Transformada Z",
        "Introdução à Teoria do Controle"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
