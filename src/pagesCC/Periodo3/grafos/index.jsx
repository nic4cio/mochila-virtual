import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Grafos() {

    let cor = "titleCardbox3";
    let materia = "Teoria dos Grafos";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Limites e Continuidade",
        "Derivadas e Regras de derivação",
        "Aplicações de Derivada",
        "Teorema do Valor médio e Rolle",
        "Regra de L'Hôpital",
        "Aplicações",
        "Definição da Integral Definida",
        "Propriedades da Integral Definida",
        "Teorema Fundamental do Cálculo",
        "Regras de Integração",
        "Aplicações da Integral Definida",
        "Cálculo de Áreas e Volumes",
        "Integral Imprópria",
        "Séries e Sequências",
        "Equações Diferenciais"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Grafos;
