import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function Ihm() {

    let cor = "titleCardbox-sistemas-de-informacao";
    let materia = "Interação homem-máquina";
    let publicacoes = "10";
    let professor = "Fabio Paraguacu";
    //let curadores = "";
    let assuntos = [
        "Fundamentos da Segurança de Sistemas",
        "Políticas de Segurança",
        "Criptografia",
        "Autenticação e Autorização",
        "Firewalls e IDS/IPS",
        "Vulnerabilidades e Exploits",
        "Gestão de Identidade e Acesso",
        "Segurança de Redes",
        "Segurança em Sistemas Operacionais",
        "Segurança em Aplicações Web",
        "Segurança em Dispositivos Móveis",
        "Gestão de Incidentes de Segurança",
        "Conformidade e Regulamentações",
        "Segurança em Nuvem",
        "Tendências em Segurança"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default Ihm;
