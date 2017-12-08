import React from 'react'
import ReactDOM from 'react-dom'

const myUl =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My Favorite Ice Cream Flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {className: 'brown'}, 'Chocolate'),
        React.createElement('li', {className: 'white'}, 'Vanilla'),
        React.createElement('li', {className: 'yello'}, 'Banana')
      ]
    )
  )

ReactDOM.render(
  myUl,
  document.getElementById('global')
)
