import React from 'react';
import ReactDOM from 'react-dom';

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown', key: 1}, 'Chocolate'),
        React.createElement('li', { className: 'white', key: 2}, 'Vanilla'),
        React.createElement('li', { className: 'yellow', key: 3}, 'Banana')
      ]
    )
  );

ReactDOM.render(
  list,
  document.getElementById('global')
);
