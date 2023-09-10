import { useState, useEffect } from "react";
import { loginUser } from "../../services/api.js";
import "../Estilo/Registros.css";

import Cabecalho from "../../components/Cabecalho";
import TituloImagem from "../../components/TituloImagem";
import FontePoppins from "../../components/FontePoppins";

import { Link, useNavigate } from "react-router-dom";

function App() {

  window.scrollTo(0, 0); //Reinicia o scroll

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function
  const [tokenCountdown, setTokenCountdown] = useState(""); // Countdown timer

  // Function to check and remove expired token from session storage
  const checkTokenExpiration = () => {
    const accessToken = sessionStorage.getItem('access_token');
    const tokenExpiration = sessionStorage.getItem('token_expiration');

    if (accessToken && tokenExpiration) {
      const currentTime = new Date().getTime() / 1000; // Current time in seconds
      const tokenExpTime = parseFloat(tokenExpiration);

      if (currentTime > tokenExpTime) {
        // Token has expired, remove it from session storage
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('token_expiration');

        // Set the countdown message to "EXPIRED"
        //console.log("EXPIRED");
        setTokenCountdown("EXPIRED");
      } else {
        // Calculate the remaining time 
        const remainingTime = Math.round(tokenExpTime - currentTime);
        //console.log(remainingTime);
        setTokenCountdown(`Token expires in ${remainingTime} seconds`);
      }
    }
  };

  useEffect(() => {
    // Check token expiration when the component mounts
    checkTokenExpiration();

    // Set up an interval to update the countdown every second
    const countdownInterval = setInterval(() => {
      checkTokenExpiration();
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdownInterval);

  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });

      //handle back-end access token
      const accessToken = response.data.access_token;

      // Set the token expiration time to 15 minutes (900 seconds)
      const tokenExpiration = new Date().getTime() / 1000 + 900; // 900 seconds

      // Store the 'access_token' and 'token_expiration' in Session Storage
      sessionStorage.setItem('access_token', accessToken);
      sessionStorage.setItem('token_expiration', tokenExpiration);
      console.log(response.data.access_token);

      // Redirect to 'usuario-logado' after successful login
      navigate('/usuario-logado');

      // Check token expiration again after login (optional)
      checkTokenExpiration();

    } catch (error) {
      console.error(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="imageRegistros">
      <FontePoppins />
      <Cabecalho
        home=""
        materias=""
        curador=""
        entrar="menuaSpanRegistros"
        registrar=""
      />
      <tbody className="containerRegistros">
        <TituloImagem titulo="Olá, estudante!" />
        <div className="boxRegistros">
          <form onSubmit={handleLogin}>
            <input
              type="text"
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
          {errorMessage && <p className="alert alert-danger error-message" >{errorMessage}</p>}
          <p>{tokenCountdown}</p>
        </div>
      </tbody>
    </div>
  );
}

export default App;
