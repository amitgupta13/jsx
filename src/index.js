// import react and reactDOM libraries
import React from 'react';
import reactDOM from 'react-dom';

function getButtonText(){
  return 'Click on Me!'
}

// create a react component
const App = () => {
    return <div>
    <label className="label" htmlFor="name">Enter Name: </label>
    <input id="name" />
    <button style={{backgroundColor:'blue', color:'white'}}>{getButtonText()}</button>
  </div>;
}

reactDOM.render(
    <App/>,
    document.querySelector('#root')
)
// show react component on screen