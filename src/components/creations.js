import React from 'react';
import {Container, Row, Col, Button, Card, CardTitle,  CardImg, CardImgOverlay} from 'reactstrap'


const Creations = () => {
  return(
    <React.Fragment >
      <div  >
        <Container >
          <Row>
            <Col xs={{size:12}} md={{size:6}}>
              <h3 className="headers our-creations" >OUR CREATIONS</h3>
            </Col>
            <Col xs={{size:12, offset:9}}md={{offset:4}} >
              <Button  outline color="secondary" className="our-creations-btn" >See All</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5">
        <Container>
          <Row>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-deep-earth.jpg" alt="Deep Earth Image"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">DEEP EARTH</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-night-arcade.jpg" alt="Night Arcade Image"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">NIGHT ARCADE</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-soccer-team.jpg" alt="Soccer Team Image"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">SOCCER TEAM VR</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-grid.jpg" alt="The Grid"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">The Grid</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-from-above.jpg" alt="From Above"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers" >FROM UP ABOVE VR</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-pocket-borealis.jpg" alt="Pocket Borealis"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">POCKET BOREALIS</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col  md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-curiosity.jpg" alt="The Curiosity"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">THE CURIOSITY</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col  md={{size:3}}>
              <Card className="creation-card" inverse>
                <CardImg src= "image-fisheye.jpg" alt="Make it Fisheye"/>
                <CardImgOverlay>
                  <CardTitle tag="h5" className="headers">MAKE IT FISHEYE</CardTitle>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
};

export default Creations
