import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardbox6";
    let materia = "Fenômenos de Transporte";
    let publicacoes = "10";
    let professor = "Andressa Oliveira";
    //let curadores = "";
    let assuntos = [
        "Transferência de Calor",
        "Transferência de Massa",
        "Mecânica dos Fluidos",
        "Escoamento de Fluidos",
        "Troca de Calor em Fluidos",
        "Máquinas Térmicas",
        "Fenômenos de Transporte em Computação",
        "Transferência de Calor em Dispositivos Eletrônicos",
        "Transferência de Massa em Processamento de Sinais",
        "Aplicações em Engenharia da Computação",
        "Experimentação e Laboratório",
        "Aplicações na Indústria",
        "Aplicações na Energia",
        "Sustentabilidade e Meio Ambiente",
        "Aplicações de Simulação"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
