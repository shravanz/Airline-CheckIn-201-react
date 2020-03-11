import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";


export class FlightDetail extends Component {
    render() {
        console.log(this.props.flight.special_meals)

        return (
            <MDBCard >
            <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                    Flight Detail
            </MDBCardHeader>
            <MDBCardBody>
            <MDBContainer style={{borderStyle :"solid" , padding :"5px"  }}>
                        <MDBRow>
                            <MDBCol sm={6}><b>AIRLINE:</b> {this.props.flight.airline}</MDBCol>
                            <MDBCol sm={6}><b>FLIGHT NO :</b> {this.props.flight.flightNo}</MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm={6}><b>DEP STN :</b> {this.props.flight.departureStation}</MDBCol>
                            <MDBCol sm={6}><b>ARV STN :</b> {this.props.flight.arrivalStation} </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm={12}><b>DEP DATE :</b> {String(this.props.flight.departureDate).substring(0, 10)}</MDBCol>
                            
                        </MDBRow>
                        <MDBRow>
                        <MDBCol sm={12}><b>ARV DATE :</b> {String(this.props.flight.arrivalDate).substring(0, 10)}</MDBCol>
                            
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm={6}><b>DEP TIME :</b> {String(this.props.flight.departureDate).substring(11, 16)}</MDBCol>
                            <MDBCol sm={6}><b>ARV TIME :</b> {String(this.props.flight.arrivalDate).substring(11, 16)}</MDBCol>
                        </MDBRow>
                    </MDBContainer> 
                    </MDBCardBody>
                    </MDBCard>
        )
    }
}

export default FlightDetail
