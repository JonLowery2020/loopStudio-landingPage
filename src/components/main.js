import React from 'react';
import {Container, Col, Row, Card, CardBody, CardTitle, CardText} from 'reactstrap';

function Main(){
  return (
    <Container className="m-5">
      <Row>
        <Col  md={{size:6}}>
           <img className="photo float-left" src="image-interactive.jpg" alt="Interactive gameplay" fluid/>
        </Col>
        <Col  md={{ size:6}}>
          <Card className="card">
            <CardBody>
              <CardTitle>
                <h1>The Leader in Interactive VR</h1>
              </CardTitle>
              <CardText> Founded in 2011, loopStudios has been prodicung world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>


    </Container>
  )
}

export default Main;
