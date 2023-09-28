import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Quimica() {

    let cor = "titleCardbox3";
    let materia = "Química Tecnológica";
    let publicacoes = "10";
    let professor = "Ricardo Porto";
    //let curadores = "";
    let assuntos = [
        "Estrutura Atômica e Tabela Periódica",
        "Ligações Químicas",
        "Estequiometria",
        "Termoquímica",
        "Cinética Química",
        "Equilíbrio Químico",
        "Soluções e Concentrações",
        "Eletroquímica",
        "Química dos Materiais",
        "Polímeros",
        "Química dos Semicondutores",
        "Materiais Magnéticos",
        "Nanotecnologia",
        "Química Verde",
        "Química Analítica"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Quimica;
