import React from 'react'
import './slider.css'

const Slider = (props) => {
  return (
   <div className="main">
     <div className='con'>
        <input className='sl' type="range"  defaultValue={props.value} onChange={props.function} min={props.min} max={props.max}/>
    </div>
    
   </div>
  )
}

export default Slider

