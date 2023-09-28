import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Laboratório de Estrutura de Dados";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Implementação de Estruturas de Dados",
        "Manipulação de Dados",
        "Análise de Complexidade",
        "Ordenação e Pesquisa",
        "Uso de Bibliotecas",
        "Depuração e Teste",
        "Análise de Desempenho",
        "Estruturas de Dados Avançadas",
        "Aplicações Práticas",
        "Visualização de Estruturas de Dados",
        "Projetos de Algoritmos",
        "Colaboração em Equipe",
        "Documentação e Relatórios",
        "Desafios de Programação",
        "Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
