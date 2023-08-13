import React from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css'

const Progres = (props) => {
    

  return (
<div className='pr'>
<CircularProgressbar className='bar' value={props.value} text={`${props.value}%`} 
  styles={buildStyles({
    textColor: 'black',
    pathColor: '	#00e6ac',
    trailColor: '#ccfff2',
  })} />
 <h5 className='hh'> {props.name}</h5>
</div>
  )
}

export default Progres