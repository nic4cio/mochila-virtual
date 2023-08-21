import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../pages/Login';
import Cadastrar from "../pages/Cadastro";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import AlterarSenha from "../pages/AlterarSenha";
import Disciplinas from "../pages/Disciplinas";
import MateriasCC from "../pages/MateriasCC"
import MateriasEC from "../pages/MateriasEC"
import Home from "../pages/Home"


function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/cadastro' Component={Cadastrar} />
            <Route path='/esqueceu-senha' Component={EsqueceuSenha} />
            <Route path='/alterar-senha' Component={AlterarSenha} />
            <Route path='/disciplinas' Component={Disciplinas}/>
            <Route path='/materiascc' Component={MateriasCC}/>
            <Route path='/materiasec' Component={MateriasEC}/>
            <Route path='/' Component={Home}></Route>
          </Routes>
        </BrowserRouter>
    );
}

export default Rotas;