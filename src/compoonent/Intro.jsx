import React from 'react'
import profile from '../profile.jpg'
import './intro.css'

const Intro = () => {
    const trans = [
        {
            date:'2020-08-07'
            ,bank:'xxx11'
        },
        {
            date:'2020-02-03'
            ,bank:'xxx11'
        }, {
            date:'2020-01-29'
            ,bank:'xxx11'
        }
    ]
  return (
    <div className="cont">
        <div className="up">
        <img src={profile} alt="profile" />
        <div className="name">
        <h1>Hi Mike,</h1>
        <p>welcome back</p>
        </div>
    </div>
    <div className="mid">
        <h4>Today</h4>
        <div className="pesa">
        <h1>$19,892</h1>
        <p>Account Balance</p>
        </div><br />
        <div >
    <h4>$4,000</h4>
        <p>Year-to-Date Contribution</p>
        <br />
    </div>
    <div className="n">
    <h4>$1,350</h4>
        <p>Total Interest</p>
    </div>
       
        <button>i want to </button>
    </div>
    <div className="last">
          <h4>Recent Transactions</h4>
          <div className="tr">
          {
            trans.map((trans,index)=>(
                <>
                <br />
                <p>{trans.date}</p>
                <h5>Withdrawal Transfer to Bank {trans.bank}</h5>
                <br />
                <hr />
                </>
            ))
          }
          </div>
         
    </div>
    </div>
  )
}

export default Intro