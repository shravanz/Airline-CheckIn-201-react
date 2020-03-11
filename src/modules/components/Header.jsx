// Material Design for BootStrap
// THIS IS A HEADER COMPONENT WITH LOGO AND ROLE DISPLAY WILL BE CONSTANT THROUGH OUT ALL THE SCREENS
import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { connect } from "react-redux";

export class Header extends Component {
  state = {
    collapseIdentifier: ""
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  toggleCollapse = collapseIdentifier => () =>
    this.setState(prevState => ({
      collapseIdentifier:
        prevState.collapseIdentifier !== collapseIdentifier
          ? collapseIdentifier
          : ""
    }));
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    const userName = this.props.userName;
    let role = this.props.role;
    if (role === null) {
      role = "staff";
    }
    return (
      <div>
        <MDBNavbar color='purple-gradient' dark expand='md'>
          {"  "}
          <MDBNavbarBrand>
            <strong className='white-text'>
              {" "}
              <MDBIcon
                className='white-text font-weight-bold'
                icon='plane-departure'
              />{" "}
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseIdentifier}
            navbar
          >
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon='user-circle' className='mr-2' />
                    {userName + " (" + role + ")"}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className='dropdown-default' right>
                    <MDBDropdownItem href='/logout'>Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mapStateToProps = state => {
  return {
    role: state.role,
    userName: state.userName
  };
};

export default connect(mapStateToProps)(Header);
