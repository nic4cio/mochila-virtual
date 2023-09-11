import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function SistOperacional() {

    let cor = "titleCardbox5";
    let materia = "Sistemas Operacionais";
    let publicacoes = "10";
    let professor = "N sei";
    //let curadores = "";
    let assuntos = [
        "Funções Básicas do SO",
        "Multi tarefa",
        "Multi Processamento",
        "Interface com o Usuário",
        "Gerenciamento de Arquivos",
        "Segurança e Controle de Acesso",
        "Sistemas de Arquivos",
        "Gestão de Memória",
        "Sistemas de Arquivos Distribuídos",
        "Rede e Comunicação",
        "Inicialização do Sistema",
        "Desempenho e Otimização",
        "Manutenção e Atualizações",
        "Sistemas Operacionais Móveis",
        "Virtualização"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default SistOperacional;
