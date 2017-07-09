import React from "react"


const WorkExperience = (props) => {
  return (
    <div>
      {props.jobs.map((job, idx) => <Job key={idx} job={job} />)}
    </div>
  )
}

const Job = (props) => {
  const years =
    props.job.start_year != props.job.end_year ?
    [props.job.start_year, props.job.end_year].join(" - ") :
    props.job.start_year

  return (
    <div className="job">
      <div className="title">{years}</div>
      <div className="title">{props.job.company}</div>
      <div>{props.job.title}</div>
    </div>
  )
}


export default WorkExperience
