import React from 'react';
import Grid from 'material-ui/Grid';
import Stars from '../Images/Stars.jpg';
import { javascript, html5, css3, react, git, sass } from 'devicon';

const Stack = props => (
  <div className="Stack" style={{backgroundImage:`url(${Stars})`}} >
      <div className="Stack__grid-container">
          <Grid container id="Stack__grid" direction={'row'} justify={'space-around'} align={'flex-end'}>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-javascript-plain"></i>
              </Grid>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-html5-plain"></i>
              </Grid>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-css3-plain"></i>
              </Grid>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-react-original"></i>
              </Grid>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-git-plain"></i>
              </Grid>
              <Grid item className="Stack__grid-item">
                  <div className="icon-spacer"></div>
                  <i className="Stack__icon icon devicon-sass-plain"></i>
              </Grid>
          </Grid>
      </div>
  </div>
)

export default Stack;
