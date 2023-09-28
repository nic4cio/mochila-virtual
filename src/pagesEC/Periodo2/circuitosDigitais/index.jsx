import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Circuitos() {

    let cor = "titleCardbox2";
    let materia = "Circuitos Digitais";
    let publicacoes = "10";
    let professor = "Almir Pereira";
    //let curadores = "";
    let assuntos = [
        "Álgebra Booleana",
        "Portas Lógicas",
        "Sistemas Numéricos",
        "Minimização de Circuitos",
        "Flip-Flops e Latches",
        "Registradores e Contadores",
        "Máquinas de Estados Finitos",
        "Memória Digital",
        "Arquitetura de Computadores",
        "Sistemas de Numeração Complementar",
        "Conversores Analógico-Digitais e Digitais-Analógicos",
        "Circuitos Combinacionais",
        "Memórias Cache",
        "Projeto de Circuitos Digitais",
        "Sistemas Integrados (Microcontroladores e FPGA)"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Circuitos;
