import React from 'react';
import Grid from 'material-ui/Grid';
import { Player } from 'video-react';

import Waterfall from '../Videos/Waterfall.mp4';
import WaterfallPlaceholder from '../Images/WaterfallPlaceholder.png';

import ListItem from './ListItem';
import Extras from './Extras';
import Stack from './Stack';

const List = props => {
  return(
    <div className="list__container">

      <div className="list">
        <Grid container spacing={40} direction={'row'} justify={'space-around'} align={'flex-start'}>
        {props.projects.map(  project =>  <Grid item key={project.key}><ListItem project={project} /></Grid>  )}
        </Grid>
      </div>

      <Extras
          experience={props.experience}
          hobbies={props.hobbies}
      />
      <Stack/>
    </div>
  )
}

export default List;
