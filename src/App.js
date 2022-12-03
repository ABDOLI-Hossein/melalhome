import logo from './logo.svg';
import './App.css';
import Rents from './components/rents';
import Navbar from './components/navbar';
import Routes from './routes';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import FooterUser from './components/user/Footer/footer';
import { useLocation } from 'react-router-dom';


function App() {


 const location = useLocation();

  



  const [user,setUser] = useState();

  useEffect(()=>{

    try {
          const jwt = localStorage.getItem("token");
          const user = jwtDecode(jwt)
          setUser(user);
      
    } catch (error) {
      
    }

  }, [])
  
  return (
    <>
   
    {location.pathname !== "/login" ? <Navbar user={user}/> : null}
        <Routes user={user}/>
    {location.pathname !== "/login" ? <FooterUser/> : null}
   
    </>
  );
}

export default App;
