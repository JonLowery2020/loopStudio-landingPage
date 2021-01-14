import React,{Component} from 'react';
import {Jumbotron, Navbar, NavbarBrand, NavItem, Collapse, Nav, NavLink, Container, Row, Col, NavbarToggler} from 'reactstrap';



class Header extends Component {

  constructor(props){
    super(props)

    this.state = {
      isNavOpen:false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
    return(
      <div className="navigation ">
        <Navbar  dark expand="md">
          <NavbarBrand className="brand" href="/" >loopStudios</NavbarBrand>
          <NavbarToggler  onClick= {this.toggleNav} />
          <Collapse  isOpen={this.state.isNavOpen} navbar>
            <Nav  className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" active>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">Careers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">Podcasts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">Support</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron className="bg-transparent" fluid>
          <Container fluid>
            <Row>
              <Col md={{size:6, offset:1}} className="montra">
                <p>IMMERSIVE EXPERIENCES THAT DELIVERS</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Header ;
