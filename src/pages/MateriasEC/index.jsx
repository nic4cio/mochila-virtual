import "../Estilo/Materias.css"
import Logo from "../../assets/pdslogo.svg"
import FontePoppins from '../../components/FontePoppins';
import Cabecalho from "../../components/Cabecalho";

const MateriasECjsx = () => {
  return (
    <div className="imageRegistros">
        <FontePoppins/>
        <Cabecalho/>

        <main>
            <div id="periodo-1">
                <div className="indicador-periodo">1°Período</div>

                <div className="scroll-container">
                    <button className="box">INGLÊS INSTRUMENTAL</button>
                    <button className="box">PROGRAMAÇÃO 1</button>
                    <button className="box">MATEMÁTICA DISCRETA</button>
                    <button className="box">CÁLCULO 1</button>
                    <button className="box">GEOMETRIA ANALÍTICA</button>
                    <button className="box">INTRO À ENG DA COMP</button>
                </div>
            </div>

            <br />

            <div id="periodo-2">
              <div className="indicador-periodo">2°Período</div>

              <div className="scroll-container">
                  <button className="box2">LÓGICA APLICADA À COMP</button>
                  <button className="box2">ESTRUTURA DE DADOS</button>
                  <button className="box2">FÍSICA 1</button> 
                  <button className="box2">CÁLCULO 2</button>
                  <button className="box2">ÁLGEBRA LINEAR</button>
                  <button className="box2">CIRCUITOS DIGITAIS</button>
                  <button className="box2">DESENHO</button>
              </div>
            </div>

            <br />
            
            <div id="periodo-3">
                <div className="indicador-periodo">3°Período</div>

                <div className="scroll-container">
                    <button className="box3">LING FORM, AUT E COMP</button>
                    <button className="box3">PROJETO DE SOFTWARE</button>
                    <button className="box3">FÍSICA 2</button>
                    <button className="box3">CÁLCULO 3</button>
                    <button className="box3">MET D PESQ E TRAB CIENT</button>
                    <button className="box3">SISTEMAS DIGITAIS</button>
                    <button className="box3">QUÍMICA TECNOLÓGICA</button>
                </div>
            </div>

            <br />

            <div id="periodo-4">
                <div className="indicador-periodo">4°Período</div>

                <div className="scroll-container">
                    <button className="box4">PROBAB E ESTATÍSTICA</button>
                    <button className="box4">ENG DE SOFTWARE</button>
                    <button className="box4">CÁLCULO 4</button>
                    <button className="box4">VARIÁVEIS COMPLEXAS</button>
                    <button className="box4">ORG E ARQ DE COMPUTADORES</button>
                    <button className="box4">FÍSICA EXPERIMENTAL 3</button>
                </div>
            </div>

            <br />

            <div id="periodo-5">
                <div className="indicador-periodo">5°Período</div>

                <div className="scroll-container">
                    <div className="box5">PAA</div>
                    <div className="box5">CIRCUITOS ELÉTRICOS</div>
                    <div className="box5">REDES DE COMPUTADORES</div>
                    <div className="box5">SINAIS E SISTEMAS</div>
                    <div className="box5">INTELIGÊNCIA ARTIFICIAL</div>
                    <div className="box5">SISTEMAS OPERACIONAIS</div>
                    <div className="box5">TEORIA DOS GRAFOS</div>
                </div>
            </div>

            <br />

            <div id="periodo-6">
                <div className="indicador-periodo">6°Período</div>

                <div className="scroll-container">
                    <button className="box6">PRINC DE COMUNICAÇÃO</button>
                    <button className="box6">ELETRÔNICA</button>
                    <button className="box6">MÉTODOS NUMÉRICOS</button>
                    <button className="box6">SISTEMAS DE CONTROLE 1</button>
                    <button className="box6">COMP SOCIEDADE E ÉTICA</button>
                    <button className="box6">EMPREENDEDORISMO</button>
                    <button className="box6">FENÔMENOS DE TRANSP</button>
                </div>
            </div>

            <br />

            <div id="periodo-7">
                <div className="indicador-periodo">7°Período</div>

                <div className="scroll-container">
                    <button className="box7">BANCOS DE DADOS</button>
                    <button className="box7">NOÇÕES DE DIREITO</button>
                    <button className="box7">SISTEMAS DE CONTROLE 2</button>
                    <button className="box7">MICROCONTROL E APLIC</button>
                    <button className="box7">INSTRUMENTAÇÃO ELET</button>
                    <button className="box7">PROC DIGITAL DE SINAIS</button>
                </div>
            </div>

            <br />

            <div id="periodo-8">
                <div className="indicador-periodo">8°Período</div>

                <div className="scroll-container">
                    <button className="box8">COMP GRÁF E PROC DE IM</button>
                    <button className="box8">SISTEMAS EMBARCADOS</button>
                    <button className="box8">SISTEMAS DISTRIBUÍDOS</button>
                    <button className="box8">AUTOMAÇÃO INDUSTRIAL</button>
                    <button className="box8">ROBÓTICA</button>
                    <button className="box8">MECÂNICA DOS SÓLIDOS</button>
                </div>
            </div>

            <br />

            <div id="eletivas-ec">
                <div className="indicador-periodo">Eletivas</div>

                <div className="scroll-container">
                    <button className="eletivas-ec">CLP</button>
                    <button className="eletivas-ec">SIST DE EVENT DISCRETOS</button>
                    <button className="eletivas-ec">COMPILADORES</button>
                    <button className="eletivas-ec">PARAD LING PROGRAM</button>
                    <button className="eletivas-ec">GERÊNCIA DE PROJETOS</button>
                    <button className="eletivas-ec">LAB DE PROGRAMAÇÃO</button>
                    <button className="eletivas-ec">FUND DE LIBRAS</button>
                    <button className="eletivas-ec">DES BASEADO ONTOL</button>
                    <button className="eletivas-ec">PROC DIGITAL SINAIS</button>
                    <button className="eletivas-ec">TÓP ESP CIRC ELÉT</button>
                    <button className="eletivas-ec">LAB ESTR DADOS</button>
                    <button className="eletivas-ec">TÓP SIST DISTRIB I</button>
                    <button className="eletivas-ec">LAB DE ELETRÔNICA</button>
                    <button className="eletivas-ec">LAB DE CIRC ELETR</button>
                    <button className="eletivas-ec">TÓP SIST DISTRIB II</button>
                    <button className="eletivas-ec">REDES DE PETRI</button>
                    <button className="eletivas-ec">INTROD TEORIA INFO</button>
                    <button className="eletivas-ec">IA 2</button>
                    <button className="eletivas-ec">DES C/ QT/C++</button>
                </div>
            </div>
        </main>

        <footer>Todos os direitos reservados</footer>

    </div>
  )
}

export default MateriasECjsx