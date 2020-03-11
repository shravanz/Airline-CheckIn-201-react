// Material Design for BootStrap
// THIS COMPONENT WILL FETCH THE FLIGHT LIST DATA FROM JSON FILE
import React, { Component } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdbreact";
import { Link } from "react-router-dom";
export class Flight extends Component {
  render() {
    return (
      <div>
        <MDBCard
          style={{
            width: "100",
            height: "100vh",
            backgroundColor: "#444444"
          }}
        >
          <MDBCardHeader
            tag='h3'
            className='text-center font-weight-bold text-uppercase py-4 cloudy-knoxville-gradient'
          >
            Flights List ✈
          </MDBCardHeader>
          <MDBCardBody>
            <MDBTable
              striped
              bordered
              hover
              small
              reponsive='true'
              scrollY
              maxHeight='200px'
            >
              <MDBTableHead color='young-passion-gradient' textWhite>
                <tr style={{ fontWeight: 900 }}>
                  <th>#</th>
                  <th>Airline</th>
                  <th>Flight Number</th>
                  <th>Departure Station</th>
                  <th>Arrival Station</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {this.props.flightList &&
                  this.props.flightList.map((list, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {index + 1}{" "}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.airline}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.flightNo}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.departureStation}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.arrivalStation}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.departureDate.substring(0, 10)}
                        </td>
                        <td style={{ color: "White", fontWeight: 500 }}>
                          {list.departureDate.substring(11, 16)}
                        </td>
                        <td>
                          <Link
                            to={"/checkin/" + list.id}
                            style={{
                              color: "Tomato",
                              fontWeight: 900
                            }}
                          >
                            <u>Check-In</u>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Flight;
