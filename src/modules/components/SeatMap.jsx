// Material Design for BootStrap
// THIS COMPONENT WILL DISPLAY THE SEAT ACTION WILL BE USED
import React, { Component } from "react";
import Seat from "./Seat";
import "../../css/Seat.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export class SeatMap extends Component {
  render() {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let seats = this.props.seats;
    var seatMap = [];
    let row = 1;
    for (let seatIndex = 0; seatIndex < 60; seatIndex += 6) {
      seatMap.push(
        <tr key={row}>
          <td style={{ fontWeight: "bold" }}>{row++}</td>
          <td>
            <Seat
              value={seatIndex}
              disableSeat={seats[seatIndex]}
              onClick={this.props.onClick}
            />
          </td>
          <td>
            <Seat
              value={seatIndex + 1}
              disableSeat={seats[seatIndex + 1]}
              onClick={this.props.onClick}
            />
          </td>
          <td>
            <Seat
              value={seatIndex + 2}
              disableSeat={seats[seatIndex + 2]}
              onClick={this.props.onClick}
            />
          </td>
          <td>
            <div style={{ width: "8px" }}></div>
          </td>
          <td>
            <Seat
              value={seatIndex + 3}
              disableSeat={seats[seatIndex + 3]}
              onClick={this.props.onClick}
            />
          </td>
          <td>
            <Seat
              value={seatIndex + 4}
              disableSeat={seats[seatIndex + 4]}
              onClick={this.props.onClick}
            />
          </td>
          <td>
            <Seat
              value={seatIndex + 5}
              disableSeat={seats[seatIndex + 5]}
              onClick={this.props.onClick}
            />
          </td>
        </tr>
      );
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size='2'></MDBCol>
            <MDBCol size='8'>
              <div style={{ textAlign: "center", padding: "7px" }}>
                <h3> SEAT MAP</h3>
              </div>
            </MDBCol>
            <MDBCol size='2'></MDBCol>
          </MDBRow>

          <MDBRow
            style={{
              borderStyle: "solid solid none solid",
              borderRadius: "11px"
            }}
            className='cloudy-knoxville-gradient'
          >
            <MDBCol size='4'>
              <MDBRow style={{ padding: "5px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "#45cafc" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  BOOKED
                </span>
              </MDBRow>
              <MDBRow style={{ padding: "3px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "rgba(255, 255, 71, 0.2)" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  AVAILABLE
                </span>
              </MDBRow>

              <MDBRow style={{ padding: "3px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "rgba(255, 0, 255, 0.3)" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  MODIFY
                </span>
              </MDBRow>
            </MDBCol>
            <MDBCol size='8'>
              <MDBRow style={{ padding: "3px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "green" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  BOOKED WITH W/C & INF
                </span>
              </MDBRow>
              <MDBRow style={{ padding: "3px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "red" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  BOOKED WITH W/C{" "}
                  <span role='img' aria-label='wheel' title='emoji'>
                    👩‍🦼
                  </span>
                </span>
              </MDBRow>
              <MDBRow style={{ padding: "3px" }}>
                <button
                  className='SeatCode'
                  style={{ backgroundColor: "blue" }}
                  disabled
                ></button>
                <span style={{ fontSize: "13px", fontWeight: "450" }}>
                  BOOKED WITH INF{" "}
                  <span role='img' aria-label='baby' title='emoji'>
                    👶
                  </span>
                </span>
              </MDBRow>
            </MDBCol>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "500",
                fontStyle: "italic",
                padding: "5px",
                color: "red"
              }}
            >
              * select passenger to enable seat map
            </span>
          </MDBRow>

          <MDBRow
            style={{
              borderStyle: "solid",
              padding: "20px",
              borderRadius: "11px"
            }}
            className='cloudy-knoxville-gradient'
          >
            <table
              style={{
                height: "320px",
                overflowY: "auto",
                overflowX: "auto",
                display: "block"
              }}
            >
              <thead>
                <tr>
                  <th></th>
                  <th style={{ textAlign: "center" }}>A</th>
                  <th style={{ textAlign: "center" }}>B</th>
                  <th style={{ textAlign: "center" }}>C</th>
                  <th style={{ textAlign: "center" }}> </th>
                  <th style={{ textAlign: "center" }}>D</th>
                  <th style={{ textAlign: "center" }}>E</th>
                  <th style={{ textAlign: "center" }}>F</th>
                </tr>
              </thead>
              <tbody>{seatMap}</tbody>
            </table>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SeatMap;
