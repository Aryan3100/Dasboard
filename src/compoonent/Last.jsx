import React, { useState } from 'react'
import './last.css'
import Slider from './Slider';



const Last = () => {
     
    const[value, setvalue] = useState(4);
    const[valu, setvalu] = useState(23);
    const handleChange = (event) => {
        setvalue(event.target.value)
        
    }
    const handleChang = (event) => {
        setvalu(event.target.value)
        
    }

    
   

  return (
   <>
   
   <div className='contain ' id="con">
            <h6>Retirement Strategy</h6>    
            <p>Employee Contribution</p>
              <div className="fre">
              <div className="sli">
               <Slider value={value} function={handleChange} min={0} max={20}/>  
              </div>
              <div className="per">{value}</div>
              </div>
            <p>Retirement Age</p>
            <div className="fre">
            <div className="ils">
               <Slider value={valu} function={handleChang} min={0} max={100}/>  
               
              </div>
              <div className="per">{valu}</div>
            </div>
              <hr  id='aa'/>
             <div className="emp">
            <div> <p>Employee Contribution</p></div>
              <div><p>8.4%</p></div>
             </div>
             <div className="emp">
             <p>Intrest Rate</p>
              <p>5%</p>
            </div>
            <button id='nt'>Update</button>

          <a href="www.googal.com" id='ref'>View Help Docs &rarr;</a>
          
        </div>
        <div className="end">
            <span className='line'></span>
            <p>Are you considering a</p>
            <h5>Housing Advance?</h5>
            <p>Limited time reduced intrest</p>
            <a id='e' href="googel.com">Learn More &rarr;</a>
        </div>
   </>
        
  )
}

export default Last