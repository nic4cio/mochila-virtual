import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox8";
    let materia = "Automação Industrial";
    let publicacoes = "10";
    let professor = "João Raphael";
    //let curadores = "";
    let assuntos = [
        "Sensores e Atuadores",
        "Controle de Processos",
        "PLCs (Controladores Lógicos Programáveis)",
        "Redes Industriais",
        "Sistemas SCADA (Supervisory Control and Data Acquisition)",
        "Robótica Industrial",
        "Instrumentação Industrial",
        "Sistemas de Visão",
        "Integração de Sistemas",
        "Segurança Industrial",
        "Manutenção Preditiva",
        "Eficiência Energética",
        "Indústria 4.0 e IIoT (Internet Industrial das Coisas)",
        "Padrões e Normas Industriais",
        "Aplicações Específicas"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
