import React from 'react';

const Discs = (props)=>{
  return(
    <div className='disc' id={props.disc.index} style={props.disc.style}>{props.disc.index+1}</div>
  );
}

export default Discs;
