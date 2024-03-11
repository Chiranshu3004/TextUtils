import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode,  setMode]  = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, Type) =>{
    setAlert({
      msg: message , 
      type :Type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

    const togglemode = () =>{
        if(mode==='dark')
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert('Light Mode has been Enabled', 'success');
        }
        else{
          setMode('dark');
          document.body.style.backgroundColor='#051b32';
          showAlert("Dark Mode has been enabled", 'success');
        }
    }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-3">

        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>          
          </Route>
          
          <Route path="/" element={<FormText showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>

          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
