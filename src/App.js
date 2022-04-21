import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
   <Router>
   <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/products' element={<Products />} />
       <Route path='/contact' element={<Contact />} />
     </Routes>
   </Router>
    </div>
  );
}

export default App;
