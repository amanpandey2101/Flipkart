import './App.css';
import Layout from './components/Layout';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Container/Home';
import Signin from './Container/Signin';
import Signup from './Container/Signup';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/signin" element = {<Signin/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
