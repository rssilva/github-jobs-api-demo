import ReactDOM from 'react-dom'
import React from 'react'
import SearchField from './components/SearchField'
import JobsList from './components/JobsList'

import './style/main.scss'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      jobs: []
    }
  }

  onClickSearch (value) {
    fetch(`https://jobs.github.com/positions.json?search=${value}`)
      .then((res) => res.json())
      .then((data) => this.setState({ jobs: data }))
  }

  render () {
    return (
      <div>
        <h1>hey!</h1>
        <SearchField onClick={this.onClickSearch.bind(this)} />
        <JobsList jobs={this.state.jobs} />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
