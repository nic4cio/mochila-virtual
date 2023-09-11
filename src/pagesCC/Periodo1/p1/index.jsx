import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function P1() {

    let cor = "titleCardbox";
    let materia = "Programação 1";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Sintaxe Básica",
        "Estruturas de Controle",
        "Funções",
        "Tipos de Dados",
        "Arrays",
        "Ponteiros",
        "Estruturas e Uniões",
        "Entrada e Saída",
        "Alocação Dinâmica de Memória",
        "Manipulação de Strings",
        "Arquivos",
        "Bibliotecas Padrão",
        "Práticas de Codificação",
        "Depuração",
        "Projetos Práticos"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default P1;
