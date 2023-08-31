import "../Estilo/Materias.css"
import Logo2 from "../../assets/pdslogo.svg"
import FontePoppins from '../../components/FontePoppins';
import Cabecalho from "../../components/Cabecalho";

import { Link } from 'react-router-dom';
import Disciplinas from "../Disciplinas/index.jsx" 

const MateriasCC = () => {

    window.scrollTo(0, 0); //Reinicia o scroll

  return (
    
    <div className="imageRegistros">
        <FontePoppins/>
        <Cabecalho home="" materias="menuaSpanRegistros" curador="" entrar="" registrar=""/>
        
        <main>
            <div id="periodo-1">
                <div className="indicador-periodo">1°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/programacao1"><button className="box">PROGRAMAÇÃO 1</button></Link>
                    <Link to="/materias/logica-computacao"><button className="box">LÓGICA PARA COMP</button></Link>
                    <Link to="/materias/cse"><button className="box">COMP SOC E ÉTICA</button></Link>
                    <Link to="/materias/matematoca-discreta"><button className="box">MATEMÁTICA DISCRETA</button></Link>
                    <Link to="/materias/cdi"><button className="box">CÁLCULO DIF E INT</button></Link>
                </div>
            </div>

            <div id="periodo-2">
                <div className="indicador-periodo">2°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/estrutura-dados"><button className="box2">ESTRUTURA DE DADOS</button></Link>
                    <Link to="/materias/banco-dados"><button className="box2">BANCO DE DADOS</button></Link>
                    <Link to="/materias/oac"><button className="box2">ORG E ARQ DE COMP</button></Link>
                    <Link to="/materias/geometria-analitica"><button className="box2">GEOMETRIA ANALÍTICA</button></Link>
                </div>
            </div>
            
            <div id="periodo-3">
                <div className="indicador-periodo">3°Período</div>

                <div className="scroll-container">
                    <button className="box3">REDES DE COMP</button>
                    <button className="box3">TEORIA DOS GRAFOS</button>
                    <button className="box3">PROB E ESTAT</button>
                    <button className="box3">ÁLGEBRA LINEAR</button>
                </div>
            </div>

            <div id="periodo-4">
                <div className="indicador-periodo">4°Período</div>

                <div className="scroll-container">
                    <button className="box4">PROGRAMAÇÃO 2</button>
                    <button className="box4">PROGRAMAÇÃO 3</button>
                    <Link to={Disciplinas}><button className="box4">PAA</button></Link>
                    <button className="box4">TEORIA DA COMP</button>
                </div>
            </div>

            <div id="periodo-5">
                <div className="indicador-periodo">5°Período</div>

                <div className="scroll-container">
                    <div className="box5">SIST OPERACIONAIS</div>
                    <div className="box5">COMPILADORES</div>
                    <div className="box5">IA</div>
                    <div className="box5">COMPUTAÇÃO GRÁFICA</div>
                </div>
            </div>

            <div id="periodo-6">
                <div className="indicador-periodo">6°Período</div>

                <div className="scroll-container">
                    <button className="box6">PDS</button>
                </div>
            </div>

            <div id="periodo-7">
                <div className="indicador-periodo">7°Período</div>

                <div className="scroll-container">
                    <button className="box7">METOD DE PESQUISA</button>
                    <button className="box7">NOÇÕES DE DIREITO</button>
                </div>
            </div>

            <div id="enfase-computacao-visual">
                <div className="indicador-periodo">Computação Visual</div>

                <div className="scroll-container">
                    <button className="box-computacao-visual">CÁLCULO 3</button>
                    <button className="box-computacao-visual">APRENDIZAGEM DE MÁQ</button>
                    <button className="box-computacao-visual">REDES NEU E APRED PROF</button>
                    <button className="box-computacao-visual">PDI</button>
                    <button className="box-computacao-visual">VISÃO COMPUTACIONAL</button>
                </div>
            </div>
            
            <div id="enfase-sistemas-inteligentes">
                <div className="indicador-periodo">Sistemas Inteligentes</div>

                <div className="scroll-container">
                    <button className="box-sistemas-inteligentes">CÁLCULO 3</button>
                    <button className="box-sistemas-inteligentes">APRENDIZAGEM DE MÁQ</button>
                    <button className="box-sistemas-inteligentes">REDES NEU E APRED PROF</button>
                    <button className="box-sistemas-inteligentes">COMP EVOLUCIONÁRIA</button>
                    <button className="box-sistemas-inteligentes">CIÊNCIA DE DADOS</button>
                </div>
            </div>
            
            <div id="enfase-sistemas-de-computacao">
                <div className="indicador-periodo">Sistemas de Computação</div>

                <div className="scroll-container">
                    <button className="box-sistemas-de-computacao">CÁLCULO 3</button>
                    <button className="box-sistemas-de-computacao">SISTEMAS DIGITAIS</button>
                    <button className="box-sistemas-de-computacao">FPGA</button>
                    <button className="box-sistemas-de-computacao">SISTEMAS EMBARCADOS</button>
                    <button className="box-sistemas-de-computacao">MICROC E APLICAÇÕES</button>
                </div>
            </div>
            
            <div id="enfase-sistemas-de-informacao">
                <div className="indicador-periodo">Sistemas de Informação</div>

                <div className="scroll-container">
                    <button className="box-sistemas-de-informacao">CLP</button>
                    <button className="box-sistemas-de-informacao">SISTEMAS DISTRIBUIDOS</button>
                    <button className="box-sistemas-de-informacao">IHM</button>
                    <button className="box-sistemas-de-informacao">GERÊNCIA DE PROJETO</button>
                    <button className="box-sistemas-de-informacao">SEGURANÇA DE SIST COMP</button>
                </div>
            </div>
        </main>

        <footer>Todos os direitos reservados</footer>
        
    </div>
  )
}

export default MateriasCC