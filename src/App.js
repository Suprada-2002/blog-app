import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import AddData from './components/AddData';


function App() {
  return (
    <Router>
     
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' exact element={<AddData />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
