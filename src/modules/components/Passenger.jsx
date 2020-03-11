// Material Design for BootStrap
// THIS IS A COMPLEX MODULE COMPONENT WHICH DISPLAY PASSENGER LIST BASED ON FLIGHT SLECTED WHICH WILL COMMON FOR BOTH ROLE
import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTable } from "mdbreact";

export class Passenger extends Component {
  render() {
    let isAdmin = this.props.isAdmin;
    return (
      <div style={{ paddingTop: "7px", paddingBottom: "7px" }}>
        {!isAdmin ? (
          <div
            style={{
              borderBottomStyle: "solid",
              marginBottom: "15px",
              paddingTop: "5px",
              paddingBottom: "5px"
            }}
          >
            <MDBContainer className='dusty-grass-gradient'>
              <MDBRow>
                <MDBCol sm={3}>
                  <b>AIRLINE:</b> {this.props.flight.airline}
                </MDBCol>
                <MDBCol sm={3}>
                  <b>DEP STN :</b> {this.props.flight.departureStation}
                </MDBCol>
                <MDBCol sm={4}>
                  <b>DEP DATE :</b>{" "}
                  {String(this.props.flight.departureDate).substring(0, 10)}
                </MDBCol>
                <MDBCol sm={2}>
                  <b>TIME :</b>{" "}
                  {String(this.props.flight.departureDate).substring(11, 16)}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm={3}>
                  <b>FLIGHT NO :</b> {this.props.flight.flightNo}
                </MDBCol>
                <MDBCol sm={3}>
                  <b>ARV STN :</b> {this.props.flight.arrivalStation}{" "}
                </MDBCol>
                <MDBCol sm={4}>
                  <b>ARV DATE :</b>{" "}
                  {String(this.props.flight.arrivalDate).substring(0, 10)}
                </MDBCol>
                <MDBCol sm={2}>
                  <b>TIME :</b>{" "}
                  {String(this.props.flight.arrivalDate).substring(11, 16)}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        ) : (
          <></>
        )}

        <div style={!isAdmin ? { display: "" } : { display: "none" }}>
          <MDBContainer
            style={{
              borderBottomStyle: "solid",
              marginBottom: "15px",
              paddingTop: "5px",
              paddingBottom: "5px"
            }}
          >
            <MDBRow>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='AC_PAX'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>Accepted Passenger✔</b>
              </MDBCol>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='INFANT_PAX'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>
                  Passenger-Infant
                  <span role='img' aria-label='baby' title='emoji'>
                    👶
                  </span>
                </b>
              </MDBCol>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='WHEELCHAIR_PAX'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>
                  Passenger-WheelChair
                  <span role='img' aria-label='wheel' title='emoji'>
                    👩‍🦼
                  </span>
                </b>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div style={isAdmin ? { display: "" } : { display: "none" }}>
          <MDBContainer
            style={{
              borderBottomStyle: "solid",
              marginBottom: "15px",
              paddingTop: "5px",
              paddingBottom: "5px"
            }}
          >
            <MDBRow>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='NO_PASSPORT'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>
                  Without Passport{" "}
                  <span role='img' aria-label='wheel' title='emoji'>
                    🛂
                  </span>
                </b>
              </MDBCol>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='NO_ADDRESS'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>No Address detail </b>
              </MDBCol>
              <MDBCol md='4'>
                <input
                  type='checkbox'
                  id='NO_DOB'
                  onClick={this.props.filterPassenger}
                />{" "}
                <b>
                  No Date of Birth{" "}
                  <span role='img' aria-label='wheel' title='emoji'>
                    📅
                  </span>
                </b>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <form>
          <MDBTable
            paging='true'
            striped
            bordered
            hover
            size='md'
            reponsive='true'
            scrollY
            maxHeight='390px'
          >
            <thead className='winter-neva-gradient '>
              <tr>
                <th>Select</th>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th style={!isAdmin ? { display: "" } : { display: "none" }}>
                  Seat No
                </th>
                <th style={!isAdmin ? { display: "" } : { display: "none" }}>
                  Status
                </th>
                <th style={!isAdmin ? { display: "" } : { display: "none" }}>
                  Infant
                </th>
                <th style={!isAdmin ? { display: "" } : { display: "none" }}>
                  WheelChair
                </th>
                <th style={isAdmin ? { display: "" } : { display: "none" }}>
                  Passport
                </th>
                <th style={isAdmin ? { display: "" } : { display: "none" }}>
                  Date of Birth
                </th>
                <th style={isAdmin ? { display: "" } : { display: "none" }}>
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.passengerList &&
                this.props.passengerList.map((value, index) => {
                  return (
                    <tr
                      style={
                        String(value.id) === this.props.passengerId
                          ? { backgroundColor: "#f0cf85" } //
                          : null
                      }
                      key={index}
                    >
                      <td>
                        <input
                          type='radio'
                          value={value.id}
                          name='passenger'
                          onChange={this.props.onChange}
                        />
                      </td>
                      <td>{index + 1}</td>
                      <td>{value.first_name}</td>
                      <td>{value.last_name}</td>
                      <td>{value.gender}</td>
                      <td
                        style={!isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.seat_no}
                      </td>
                      <td
                        style={!isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.status}
                      </td>
                      <td
                        style={!isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.infant}
                      </td>
                      <td
                        style={!isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.wheelChair}
                      </td>
                      <td
                        style={isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.passport}
                      </td>
                      <td
                        style={isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.date_of_birth}
                      </td>
                      <td
                        style={isAdmin ? { display: "" } : { display: "none" }}
                      >
                        {value.address}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </MDBTable>
        </form>
      </div>
    );
  }
}

export default Passenger;
