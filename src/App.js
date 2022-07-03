import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';

function App() {
  return (
    <div className="bg-white mx-2">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div >
  );
}

export default App;
