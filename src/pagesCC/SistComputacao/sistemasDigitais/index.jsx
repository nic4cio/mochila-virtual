import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function SistemasDigitais() {

    let cor = "titleCardbox-sistemas-de-computacao";
    let materia = "Sistemas Digitais";
    let publicacoes = "10";
    let professor = "Bruno Nogueira";
    //let curadores = "";
    let assuntos = [
        "Álgebra de Boole",
        "Portas Lógicas",
        "Sistemas de Numeração",
        "Circuitos Combinacionais",
        "Multiplexadores e Demultiplexadores",
        "Decodificadores e Codificadores",
        "Flip-Flops e Registradores",
        "Contadores e Temporizadores",
        "Sistemas de Lógica Programável",
        "Memória Digital",
        "Sistemas de Clock e Sincronização",
        "Projeto de Circuitos Digitais",
        "Arquitetura de Processadores",
        "Microcontroladores",
        "Sistemas Digitais em FPGA"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default SistemasDigitais;
