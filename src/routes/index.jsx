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

          </Routes>

        </BrowserRouter>
    );
}

export default Rotas;