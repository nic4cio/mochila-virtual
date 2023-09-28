import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Laboratório de Programação";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Exercícios de Sintaxe",
        "Estruturas de Dados Básicas",
        "Algoritmos e Resolução de Problemas",
        "Projeto de Aplicações Simples",
        "Uso de Bibliotecas e Frameworks",
        "Programação Orientada a Objetos (POO)",
        "Tratamento de Erros",
        "Programação Multithread e Concorrência",
        "Interfaces Gráficas de Usuário (GUIs)",
        "Programação de Redes",
        "Teste e Depuração",
        "Segurança de Software",
        "Desenvolvimento Colaborativo",
        "Documentação e Relatórios",
        "Competições de Programação"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
