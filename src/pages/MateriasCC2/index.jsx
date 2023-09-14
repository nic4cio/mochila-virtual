import "../Estilo/Materias.css"
import { Link } from 'react-router-dom';

function MateriasCC2 () {
    return (
        <main>
            <div id="periodo-1">
                <div className="indicador-periodo">1°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/programacao1"><button className="box">PROGRAMAÇÃO 1</button></Link>
                    <Link to="/materias/logica-computacao"><button className="box">LÓGICA PARA COMP</button></Link>
                    <Link to="/materias/cse"><button className="box">COMP SOC E ÉTICA</button></Link>
                    <Link to="/materias/matematica-discreta"><button className="box">MATEMÁTICA DISCRETA</button></Link>
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
                    <Link to="/materias/redes-computadores"><button className="box3">REDES DE COMP</button></Link>
                    <Link to="/materias/grafos"><button className="box3">TEORIA DOS GRAFOS</button></Link>
                    <Link to="/materias/probabilidade-estatistica"><button className="box3">PROB E ESTAT</button></Link>
                    <Link to="/materias/algebra-linear"><button className="box3">ÁLGEBRA LINEAR</button></Link>
                </div>
            </div>

            <div id="periodo-4">
                <div className="indicador-periodo">4°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/programacao2"><button className="box4">PROGRAMAÇÃO 2</button></Link>
                    <Link to="/materias/programacao3"><button className="box4">PROGRAMAÇÃO 3</button></Link>
                    <Link to="/materias/paa"><button className="box4">PAA</button></Link>
                    <Link to="/materias/teoria-computacao"><button className="box4">TEORIA DA COMP</button></Link>
                </div>
            </div>

            <div id="periodo-5">
                <div className="indicador-periodo">5°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/sistemas-operacionais"><div className="box5">SIST OPERACIONAIS</div></Link>
                    <Link to="/materias/compiladores"><div className="box5">COMPILADORES</div></Link>
                    <Link to="/materias/inteligencia-artificial"><div className="box5">IA</div></Link>
                    <Link to="/materias/computacao-grafica"><div className="box5">COMPUTAÇÃO GRÁFICA</div></Link>
                </div>
            </div>

            <div id="periodo-6">
                <div className="indicador-periodo">6°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/projetao"><button className="box6">PDS</button></Link>
                </div>
            </div>

            <div id="periodo-7">
                <div className="indicador-periodo">7°Período</div>

                <div className="scroll-container">
                    <Link to="/materias/metodologia-pesquisa"><button className="box7">METOD DE PESQUISA</button></Link>
                    <Link to="/materias/nocoes-direito"><button className="box7">NOÇÕES DE DIREITO</button></Link>
                </div>
            </div>

            <div id="enfase-computacao-visual">
                <div className="indicador-periodo">Computação Visual</div>

                <div className="scroll-container">
                    <Link to="/materias/c3"><button className="box-computacao-visual">CÁLCULO 3</button></Link>
                    <Link to="/materias/aprendizagem-maquina"><button className="box-computacao-visual">APRENDIZAGEM DE MÁQ</button></Link>
                    <Link to="/materias/redes-neurais"><button className="box-computacao-visual">REDES NEU E APRED PROF</button></Link>
                    <Link to="/materias/pdi"><button className="box-computacao-visual">PDI</button></Link>
                    <Link to="/materias/visao-computacional"><button className="box-computacao-visual">VISÃO COMPUTACIONAL</button></Link>
                </div>
            </div>
            
            <div id="enfase-sistemas-inteligentes">
                <div className="indicador-periodo">Sistemas Inteligentes</div>

                <div className="scroll-container">
                    <Link to="/materias/c3"><button className="box-sistemas-inteligentes">CÁLCULO 3</button></Link>
                    <Link to="/materias/aprendizagem-maquina"><button className="box-sistemas-inteligentes">APRENDIZAGEM DE MÁQ</button></Link>
                    <Link to="/materias/redes-neurais"><button className="box-sistemas-inteligentes">REDES NEU E APRED PROF</button></Link>
                    <Link to="/materias/computacao-evolucionaria"><button className="box-sistemas-inteligentes">COMP EVOLUCIONÁRIA</button></Link>
                    <Link to="/materias/ciencia-dados"><button className="box-sistemas-inteligentes">CIÊNCIA DE DADOS</button></Link>
                </div>
            </div>
            
            <div id="enfase-sistemas-de-computacao">
                <div className="indicador-periodo">Sistemas de Computação</div>

                <div className="scroll-container">
                    <Link to="/materias/c3"><button className="box-sistemas-de-computacao">CÁLCULO 3</button></Link>
                    <Link to="/materias/sistemas-digitais"><button className="box-sistemas-de-computacao">SISTEMAS DIGITAIS</button></Link>
                    <Link to="/materias/fgpa"><button className="box-sistemas-de-computacao">FPGA</button></Link>
                    <Link to="/materias/sistemas-embarcados"><button className="box-sistemas-de-computacao">SISTEMAS EMBARCADOS</button></Link>
                    <Link to="/materias/microcontroladores"><button className="box-sistemas-de-computacao">MICROC E APLICAÇÕES</button></Link>
                </div>
            </div>
            
            <div id="enfase-sistemas-de-informacao">
                <div className="indicador-periodo">Sistemas de Informação</div>

                <div className="scroll-container">
                    <Link to="/materias/clp"><button className="box-sistemas-de-informacao">CLP</button></Link>
                    <Link to="/materias/sistemas-distribuidos"><button className="box-sistemas-de-informacao">SISTEMAS DISTRIBUIDOS</button></Link>
                    <Link to="/materias/ihm"><button className="box-sistemas-de-informacao">IHM</button></Link>
                    <Link to="/materias/gerencia-projeto"><button className="box-sistemas-de-informacao">GERÊNCIA DE PROJETO</button></Link>
                    <Link to="/materias/seguranca"><button className="box-sistemas-de-informacao">SEGURANÇA DE SIST COMP</button></Link>
                </div>
            </div>
        </main>
    );
}

export default MateriasCC2;
