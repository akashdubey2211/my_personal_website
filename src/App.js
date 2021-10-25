import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Home from "./components/home"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Skills from './components/Skills';
import Experience from "./components/Experience"
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
   <div className="app">
     <Navbar/>
     <Switch>
       <Route exact  path="/" component={Home}/>
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/skills" component={Skills} />
       <Route exact path="/projects" component={Projects} />
     </Switch>

     <Footer/>
    </div>
    
    </Router>
 
  );
}

export default App;
