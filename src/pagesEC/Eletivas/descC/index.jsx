import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Calculo1() {

    let cor = "titleCardeletivas-ec";
    let materia = "Desenvolvimento com QT/C++";
    let publicacoes = "10";
    let professor = "Nenhum";
    //let curadores = "";
    let assuntos = [
        "Introdução ao Qt",
        "Configuração do Ambiente de Desenvolvimento",
        "Conceitos Básicos do Qt",
        "Desenvolvimento de Interfaces Gráficas de Usuário (GUI)",
        "Widgets Qt",
        "Tratamento de Eventos e Interação do Usuário",
        "Gerenciamento de Layout",
        "Acesso a Dados e Comunicação",
        "Personalização de Estilos e Temas",
        "Internacionalização e Localização",
        "Gráficos e Renderização 2D",
        "Desenvolvimento Multiplataforma",
        "Testes e Depuração",
        "Integração com Outras Tecnologias",
        "Desenvolvimento de Aplicativos Móveis"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Calculo1;
