import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Empreendedorismo";
    let publicacoes = "10";
    let professor = "Olivial Freitas";
    //let curadores = "";
    let assuntos = [
        "Conceitos Básicos de Empreendedorismo",
        "Desenvolvimento de Ideias",
        "Plano de Negócios",
        "Finanças para Empreendedores",
        "Marketing e Estratégia",
        "Gestão de Recursos Humanos",
        "Inovação e Tecnologia",
        "Aspectos Jurídicos e Regulatórios",
        "Financiamento e Captação de Recursos",
        "Networking e Desenvolvimento de Parcerias",
        "Mentoria e Aconselhamento",
        "Gerenciamento de Riscos",
        "Ética nos Negócios",
        "Estratégias de Crescimento",
        "Casos de Estudo e Experiência Prática"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
