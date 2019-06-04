// import react and reactDOM libraries
import React from 'react';
import reactDOM from 'react-dom';

// create a react component
const App = () => {
  const buttonText = 'Click Me'
  const style = {backgroundColor:'blue', color:'white'}
    return <div>
    <label className="label" htmlFor="name">Enter Name: </label>
    <input id="name" />
    <button style={style}>{buttonText}</button>
  </div>;
}

reactDOM.render(
    <App/>,
    document.querySelector('#root')
)
// show react component on screen