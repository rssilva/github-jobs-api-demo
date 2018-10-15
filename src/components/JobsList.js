import React from 'react'

export default class JobsList extends React.Component {
  renderItems (jobs = []) {
    return jobs.map((job) => {
      return (
        <li key={job.id}>
          <span>{job.title} </span>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <ul>
          {this.renderItems(this.props.jobs)}
        </ul>
      </div>
    )
  }
}
