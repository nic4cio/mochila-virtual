import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox8";
    let materia = "Sistemas de Controle 2";
    let publicacoes = "10";
    let professor = "Icaro Queiroz";
    //let curadores = "";
    let assuntos = [
        "Análise no Domínio do Espaço de Estados",
        "Projeto de Controladores em Espaço de Estados",
        "Realimentação de Estado Completo",
        "Análise de Resposta Transiente",
        "Projeto de Controladores Digitais",
        "Observabilidade e Controlabilidade",
        "Métodos de Projeto de Controladores Robustos",
        "Projeto de Controladores Não Lineares",
        "Controle Adaptativo",
        "Controle de Sistemas Multivariáveis",
        "Controle de Sistemas em Tempo Real",
        "Sistemas de Controle em Malha Fechada Não Lineares",
        "Controle Não Linear Avançado",
        "Controle de Sistemas MIMO (Múltiplas Entradas e Múltiplas Saídas)",
        "Aplicações Práticas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
