// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


// let name = "Shivam";
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
      document.title = 'Textutils - Dark Mode';
      // setInterval(()=>{
      //     document.title = 'Install Now';
      // },2000)
      // setInterval(()=>{
      //     document.title = 'Try Textutils';
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'dark';
      showAlert("Enable mode has been Enabled", "success");
      document.title = 'Textutils';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} aboutText="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element = {<About/>}>
          </Route>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
      </Routes> */}
      {/* </div> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
      {/* </Router> */}
    </> 
  );
}

export default App;
