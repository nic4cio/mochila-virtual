import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function NocoesDireito() {

    let cor = "titleCardbox7";
    let materia = "Noções de Direito";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Regras e Leis",
        "Justiça",
        "Igualdade perante a Lei",
        "Presunção de Inocência",
        "Devido Processo Legal",
        "Direitos Humanos",
        "Responsabilidade Civil e Criminal",
        "Contratos",
        "Propriedade",
        "Jurisprudência",
        "Órgãos Jurídicos",
        "Advogados e Juízes",
        "Princípio do Contraditório",
        "Prescrição",
        "Legislação e Poder Legislativo"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default NocoesDireito;
