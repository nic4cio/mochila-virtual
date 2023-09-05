import { useState } from 'react';
import axios from 'axios';

import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';

function Cadastrar() {
  window.scrollTo(0, 0); //Reinicia o scroll
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/auth/signup', {
        email,
        password,
      });

      // if Registration successful, redirect to login page
      console.log('Registration successful:', response.data);
      // You can add a redirect logic here using React Router

    } catch (error) {
      setErrorMessage('Error registering user'); // Handle error message display
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className='imageRegistros'>
      <FontePoppins />
      <Cabecalho home="" materias="" curador="" entrar="" registrar="menuaSpanRegistros"/>
      <tbody className="container-senhaRegistros">
        <TituloImagem titulo="Cadastre-se agora!"/>
        <div className="boxRegistros">
          <form onSubmit={handleSubmit}> 
            <input 
             type="text"
             placeholder="Email"
             size="25"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             type="password"
             placeholder="Senha"
             size="25"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <input 
             type="password"
             placeholder="Confirmar senha"
             size="25"
            />
            <span className="verdeRegistros">Já possui uma conta? <Link to="/login">Clique aqui para fazer login!</Link></span>
            <button type="submit">Entrar</button>
          </form>
          {errorMessage && <span className="alert alert-danger error-message">{errorMessage}</span>}
        </div>
      </tbody>
    </div>
  );
}

export default Cadastrar;