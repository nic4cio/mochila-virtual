import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Fgpa() {

    let cor = "titleCardbox-sistemas-de-computacao";
    let materia = "Fgpa";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Introdução aos FPGAs",
        "Linguagens de Descrição de Hardware (HDLs)",
        "Arquitetura de FPGA",
        "Síntese Lógica",
        "Implementação e Roteamento",
        "Circuitos Lógicos Programáveis",
        "IP Cores (Intellectual Property Cores)",
        "Design Reconfigurável",
        "Processadores Embutidos em FPGAs",
        "Interfaceamento com Periféricos",
        "Sistemas Embarcados com FPGAs",
        "FPGA em Aplicações de Comunicação",
        "FPGA em Processamento de Sinal",
        "FPGA em Computação de Alto Desempenho (HPC)",
        "Tendências em FPGA"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Fgpa;
