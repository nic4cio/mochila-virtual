import { useState } from 'react';
import '../Estilo/Registros.css';

import Cabecalho from '../../components/Cabecalho';
import TituloImagem from '../../components/TituloImagem';
import FontePoppins from '../../components/FontePoppins';

import { Link } from 'react-router-dom';
import { registerUser } from '../../services/api';

import Swal from 'sweetalert2';

import { dadosCursos } from '../SubmeterConteudo/dadosCursos';

function Cadastrar() {

  window.scrollTo(0, 0); // Reinicia o scroll
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cursoSelecionado, setCursoSelecionado] = useState("Curso");

  const lidarComMudancaDeCurso = (e) => {
    const cursoSelecionado = e.target.value;
    setCursoSelecionado(cursoSelecionado);
  };

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
      const curso = JSON.stringify(cursoSelecionado)
      const response = await registerUser({ email, firstName, password, confirmPassword, curso });

      // If Registration successful, redirect to login page
      console.log('Registration successful:', response.data);

      //If registration successful, display success alert and redirect
      Swal.fire({
        title: 'Sucesso!',
        text: 'Usuário cadastrado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to the login page using window.location
          window.location.href = '/login';
        }
      });
      
    } catch (error) {
      setErrorMessage(error.response.data.message); // Handle error message display
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
            <div style={{width:'500px', backgroundColor:'#D9D9D9', margin:'0px auto 10px', borderRadius:'20px'}}>
              <select value={cursoSelecionado} onChange={lidarComMudancaDeCurso} className='escolhaCurso'>
                {Object.keys(dadosCursos).map((curso) => (
                  <option key={curso} value={curso}>
                    {curso}
                  </option>
                ))}
              </select>
            </div>
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
