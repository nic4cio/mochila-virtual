import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Inteligência Artificial 2";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Aprendizado Profundo (Deep Learning)",
        "Redes Neurais Convolucionais (CNNs)",
        "Redes Neurais Recorrentes (RNNs)",
        "Redes Generativas Adversariais (GANs)",
        "Processamento de Linguagem Natural Avançado",
        "Reforço (Reinforcement Learning)",
        "Aprendizado Profundo em Jogos",
        "Ética em IA:",
        "IA Explicável e Interpretabilidade",
        "Aprendizado Federado e Privacidade em IA",
        "Robótica Autônoma",
        "Sistemas Multiagentes",
        "IA e Saúde",
        "IA e Visão Computacional Avançada",
        "IA em Empresas e Aplicações Empresariais"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
