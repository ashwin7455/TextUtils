
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  // const [Label,setLabel] = useState("Enable DarkMode");
  const [Mode,setMode] = useState(`light`);//wheater dark mode is enabled or not
  // const darkText = () =>{
  //      if(Label === 'black'){
  //        setLabel('white')
  //      }
  //      else{
  //       setLabel('black')
  //      }
  // }
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return (
    <>
   
{/* <Navbar title="TextUtils" aboutText ="About TextUtils"/> */}
<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
<div className="container my-3">
<TextForm heading ="Enter the text to analyse below" mode={Mode}/>
</div>
<About/> 

</>
  );
}

export default App;
