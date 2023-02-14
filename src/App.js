import { Route, BrowserRouter as Router, Routes ,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import AddData from './components/AddData';
import Login from './components/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import { auth } from './assets/firebase-config';

function App() {

const [isAuth, setIsAuth] = useState(false);
const signUserOut = () => {
  signOut(auth).then(() => {
    localStorage.clear();
    setIsAuth(false);
    window.location.pathname="/login";
  })
}

  return (
    <Router>
    <nav className='navbar-container'>
      <Link to='/' className='link'>Home</Link>
      {!isAuth ?  <Link to='/login' className='link'>Login</Link> :
       <>
       <Link to='/add' className='link'>Add Data</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
      }
    </nav>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' exact element={<AddData isAuth={isAuth} />} />
        <Route path='/login' exact element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
   
    </Router>
  );
}

export default App;
