import React, { useState } from 'react'
import Audio from './Audio'
import Form from './Form'

function App() {
  let time = new Date().toLocaleTimeString();

  
  const [change,setChange] = useState(time);

  
  setInterval(click,1000)
  function click()
  {
    let gettime = new Date().toLocaleTimeString();
    setChange(gettime);
  } 
  
  
  return(

    <div>
      <Audio gettime={change}  />
    </div>
  ) 
}

export default App;
