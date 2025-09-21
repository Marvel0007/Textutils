import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#212121';
      document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
      showAlert("Enable mode has been Enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} aboutText="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element = {<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove extra Spaces" mode={mode}/>}>
          </Route>
      </Routes>
      </div>
      </Router>
    </> 
  );
}

export default App;
