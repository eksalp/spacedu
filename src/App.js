import logo from './logo.svg';
import './App.css';
import Bgk from './components/bgk/Bgk.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import {Route, Routes} from "react-router-dom";
import Contact from './routes/Contact';
 
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={ <Home/>}/>
           <Route path="/contact" element={ <Contact/>}/>
      </Routes>

     
      {/* <Bgk/> */}
      
      
    
    </div>
  );
}

export default App;
