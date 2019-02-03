import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

/**
 * It is important to surround each nav item with Link if you want to use React Router
 */

class InitialState {
  public isOpen = false;
}
export default class NavBar extends React.Component<{}, InitialState> {
  public state = new InitialState();

  public ontoggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  public render() {
    return (
      <div>
        <Navbar color="light" light={true} expand="md">
          <Link to="/">
            <NavbarBrand>TypeScript React BoilerPlate</NavbarBrand>
          </Link>
          <NavbarToggler onClick={() => this.ontoggle()} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <Link to="/anotherpage">
                <NavItem>
                  <NavLink>Another Page</NavLink>
                </NavItem>
              </Link>
              <NavItem>
                {/* Only use href here because we are linking outside */}
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  ReactStrap GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
