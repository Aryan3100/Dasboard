import React from 'react'
import './chart.css'
import Bars from './Bar'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Progres from './Progres';

const Chart = () => {
    const options = [
        'under30', 'under50', 'under60'
      ];
      const gen =[ 'male','female']
      const salary = [ '50k ','60k','70k']
      const defaultOption = options[0]
      const defaultOptio =salary[0]
      const defaultOpti =gen[0]
  return (
    <div className="container2">
        <div className="year">
            <h4>Retirement Income</h4>
            <h1>Starting Year 2056</h1>
        </div>
        <div className="goal">
            <div className="my" id='m'>
                <h1>$300,000</h1>
                <p>My Goal</p><hr />
            </div>
            <div className="my" id='a'>
                <h1>59%</h1>
                <p>Goal Achived</p><hr />
            </div>
            <div className="my" id='b'>
                <h1>$300</h1>
                <p>Est. Montly Income</p><hr />
            </div>
        </div>
        <div className="gap">
        <h3>Contribution Overtime</h3>
        <Bars/>
        </div>
        <div className="peers">
            <h3>How do I compare to my peers?</h3>
            <p>These number represent curent goal achievement</p>
          <div className="slide">
          <div className="age">

<p>Age:</p><Dropdown className='drop' options={options} onChange={options._onSelect} value={defaultOption} placeholder="Select an option" />
<p>Salary:</p> <Dropdown className='drop' options={salary} onChange={salary._onSelect} value={defaultOptio} placeholder="Select an option" />
<p>Gender:</p><Dropdown className='drop' options={gen} onChange={gen._onSelect} value={defaultOpti} placeholder="Select an option" />
   </div>
   <div className="progress">
       <Progres name='Average' value='78'/>
       <Progres name='Top' value='95'/>
       <Progres name='Me'value='59'/>
   </div>
          </div>
        </div>
    </div>
  )
}

export default Chart