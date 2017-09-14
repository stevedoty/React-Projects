import React from 'react';
import Grid from 'material-ui/Grid';

const Extras = props => (
  <div className="extras">
    <div className="extras__title">Experience</div>
    <div className="extras__body extras__body-left extra">
        <div className="extras__body-header"></div>
        {props.experience.map(job=>{return(
          <div className="extras__body-item" key={job.company}>
            <div className={job.company} className="extras__body-item-company">{job.company}</div>
            <div className={job.title} className="extras__body-item-title">{job.title}</div>
          </div>
        )})}
    </div>
    <div className="extras__body extras__body-right extra">
        <div className="extras__body-header"></div>
        {props.experience.map(job=>{return(
          <div className="extras__body-item" key={job.company}>
            <div className={job.date} className="extras__body-item-date">{job.date}</div>
            <div className={job.location} className="extras__body-item-location">{job.location}</div>
          </div>
        )})}
    </div>
    <div className="extras__footer-container">
        <div className="extras__footer-header">Hobbies</div>
        <div className="extras__footer-body">
        <Grid container justify={'space-around'}>
        {props.hobbies.map(hobby=>{return(
              <Grid item key={hobby}><div className="extras__footer-item">{hobby}</div></Grid>
        )})}
        </Grid>
        </div>
    </div>
  </div>
)

export default Extras;
