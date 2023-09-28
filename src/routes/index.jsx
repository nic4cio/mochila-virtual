import { Route, BrowserRouter, Routes } from "react-router-dom";


import Login from '../pages/Login';
import Cadastrar from "../pages/Cadastro";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import AlterarSenha from "../pages/AlterarSenha";
import Disciplinas from "../pages/Disciplinas";
import MateriasCC from "../pages/MateriasCC"
import MateriasEC from "../pages/MateriasEC"
import Home from "../pages/Home"
import ConteudoDisciplina from "../pages/ConteudoDisciplina";
import UsuarioLogado from "../pages/UsuarioLogado";
import CuradorLogado from "../pages/CuradorLogado";
import SolicitarCurador from "../pages/SolicitarCurador";
import SubmeterConteudo from "../pages/SubmeterConteudo";
import ConteudosAprovados from "../pages/ConteudosAprovados";
import AprovarCuradoria from "../pages/AprovarCuradoria";


// periodo 1
import Cdi from "../pagesCC/Periodo1/cdi";
import Cse from "../pagesCC/Periodo1/cse";
import LogicaComputacao from "../pagesCC/Periodo1/logicaComputacao"
import MatDiscreta from "../pagesCC/Periodo1/matDiscreta";
import P1 from "../pagesCC/Periodo1/p1";

// periodo 2
import GeometriaAnalitica from "../pagesCC/Periodo2/geometriaAnalitica";
import EstruturaDados from "../pagesCC/Periodo2/estruturaDados";
import BancoDados from "../pagesCC/Periodo2/bancoDados";
import Oac from "../pagesCC/Periodo2/oac";

// computacao visual
import AprendMaquina from "../pagesCC/CompVisual/aprendMaquina";
import Calculo3 from "../pagesCC/CompVisual/c3";
import Pdi from "../pagesCC/CompVisual/pdi";
import RedesNeurais from "../pagesCC/CompVisual/redesNeurais";
import VisaoComputacional from "../pagesCC/CompVisual/visaoComp";

// periodo 3
import AlgebraLinear from "../pagesCC/Periodo3/algebraLinear";
import Grafos from "../pagesCC/Periodo3/grafos";
import ProbEst from "../pagesCC/Periodo3/probabilidadeEst";
import RedesComp from "../pagesCC/Periodo3/redesComputadores";

// periodo 4
import P2 from "../pagesCC/Periodo4/p2";
import P3 from "../pagesCC/Periodo4/p3";
import Paa from "../pagesCC/Periodo4/paa";
import TeoriaComp from "../pagesCC/Periodo4/teoriaComputacao";

// periodo 5
import Cg from "../pagesCC/Periodo5/cg";
import Compiladores from "../pagesCC/Periodo5/compiladores";
import Ia from "../pagesCC/Periodo5/ia";
import SistOperacionais from "../pagesCC/Periodo5/sistOperacionais";

// periodo 6
import Pds from "../pagesCC/Periodo6/pds";

// periodo 7
import Metodologia from "../pagesCC/Periodo7/metodPesquisa";
import Direito from "../pagesCC/Periodo7/nocoesDireito";

// sistemas computacao
import Fgpa from "../pagesCC/SistComputacao/fpga";
import MicroApli from "../pagesCC/SistComputacao/microAplicacoes";
import SistemasDigitais from "../pagesCC/SistComputacao/sistemasDigitais";
import SistemasEmbarcados from "../pagesCC/SistComputacao/sistemasEmbarcados";

// sistemas informacao
import Clp from "../pagesCC/SistInformacao/clp";
import GerenciaProj from "../pagesCC/SistInformacao/gerenciaProjeto";
import Ihm from "../pagesCC/SistInformacao/ihm";
import Seguranca from "../pagesCC/SistInformacao/seguranca";
import SistDistribuidos from "../pagesCC/SistInformacao/sistDistribuidos";

// sistemas inteligentes
import CienciaDados from "../pagesCC/SistInteligentes/cienciaDados";
import CompEvol from "../pagesCC/SistInteligentes/compEvol";
import ProtectedRoute from "./ProtectedRoute";

// p1
import C1 from "../pagesEC/Periodo1/c1";
import Ingles from "../pagesEC/Periodo1/ingles";
import IntroEng from "../pagesEC/Periodo1//introEng";

// p2
import C2 from "../pagesEC/Periodo2/calculo2";
import CirDig from "../pagesEC/Periodo2/circuitosDigitais";
import Desenho from "../pagesEC/Periodo2/desenho";
import Fisica1 from "../pagesEC/Periodo2/fisica1";

// p3
import Fisica2 from "../pagesEC/Periodo3/fisica2";
import LinForm from "../pagesEC/Periodo3/lingFormal";
import QuimTec from "../pagesEC/Periodo3/quimicaTec";

// p4
import C4 from "../pagesEC/Periodo4/c4";
import EngSoft from "../pagesEC/Periodo4/engSoft";
import Fisica3 from "../pagesEC/Periodo4/fisica3";
import VarComp from "../pagesEC/Periodo4/varComplexas";

// p5
import CircElet from "../pagesEC/Periodo5/circuitosEletricos";
import SinSist from "../pagesEC/Periodo5/sinaisSistemas";

// p6
import Eletro from "../pagesEC/Periodo6/eletronica";
import Empreen from "../pagesEC/Periodo6/empreendedorismo";
import FenTransp from "../pagesEC/Periodo6/fenTransp";
import MetNum from "../pagesEC/Periodo6/metNumericos";
import PrinComu from "../pagesEC/Periodo6/princComunicacao";
import SistCont from "../pagesEC/Periodo6/sistControle";

// p7
import InsElec from "../pagesEC/Periodo7/instruEletrica";
import ProDigSin from "../pagesEC/Periodo7/procDigitalSinais";
import SistCon2 from "../pagesEC/Periodo7/sistControle2";

// p8
import AutoInd from "../pagesEC/Periodo8/autoIndustrial";
import MecSol from "../pagesEC/Periodo8/mecSolidos";
import Robot from "../pagesEC/Periodo8/robotica";

// eletivas
import DesOntolo from "../pagesEC/Eletivas/desBaseadoOntologias";
import DesC from "../pagesEC/Eletivas/descC";
import EventDisc from "../pagesEC/Eletivas/eventosDiscretos";
import FundLibras from "../pagesEC/Eletivas/fundLibras";
import Ia2 from "../pagesEC/Eletivas/ia2";
import IntTeoInf from "../pagesEC/Eletivas/introTeoriaInfo";
import LabCircEle from "../pagesEC/Eletivas/labCircEle";
import LabElet from "../pagesEC/Eletivas/labEletronica";
import LabEstDad from "../pagesEC/Eletivas/labEstrtDados";
import LabProg from "../pagesEC/Eletivas/labProg";
import ParadLing from "../pagesEC/Eletivas/paradLing";
import RedesPetri from "../pagesEC/Eletivas/redesPetri";
import TopSist2 from "../pagesEC/Eletivas/topSistDist2";
import TopSist1 from "../pagesEC/Eletivas/topSistemasDist1";
import TopEspCirElet from "../pagesEC/Eletivas/topEspCirElet";

function Rotas() {
    return (
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastrar />} />
            <Route path='/esqueceu-senha' element={<EsqueceuSenha />} />
            <Route path='/alterar-senha' element={<AlterarSenha />} />
            <Route path='/disciplinas' element={<Disciplinas />} />
            <Route path='/materiascc' element={<MateriasCC />} />
            <Route path='/materiasec' element={<MateriasEC />} />
            <Route path='/home' element={<Home />} />
            <Route path='/conteudo-disciplina' element={<ConteudoDisciplina/> } />
            <Route
              path='/usuario-logado'
              element={<ProtectedRoute element={<UsuarioLogado />} />}
            />
            <Route path='/curador-logado' element={<CuradorLogado/> } />
            <Route path='/solicitar-curador' element={<SolicitarCurador/> } />
            <Route path='/submeter-conteudo' element={<SubmeterConteudo/> } />
            <Route path='/conteudos-aprovados' element={<ConteudosAprovados/> } />
            <Route path='/aprovar-curadoria' element={<AprovarCuradoria/> } />

            <Route path='/materias/cdi' element={<Cdi/>} />
            <Route path='/materias/cse' element={<Cse/>} />
            <Route path='/materias/logica-computacao' element={<LogicaComputacao />} />
            <Route path='/materias/matematica-discreta' element={<MatDiscreta/>} />
            <Route path='/materias/programacao1' element={<P1/>} />

            <Route path='/materias/estrutura-dados' element={<EstruturaDados/> } />
            <Route path='/materias/banco-dados' element={<BancoDados/> } />
            <Route path='/materias/oac' element={<Oac/> } />
            <Route path='/materias/geometria-analitica' element={<GeometriaAnalitica/>} />

            <Route path='/materias/aprendizagem-maquina' element={<AprendMaquina/>} />
            <Route path='/materias/c3' element={<Calculo3 />} />
            <Route path='/materias/pdi' element={<Pdi/>} />
            <Route path='/materias/redes-neurais' element={<RedesNeurais/>} />
            <Route path='/materias/visao-computacional' element={<VisaoComputacional />} />

            <Route path='/materias/algebra-linear' element={<AlgebraLinear/>} />
            <Route path='/materias/grafos' element={<Grafos/>} />
            <Route path='/materias/probabilidade-estatistica' element={<ProbEst/>} />
            <Route path='/materias/redes-computadores' element={<RedesComp/>} />

            <Route path='/materias/programacao2' element={<P2/>} />
            <Route path='/materias/programacao3' element={<P3/>} />
            <Route path='/materias/paa' element={<Paa/>} />
            <Route path='/materias/teoria-computacao' element={<TeoriaComp/>} />

            <Route path='/materias/computacao-grafica' element={<Cg/>} />
            <Route path='/materias/compiladores' element={<Compiladores/>} />
            <Route path='/materias/inteligencia-artificial' element={<Ia/>} />
            <Route path='/materias/sistemas-operacionais' element={<SistOperacionais/>} />

            <Route path='/materias/projetao' element={<Pds/>} />

            <Route path='/materias/metodologia-pesquisa' element={<Metodologia/>} />
            <Route path='/materias/nocoes-direito' element={<Direito/>} />

            <Route path='/materias/fgpa' element={<Fgpa/>} />
            <Route path='/materias/microcontroladores' element={<MicroApli/>} />
            <Route path='/materias/sistemas-digitais' element={<SistemasDigitais/>} />
            <Route path='/materias/sistemas-embarcados' element={<SistemasEmbarcados/>} />

            <Route path='/materias/clp' element={<Clp/>} />
            <Route path='/materias/gerencia-projeto' element={<GerenciaProj/>} />
            <Route path='/materias/ihm' element={<Ihm/>} />
            <Route path='/materias/seguranca' element={<Seguranca/>} />
            <Route path='/materias/sistemas-distribuidos' element={<SistDistribuidos/>} />

            <Route path='/materias/ciencia-dados' element={<CienciaDados/>} />
            <Route path='/materias/computacao-evolucionaria' element={<CompEvol/>} />

            

            <Route path='/materias/calculo1' element={<C1/>} />
            <Route path='/materias/ingles-instrumental' element={<Ingles/>} />
            <Route path='/materias/introducao-ec' element={<IntroEng/>} />

            <Route path='/materias/calculo2' element={<C2/>} />
            <Route path='/materias/circuitos-digitais' element={<CirDig/>} />
            <Route path='/materias/desenho' element={<Desenho/>} />
            <Route path='/materias/fisica1' element={<Fisica1/>} />

            <Route path='/materias/fisica2' element={<Fisica2/>} />
            <Route path='/materias/linguagem-formal' element={<LinForm/>} />
            <Route path='/materias/quimica-tecnologica' element={<QuimTec/>} />

            <Route path='/materias/calculo4' element={<C4/>} />
            <Route path='/materias/engenharia-software' element={<EngSoft/>} />
            <Route path='/materias/fisica3' element={<Fisica3/>} />
            <Route path='/materias/variaveis-complexas' element={<VarComp/>} />

            <Route path='/materias/circuitos-eletricos' element={<CircElet/>} />
            <Route path='/materias/sinais-sistemas' element={<SinSist/>} />

            <Route path='/materias/eletronica' element={<Eletro/>} />
            <Route path='/materias/empreendedorismo' element={<Empreen/>} />
            <Route path='/materias/fenomenos-transporte' element={<FenTransp/>} />
            <Route path='/materias/metodos-numericos' element={<MetNum/>} />
            <Route path='/materias/principios-comunicacao' element={<PrinComu/>} />
            <Route path='/materias/sistemas-controle1' element={<SistCont/>} />

            <Route path='/materias/instrumentacao-eletronica' element={<InsElec/>} />
            <Route path='/materias/processamento-digital-sinais' element={<ProDigSin/>} />
            <Route path='/materias/sistemas-controle2' element={<SistCon2/>} />
            
            <Route path='/materias/automacao-industrial' element={<AutoInd/>} />
            <Route path='/materias/mecanica-solidos' element={<MecSol/>} />
            <Route path='/materias/robotica' element={<Robot/>} />

            <Route path='/materias/desenvolvimento-baseado-ontologias' element={<DesOntolo/>} />
            <Route path='/materias/desenvolvimento-qt' element={<DesC/>} />
            <Route path='/materias/eventos-discretos' element={<EventDisc/>} />
            <Route path='/materias/libras' element={<FundLibras/>} />
            <Route path='/materias/ia2' element={<Ia2/>} />
            <Route path='/materias/teoria-informacao' element={<IntTeoInf/>} />
            <Route path='/materias/lab-circuitos-eletronicos' element={<LabCircEle/>} />
            <Route path='/materias/lab-eletronica' element={<LabElet/>} />
            <Route path='/materias/lab-estrutuda-dados' element={<LabEstDad/>} />
            <Route path='/materias/lab-programacao' element={<LabProg/>} />
            <Route path='/materias/paradigmas-programacao' element={<ParadLing/>} />
            <Route path='/materias/redes-petri' element={<RedesPetri/>} />
            <Route path='/materias/topicos-sistemas-distribuidos2' element={<TopSist2/>} />
            <Route path='/materias/topicos-sistemas-distribuidos1' element={<TopSist1/>} />
            <Route path='/materias/topicos-circuitos-eletricos' element={<TopEspCirElet/>} />

          </Routes>

        </BrowserRouter>
    );
}

export default Rotas;