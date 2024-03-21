
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";







function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState();
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setalert(null);
    },1500);

  }
  
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#042743';
      showalert("Dark mode has been unabled","Success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showalert("Light mode has been unabled","Success");
    }
  }
  return(
    // <> 
      
    //   <Navbar title="textutils" mode={mode} togglemode={togglemode}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-3">
    //   <Form showalert={showalert} heading="Enter the text to analyze" mode={mode}/>  
            
    //   </div> 
    //   return (

<>

  <BrowserRouter>

    <Navbar title="TextUtils"   mode={mode} togglemode={togglemode}/>
    
    <Alert alert={alert} />

      


      

    

   

    <div className="container my-4" >

      <Routes>

        <Route exact path="/about" element={<About />}></Route>

        <Route exact path="/" element={ <Form showAlert={showalert} 
          heading="Enter Text to analyze " 
          mode={mode}/>}>
        </Route> 
                                       
                                          

      </Routes>
     
     </div>
     </BrowserRouter>  
 </>
                                           

                                         

                                       

          

          


          

        

     


    
      
   
  );
}        
          
        
     
     
      
   

export default App;
