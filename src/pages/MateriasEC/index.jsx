import "../Estilo/Materias.css"
import Logo from "../../assets/pdslogo.svg"
import FontePoppins from '../../components/FontePoppins';
import Cabecalho from "../../components/Cabecalho";

import { Link } from 'react-router-dom';

const MateriasEC = () => {

    window.scrollTo(0, 0); //Reinicia o scroll

  return (
    <div className="imageRegistros">
        <FontePoppins/>
        <Cabecalho home="" materias="menuaSpanRegistros" curador="" entrar="" registrar=""/>

        <main>
            <div id="periodo-1">
                <div className="indicador-periodo">1°Período</div>

                <div className="scroll-container">
                    <Link to=""><button className="box">INGLÊS INSTRUMENTAL</button></Link>
                    <Link to="/materias/programacao1"><button className="box">PROGRAMAÇÃO 1</button></Link>
                    <Link to="/materias/matematoca-discreta"><button className="box">MATEMÁTICA DISCRETA</button></Link>
                    <Link to=""><button className="box">CÁLCULO 1</button></Link>
                    <Link to="/materias/geometria-analitica"><button className="box">GEOMETRIA ANALÍTICA</button></Link>
                    <Link to=""><button className="box">INTRO À ENG DA COMP</button></Link>
                </div>
            </div>

            <br />

            <div id="periodo-2">
              <div className="indicador-periodo">2°Período</div>

              <div className="scroll-container">
                  <Link to="/materias/logica-computacao"><button className="box2">LÓGICA APLICADA À COMP</button></Link>
                  <Link to="/materias/estrutura-dados"><button className="box2">ESTRUTURA DE DADOS</button></Link>
                  <Link to=""><button className="box2">FÍSICA 1</button></Link>
                  <Link to=""><button className="box2">CÁLCULO 2</button></Link>
                  <Link to="/materias/algebra-linear"><button className="box2">ÁLGEBRA LINEAR</button></Link>
                  <Link to=""><button className="box2">CIRCUITOS DIGITAIS</button></Link>
                  <Link to=""><button className="box2">DESENHO</button></Link>
              </div>
            </div>

            <br />
            
            <div id="periodo-3">
                <div className="indicador-periodo">3°Período</div>

                <div className="scroll-container">
                    <Link to=""><button className="box3">LING FORM, AUT E COMP</button></Link>
                    <Link to="/materias/programacao2"><button className="box3">PROJETO DE SOFTWARE</button></Link>
                    <Link to=""><button className="box3">FÍSICA 2</button></Link>
                    <Link to="/materias/c3"><button className="box3">CÁLCULO 3</button></Link>
                    <Link to="/materias/metodologia-pesquisa"><button className="box3">MET D PESQ E TRAB CIENT</button></Link>
                    <Link to="/materias/sistemas-digitais"><button className="box3">SISTEMAS DIGITAIS</button></Link>
                    <Link to=""><button className="box3">QUÍMICA TECNOLÓGICA</button></Link>
                </div>
            </div>

            <br />

            <div id="periodo-4">
                <div className="indicador-periodo">4°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/probabilidade-estatistica"><button className="box4">PROBAB E ESTATÍSTICA</button></Link>
                    <Link to=""><button className="box4">ENG DE SOFTWARE</button></Link>
                    <Link to=""><button className="box4">CÁLCULO 4</button></Link>
                    <Link to=""><button className="box4">VARIÁVEIS COMPLEXAS</button></Link>
                    <Link to="/materias/oac"><button className="box4">OAC</button></Link>
                    <Link to=""><button className="box4">FÍSICA EXPERIMENTAL 3</button></Link>
                </div>
            </div>

            <br />

            <div id="periodo-5">
                <div className="indicador-periodo">5°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/paa"><div className="box5">PAA</div></Link>
                    <Link to=""><div className="box5">CIRCUITOS ELÉTRICOS</div></Link>
                    <Link to="/materias/redes-computadores"><div className="box5">REDES DE COMPUTADORES</div></Link>
                    <Link to=""><div className="box5">SINAIS E SISTEMAS</div></Link>
                    <Link to="/materias/inteligencia-artificial"><div className="box5">INTELIGÊNCIA ARTIFICIAL</div></Link>
                    <Link to="/materias/sistemas-operacionais"><div className="box5">SISTEMAS OPERACIONAIS</div></Link>
                    <Link to="/materias/grafos"><div className="box5">TEORIA DOS GRAFOS</div></Link>
                </div>
            </div>

            <br />

            <div id="periodo-6">
                <div className="indicador-periodo">6°Período</div>

                <div className="scroll-container">
                    <Link to=""><button className="box6">PRINC DE COMUNICAÇÃO</button></Link>
                    <Link to=""><button className="box6">ELETRÔNICA</button></Link>
                    <Link to=""><button className="box6">MÉTODOS NUMÉRICOS</button></Link>
                    <Link to=""><button className="box6">SISTEMAS DE CONTROLE 1</button></Link>
                    <Link to="/materias/cse"><button className="box6">COMP SOCIEDADE E ÉTICA</button></Link>
                    <Link to=""><button className="box6">EMPREENDEDORISMO</button></Link>
                    <Link to=""><button className="box6">FENÔMENOS DE TRANSP</button></Link>
                </div>
            </div>

            <br />

            <div id="periodo-7">
                <div className="indicador-periodo">7°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/banco-dados"><button className="box7">BANCOS DE DADOS</button></Link>
                    <Link to="/materias/nocoes-direito"><button className="box7">NOÇÕES DE DIREITO</button></Link>
                    <Link to=""><button className="box7">SISTEMAS DE CONTROLE 2</button></Link>
                    <Link to="/materias/microcontroladores"><button className="box7">MICROCONTROL E APLIC</button></Link>
                    <Link to=""><button className="box7">INSTRUMENTAÇÃO ELET</button></Link>
                    <Link to="/materias/pdi"><button className="box7">PROC DIGITAL DE SINAIS</button></Link>
                </div>
            </div>

            <br />

            <div id="periodo-8">
                <div className="indicador-periodo">8°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/computacao-grafica"><button className="box8">COMP GRÁF E PROC DE IM</button></Link>
                    <Link to="/materias/sistemas-embarcados"><button className="box8">SISTEMAS EMBARCADOS</button></Link>
                    <Link to="/materias/sistemas-distribuidos"><button className="box8">SISTEMAS DISTRIBUÍDOS</button></Link>
                    <Link to=""><button className="box8">AUTOMAÇÃO INDUSTRIAL</button></Link>
                    <Link to=""><button className="box8">ROBÓTICA</button></Link>
                    <Link to=""><button className="box8">MECÂNICA DOS SÓLIDOS</button></Link>
                </div>
            </div>

            <br />

            <div id="eletivas-ec">
                <div className="indicador-periodo">Eletivas</div>

                <div className="scroll-container">
                    <Link to="/materias/clp"><button className="eletivas-ec">CLP</button></Link>
                    <Link to=""><button className="eletivas-ec">SIST DE EVENT DISCRETOS</button></Link>
                    <Link to="/materias/compiladores"><button className="eletivas-ec">COMPILADORES</button></Link>
                    <Link to=""><button className="eletivas-ec">PARAD LING PROGRAM</button></Link>
                    <Link to="/materias/gerencia-projeto"><button className="eletivas-ec">GERÊNCIA DE PROJETOS</button></Link>
                    <Link to=""><button className="eletivas-ec">LAB DE PROGRAMAÇÃO</button></Link>
                    <Link to=""><button className="eletivas-ec">FUND DE LIBRAS</button></Link>
                    <Link to=""><button className="eletivas-ec">DES BASEADO ONTOL</button></Link>
                    <Link to=""><button className="eletivas-ec">PROC DIGITAL SINAIS</button></Link>
                    <Link to=""><button className="eletivas-ec">TÓP ESP CIRC ELÉT</button></Link>
                    <Link to=""><button className="eletivas-ec">LAB ESTR DADOS</button></Link>
                    <Link to=""><button className="eletivas-ec">TÓP SIST DISTRIB I</button></Link>
                    <Link to=""><button className="eletivas-ec">LAB DE ELETRÔNICA</button></Link>
                    <Link to=""><button className="eletivas-ec">LAB DE CIRC ELETR</button></Link>
                    <Link to=""><button className="eletivas-ec">TÓP SIST DISTRIB II</button></Link>
                    <Link to=""><button className="eletivas-ec">REDES DE PETRI</button></Link>
                    <Link to=""><button className="eletivas-ec">INTROD TEORIA INFO</button></Link>
                    <Link to=""><button className="eletivas-ec">IA 2</button></Link>
                    <Link to=""><button className="eletivas-ec">DES C/ QT/C++</button></Link>
                </div>
            </div>
        </main>

        <footer>Todos os direitos reservados</footer>

    </div>
  )
}

export default MateriasEC