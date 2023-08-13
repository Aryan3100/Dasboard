import React from 'react'
import Intro from '../compoonent/Intro'
import Chart from '../compoonent/Chart'
import Last from '../compoonent/Last'




const Home = () => {
  return (
    <div className="container">
        <div className="into">
          <Intro/>
        </div>
        <div className="midd">
            <h1><Chart></Chart></h1>
        </div>
        <div>
            <div className="last1">
         <Last/>             
            </div>
        </div>
       

    </div>
  )
}

export default Home