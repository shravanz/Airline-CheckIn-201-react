// Material Design for BootStrap
// PARENT COMPONENET FOR HEADER AND FLIGHTCONTAINER WILL BE CONSTANT FOR BOTH THE ROLE SCREEN
import React, { Component } from "react";
import Header from "./Header";
import FlightContainer from "../container/FlightContainer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    //console.log(this.props.token);
    if (this.props.token === "") {
      return <Redirect to='/' />; //Programtic naviagtion
    }
    return (
      <div>
        <Header />
        <FlightContainer />
      </div>
    );
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(Home);
