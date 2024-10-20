
import './App.css';

import {BrowserRouter as Router , Routes ,Route , Link }  from "react-router-dom"
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-colors.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './screens/Signup.js';




function App() {
  return (
    <Router>
       <div>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/creatuser' element={<Signup/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
