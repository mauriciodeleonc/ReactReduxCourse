//Import React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create react component
const App = () => {
  return <div>Hi There!</div>
};

//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
