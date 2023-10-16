import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function RedesNeurais() {

    let cor = "titleCardbox-computacao-visual";
    let materia = "Redes Neurais e Aprendizado Profundo";
    let publicacoes = "10";
    let professor = "Tiago Vieira";
    //let curadores = "";
    let assuntos = [
        "Introdução às Redes Neurais",
        "Perceptrons e Redes Neurais Feedforward",
        "Funções de Ativação",
        "Treinamento de Redes Neurais",
        "Redes Neurais Convolucionais (CNNs)",
        "Redes Neurais Recorrentes (RNNs)",
        "Arquiteturas de RNN",
        "Redes Neurais Profundas",
        "Transfer Learning",
        "Redes Generativas Adversariais (GANs)",
        "Autoencoders",
        "Processamento de Linguagem Natural (NLP)",
        "Redes Neurais Recorrentes para NLP",
        "Frameworks de Deep Learning",
        "Ética e Interpretabilidade"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default RedesNeurais;
