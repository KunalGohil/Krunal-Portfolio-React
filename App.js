
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './NavbarComponents/Navbar';
import Home from './NavbarComponents/Home';
import About from './NavbarComponents/About';
import Portfolio from './NavbarComponents/Portfolio';
import Contact from './NavbarComponents/Contact';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
    </div>
  )
}


export default App;
