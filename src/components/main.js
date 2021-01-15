import React from 'react';
import {Container} from 'reactstrap';

function Main(){
  return (
    <div>
      <Container className="position-relative">
        <div className="photo">
          <img src="image-interactive.jpg" alt="Interactive."/>
        </div>
        <div className="content">
          <h2 className="headers" >The leader in interactive VR</h2>
          <p>Founded in 2011, loopStudios has been prodicung world-class virtual
           reality projects for some of the best companies around the globe.
           Our award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Main;
