import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"

function App() {
  return (
    <Router>

      <Navbar />
      <Home />

      <Heading text="We are here to keep you healthy" />
      <StarProduct/>

    </Router>
   
  );
}

export default App;
