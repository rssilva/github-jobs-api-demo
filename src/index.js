import ReactDOM from 'react-dom'
import React from 'react'

import './style/main.scss'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>hey!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
