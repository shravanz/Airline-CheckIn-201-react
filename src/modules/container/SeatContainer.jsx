import React, { Component } from "react";
import SeatMap from "../components/SeatMap";
export class SeatContainer extends Component {
  render() {
    const bookedSeatMap = this.props.bookedSeatMap;
    let seats = null;
    if (this.props.passengerId === "#") {
      seats = Array(60).fill("DISABLED"); // ABCDEF * 10 => 60
    } else {
      seats = Array(60).fill(null);
      for (let i = 0; i < bookedSeatMap.length; i++) {
        seats[bookedSeatMap[i].seatNo] = "ACCEPTED";
        if (
          bookedSeatMap[i].wheelChair === "Yes" &&
          bookedSeatMap[i].infant === "Yes"
        ) {
          seats[bookedSeatMap[i].seatNo] = "ACCEPTED WITH WHEELCHAIR INFANT";
        } else if (bookedSeatMap[i].wheelChair === "Yes") {
          seats[bookedSeatMap[i].seatNo] = "ACCEPTED WITH WHEELCHAIR";
        } else if (bookedSeatMap[i].infant === "Yes") {
          seats[bookedSeatMap[i].seatNo] = "ACCEPTED WITH INFANT";
        }
        if (bookedSeatMap[i].paxId === this.props.passengerId) {
          seats[bookedSeatMap[i].seatNo] = "MODIFY";
        }
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
      <div>
        {
          <SeatMap
            passengerId={this.props.selectedPassengerId}
            passengerList={this.props.passengerList}
            flight={this.props.flight}
            onClick={this.props.onClick}
            bookedSeatMap={this.props.seatMap}
            seats={seats}
          />
        }
      </div>
    );
  }
}

export default SeatContainer;
