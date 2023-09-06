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
import SolicitarCurador from "../pages/SolicitarCurador";
import SubmeterConteudo from "../pages/SubmeterConteudo";

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

function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/login' Component={Login} />
            <Route path='/cadastro' Component={Cadastrar} />
            <Route path='/esqueceu-senha' Component={EsqueceuSenha} />
            <Route path='/alterar-senha' Component={AlterarSenha} />
            <Route path='/disciplinas' Component={Disciplinas}/>
            <Route path='/materiascc' Component={MateriasCC}/>
            <Route path='/materiasec' Component={MateriasEC}/>
            <Route path='/home' Component={Home}></Route>
            <Route path='/conteudo-disciplina' Component={ConteudoDisciplina}></Route>
            <Route path='/usuario-logado' Component={UsuarioLogado}></Route>
            <Route path='/solicitar-curador' Component={SolicitarCurador}></Route>
            <Route path='/submeter-conteudo' Component={SubmeterConteudo}></Route>

            <Route path='/materias/cdi' Component={Cdi}></Route>
            <Route path='/materias/cse' Component={Cse}></Route>
            <Route path='/materias/logica-computacao' Component={LogicaComputacao}></Route>
            <Route path='/materias/matematoca-discreta' Component={MatDiscreta}></Route>
            <Route path='/materias/programacao1' Component={P1}></Route>

            <Route path='/materias/estrutura-dados' Component={EstruturaDados}></Route>
            <Route path='/materias/banco-dados' Component={BancoDados}></Route>
            <Route path='/materias/oac' Component={Oac}></Route>
            <Route path='/materias/geometria-analitica' Component={GeometriaAnalitica}></Route>

            <Route path='/materias/aprendizagem-maquina' Component={AprendMaquina}></Route>
            <Route path='/materias/c3' Component={Calculo3}></Route>
            <Route path='/materias/pdi' Component={Pdi}></Route>
            <Route path='/materias/redes-neurais' Component={RedesNeurais}></Route>
            <Route path='/materias/visao-computacional' Component={VisaoComputacional}></Route>

            <Route path='/materias/algebra-linear' Component={AlgebraLinear}></Route>
            <Route path='/materias/grafos' Component={Grafos}></Route>
            <Route path='/materias/probabilidade-estatistica' Component={ProbEst}></Route>
            <Route path='/materias/redes-computadores' Component={RedesComp}></Route>

            <Route path='/materias/programacao2' Component={P2}></Route>
            <Route path='/materias/programacao3' Component={P3}></Route>
            <Route path='/materias/paa' Component={Paa}></Route>
            <Route path='/materias/teoria-computacao' Component={TeoriaComp}></Route>

            <Route path='/materias/computacao-grafica' Component={Cg}></Route>
            <Route path='/materias/compiladores' Component={Compiladores}></Route>
            <Route path='/materias/inteligencia-artificial' Component={Ia}></Route>
            <Route path='/materias/sistemas-operacionais' Component={SistOperacionais}></Route>

            <Route path='/materias/projetao' Component={Pds}></Route>

            <Route path='/materias/metodologia-pesquisa' Component={Metodologia}></Route>
            <Route path='/materias/nocoes-direito' Component={Direito}></Route>

            <Route path='/materias/fgpa' Component={Fgpa}></Route>
            <Route path='/materias/microcontroladores' Component={MicroApli}></Route>
            <Route path='/materias/sistemas-digitais' Component={SistemasDigitais}></Route>
            <Route path='/materias/sistemas-embarcados' Component={SistemasEmbarcados}></Route>

            <Route path='/materias/clp' Component={Clp}></Route>
            <Route path='/materias/gerencia-projeto' Component={GerenciaProj}></Route>
            <Route path='/materias/ihm' Component={Ihm}></Route>
            <Route path='/materias/seguranca' Component={Seguranca}></Route>
            <Route path='/materias/sistemas-distribuidos' Component={SistDistribuidos}></Route>

            <Route path='/materias/ciencia-dados' Component={CienciaDados}></Route>
            <Route path='/materias/computacao-evolucionaria' Component={CompEvol}></Route>

          </Routes>
        </BrowserRouter>
    );
}

export default Rotas;