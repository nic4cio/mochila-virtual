import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Cse() {

    let cor = "titleCardbox";
    let materia = "Computação, Sociedade e Ética";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Privacidade de Dados",
        "Ética na Inteligência Artificial (IA)",
        "Vigilância Digital",
        "Cibersegurança e Hacking Ético",
        "Responsabilidade em TI",
        "Desigualdades Digitais",
        "Neutralidade da Rede",
        "Ética em Big Data",
        "Propriedade Intelectual e Direitos Autorais",
        "Ética em Pesquisa em Computação",
        "Inteligência Artificial e Emprego",
        "Ética em Jogos e Entretenimento Digital",
        "Ética em Redes Sociais",
        "Acesso Universal à Tecnologia",
        "Ética no Desenvolvimento de Software"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Cse;
