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

import Cdi from "../pagesCC/cdi";
import Cse from "../pagesCC/cse";
import LogicaComputacao from "../pagesCC/logicaComputacao"
import MatDiscreta from "../pagesCC/matDiscreta";
import P1 from "../pagesCC/p1";

import GeometriaAnalitica from "../pagesCC/Periodo2/geometriaAnalitica";
import EstruturaDados from "../pagesCC/Periodo2/estruturaDados";
import BancoDados from "../pagesCC/Periodo2/bancoDados";
import Oac from "../pagesCC/Periodo2/oac";

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

            <Route path='/materias/cdi' Component={Cdi}></Route>
            <Route path='/materias/cse' Component={Cse}></Route>
            <Route path='/materias/logica-computacao' Component={LogicaComputacao}></Route>
            <Route path='/materias/matematoca-discreta' Component={MatDiscreta}></Route>
            <Route path='/materias/programacao1' Component={P1}></Route>

            <Route path='/materias/estrutura-dados' Component={EstruturaDados}></Route>
            <Route path='/materias/banco-dados' Component={BancoDados}></Route>
            <Route path='/materias/oac' Component={Oac}></Route>
            <Route path='/materias/geometria-analitica' Component={GeometriaAnalitica}></Route>
          </Routes>
        </BrowserRouter>
    );
}

export default Rotas;