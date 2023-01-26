import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddData from './components/AddData';
import Home from './components/Home.js';

function App() {
  return (
    <Router>
     
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/addData' element={<AddData />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
