import React from 'react'

export default class JobsList extends React.Component {
  renderItems (jobs = []) {
    const selectItems = jobs.slice(0,10);
    const filter = this.filterRemoteWork(jobs);

    return filter.map((job) => {
      console.log(job)
      return (
        <li key={job.id}>
          <span>{job.title} </span>
          <span>{job.location} </span>

          {/*<div dangerouslySetInnerHTML={{ __html: job.description }}*/} />
        </li>
      )
    })
  }

  filterRemoteWork(jobs) {
    return jobs.filter(job => job.location.toLowerCase().includes('remote'))
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
