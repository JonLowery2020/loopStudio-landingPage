import React from 'react';
import {Container, Col, Row, List, ListInlineItem} from 'reactstrap';



const Footer = () => {
  return (
    <footer className=" mt-5 footer ">
      <Container >
        <Row >
          <Col className="mt-2"  md={{size:6}}>
            <h4>loopStudios</h4>
          </Col>
          <Col className="mt-2 pl-10"  md={{offset:3}}>
            <List type="inline">
              <ListInlineItem>
              <a className="btn btn-social-icon " href="/"><i className="fa fa-facebook"></i></a>
              </ListInlineItem>
              <ListInlineItem>
              <a className="btn btn-social-icon " href="/"><i className="fa fa-twitter"></i></a>
              </ListInlineItem>
              <ListInlineItem>
              <a className="btn btn-social-icon " href="/"><i className="fa fa-pinterest"></i></a>
              </ListInlineItem>
              <ListInlineItem>
              <a className="btn btn-social-icon " href="/"><i className="fa fa-instagram"></i></a>
              </ListInlineItem>
            </List>
          </Col>
        </Row>
        <Row>
          <Col md={{size:7}}>
            <List type="inline" >
              <ListInlineItem><a className="btn btn-sm" href="/">About </a> </ListInlineItem>
              <ListInlineItem><a className="btn btn-sm" href="/"> Careers </a> </ListInlineItem>
              <ListInlineItem><a className="btn btn-sm" href="/"> Events </a> </ListInlineItem>
              <ListInlineItem><a className="btn btn-sm" href="/"> Products </a> </ListInlineItem>
              <ListInlineItem><a className="btn btn-sm" href="/"> Support </a> </ListInlineItem>
            </List>
          </Col>
          <Col md={{offset:1}}>
            <p>© 2021 LoopStudios.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )

}

export default Footer;
