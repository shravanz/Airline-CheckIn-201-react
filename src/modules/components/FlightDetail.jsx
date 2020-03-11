// Material Design for BootStrap
// THIS COMPONENT WILL FETCH THE FLIGHT LIST DATA FROM JSON FILE IN ADMIN SCREEN AS WELL AS IN STAFF SCREEN
import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody
} from "mdbreact";

export class FlightDetail extends Component {
  render() {
    //console.log(this.props.flight.special_meals);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <MDBCard style={{ marginTop: "15px" }}>
        <MDBCardHeader
          tag='h3'
          className='text-center font-weight-bold text-uppercase py-4 tempting-azure-gradient
          '
        >
          Flight DetailS
        </MDBCardHeader>
        <MDBCardBody className='frozen-dreams-gradient'>
          <MDBContainer style={{ borderStyle: "solid", padding: "5px" }}>
            <MDBRow>
              <MDBCol sm={6}>
                <b>AIRLINE:</b> {this.props.flight.airline}
              </MDBCol>
              <MDBCol sm={6}>
                <b>FLIGHT NO :</b> {this.props.flight.flightNo}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm={6}>
                <b>DEP STN :</b> {this.props.flight.departureStation}
              </MDBCol>
              <MDBCol sm={6}>
                <b>ARV STN :</b> {this.props.flight.arrivalStation}{" "}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm={12}>
                <b>DEP DATE :</b>{" "}
                {String(this.props.flight.departureDate).substring(0, 10)}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm={12}>
                <b>ARV DATE :</b>{" "}
                {String(this.props.flight.arrivalDate).substring(0, 10)}
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol sm={6}>
                <b>DEP TIME :</b>{" "}
                {String(this.props.flight.departureDate).substring(11, 16)}
              </MDBCol>
              <MDBCol sm={6}>
                <b>ARV TIME :</b>{" "}
                {String(this.props.flight.arrivalDate).substring(11, 16)}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default FlightDetail;
