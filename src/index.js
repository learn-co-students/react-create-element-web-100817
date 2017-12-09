// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');

const lel = React.createElement('h3', {}, 'ees good yes?');
const box = React.createElement('div', {}, [title, lel])

ReactDOM.render(
  box,
  document.getElementById('global')
)

// ReactDOM.render(
//   title,
//   document.getElementById('global')
// );


// ReactDOM.render(
//   lel,
//   document.querySelector('div')
// )
