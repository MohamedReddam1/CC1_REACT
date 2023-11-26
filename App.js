import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Calc from './components/Calc (1)';
import Tp2_react from './components/TP2_REACT';
import TodoListApp from './components/TodoListApp';
import tp4Api from './components/Tp4Api'
import Tp6_react from './components/tp6_react';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/CC1_REACT"  element={<Tp6_react/>} />
          <Route path="/CC1_REACT/Calculator"  element={<Calc/>} />
          <Route path="/CC1_REACT/Slider"  element={<Tp2_react/>} />
          <Route path="/CC1_REACT/TodoListApp"  element={<TodoListApp/>} />
          <Route path="/CC1_REACT/Products"  element={<tp4Api/>} />
          <Route path='/CC1_REACT/*' element=
          {<><center>
            <h1 style={{fontSize:'130px', verticalAlign:'middle'}}>404</h1>
            <p>page not found</p>
          </center></>}/>
        </Routes>
    </div>
  );
}

export default App;
