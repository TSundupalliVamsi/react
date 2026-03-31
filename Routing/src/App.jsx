import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import About from './pages/About';
import Help from './pages/Help';
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/form">Form</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/help">Help</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
