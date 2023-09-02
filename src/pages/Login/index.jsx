import { useState } from 'react';
import { loginUser } from '../../services/api.js'
import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className='imageRegistros'>
      <FontePoppins />
      <Cabecalho home="" materias="" curador="" entrar="menuaSpanRegistros" registrar=""/>
      <tbody className="containerRegistros">
        <TituloImagem titulo="Olá, estudante!"/>
        <div className="boxRegistros">
          <form onSubmit={handleLogin}>

            <input 
             type="email"
             placeholder="Email"
             value={email}
             size="25"
             onChange={(e) => setEmail(e.target.value)}
            />

            <input 
             type="password" 
             placeholder="Senha" 
             value={password}
             size="25"
             onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
            <Link to="/cadastro">Cadastre-se agora!</Link>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </tbody>
    </div>
  );
}

export default App;