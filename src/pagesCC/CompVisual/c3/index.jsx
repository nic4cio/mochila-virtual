import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo3() {

    let cor = "titleCardbox-computacao-visual";
    let materia = "Calculo 3";
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

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo3;
