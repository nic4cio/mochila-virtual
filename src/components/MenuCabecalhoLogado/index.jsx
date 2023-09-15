import { Link } from 'react-router-dom';
import usuarioFoto from '../../assets/homem-generico.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

// Esses props não tão funcionando ainda ;-;
function MenuCabecalhoLogado(props) {
    const accessToken = sessionStorage.getItem('access_token'); // Get the access_token from local storage
    const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        common: {
          'Authorization': `Bearer ${accessToken}`, // Include the access_token
        },
      },
    });
  
    const [userData, setUserData] = useState({});
  
    // Example: Get user data
  const getUserData = async () => {
    try {
      const response = await api.get('/users/me');
  
      // Handle the user data in the response
      const userData = response.data;
      console.log('User Data:', userData);
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
    // Call the function to retrieve user data when the component mounts
    useEffect(() => {
      getUserData();
    }, []); // Pass an empty dependency array to run this effect only once

    return(
        <div className="menuRegistros">
            <span><Link to="/"><span className={props.home}>Home</span></Link></span>
            <span><Link to="/solicitar-curador"><span className={props.curador}>Seja um Curador</span></Link></span>
            <span><Link to=""><span className={props.disciplinas}>Disciplinas</span></Link></span>
            <span><Link to=""><span className={props.suaMochila}>Sua Mochila</span></Link></span>
            <span><img src={usuarioFoto} alt="foto-usuario" style={{width: "50px", borderRadius: "50%"}} /></span>
            <span style={{color: "#BF7A47", marginLeft: "10px"}}>Olá, {userData.firstName /* Display user's firstName */}!</span>
        </div>
    );
}

export default MenuCabecalhoLogado;