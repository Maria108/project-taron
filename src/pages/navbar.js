import { Link } from "gatsby"

import React from "react"
import {
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"

import "../styles/menu.css"

export default class NavbarMenu extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar fixed="top" light expand="md">
        <Container>
          <Row>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="navbar-links" navbar>
                <NavItem>
                  <Link to="/#first">HOME</Link>
                </NavItem>
                <NavItem>
                  <Link to="/#second">WHY THIS CLASS</Link>
                </NavItem>
                <NavItem>
                  <Link to="/#third">ENERGY</Link>
                </NavItem>
                <NavItem>
                  <Link to="/#fourth">HISTORY</Link>
                </NavItem>
                <NavItem>
                  <Link to="/#fifth">INSPIRATION</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Row>
        </Container>
      </Navbar>
    )
  }
}
