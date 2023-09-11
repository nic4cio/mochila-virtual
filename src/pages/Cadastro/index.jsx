import { useState } from 'react';
import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';
import { registerUser } from '../../services/api';

import Swal from 'sweetalert2';

function Cadastrar() {
  window.scrollTo(0, 0); // Reinicia o scroll
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password != confirmPassword){
      Swal.fire({
        title: 'Campo Inválido',
        text: 'Senha ≠ Confirmar Senha.',
        icon: 'error', // Ícone personalizado (warning, success, error, etc.)
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const response = await registerUser({ email, firstName, password, confirmPassword });

      // If Registration successful, redirect to login page
      console.log('Registration successful:', response.data);

      // Redirect to the login page using window.location
      window.location = '/login';

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
             type="text"
             placeholder="Nome de Usuario"
             size="25"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
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
             placeholder="Confirmar Senha"
             size="25"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
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
