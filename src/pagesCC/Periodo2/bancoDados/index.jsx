import CadaDisciplina from "../../../components/CadaDisciplina/index.jsx"

function BancoDados() {

    let cor = "titleCardbox2";
    let materia = "Banco de Dados";
    let publicacoes = "10";
    let professor = "Maria Cristina";
    //let curadores = "";
    let assuntos = [
        "Modelo de Dados",
        "SQL (Structured Query Language)",
        "Sistemas de Gerenciamento de Banco de Dados (DBMS)",
        "Normalização",
        "Chave Primária e Chave Estrangeira",
        "Índices",
        "Transações",
        "NoSQL Databases",
        "Replicação de Dados",
        "Sharding",
        "Banco de Dados em Memória",
        "Backup e Recuperação",
        "Segurança de Banco de Dados",
        "Modelagem de Dados",
        "Big Data"
    ];

    window.scrollTo(0, 0); //Reinicia o scroll

    return(
        <CadaDisciplina materia={materia} professor={professor} publicacoes={publicacoes} cor={cor} assuntos={assuntos}/>
    );
}

export default BancoDados;
