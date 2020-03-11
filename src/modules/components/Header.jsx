import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { connect } from 'react-redux'



export class Header extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));


  render() {
    const userName = this.props.userName
    let role = this.props.role;
    if (role === null) {
      role = 'agent'
    }
    return (
      <div>
        <MDBNavbar color="blue-gradient" dark expand="md" >
          <MDBNavbarBrand>
            <strong className="white-text">Fly Your Dream</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className="mr-1" />{userName + "(" + role + ")"}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="/logout">Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    role: state.role,
    userName: state.userName
  }
}

export default connect(mapStateToProps)(Header)

