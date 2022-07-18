import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Login from './Components/Aunthication/Login';
import Navbar from './Components/Shared/Navbar';
import SignUp from './Components/Aunthication/SignUp';
import Services from './Components/services/Services';
import Service from './Components/services/Service';
import WorkRegistry from './Components/Work_with_us/WorkRegistry';

function App() {
  return (
    <div className="bg-white mx-2">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<Service></Service>}></Route>
        <Route path='/workRegistry' element={<WorkRegistry></WorkRegistry>}></Route>
      </Routes>
    </div>
  );
}

export default App;
