import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
// import Contact from './routes/Contact';
import Tryout from './routes/Tryout';
import About from './routes/About';
import Blog from './routes/Blog';
// analytics.js
import ReactGA from 'react-ga4';

ReactGA.initialize('G-EV4JLXVRKZ');

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Program-Tryout" element={<Tryout />} />
        <Route path="/Tentang-Spacedu" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
