import React, { Component } from 'react';
import '../../css/Seat.css';

export class Seat extends Component {

    render() {
        let key = this.props.disableSeat;
        let seat = '';

        switch (key) {
            case 'DISABLED': seat = (<p value={this.props.value} className="Seat" disabled style={{ backgroundColor: "gray" }} >
            </p>);
                break;
            case 'MODIFY': seat = (<button value={this.props.value} className="Seat" onClick={this.props.onClick} style={{ backgroundColor: "rgba(255, 0, 255, 0.3)" }}  >
            </button>);
                break;
            case 'ACCEPTED': seat = (
                <button value={this.props.value} className="Seat" onClick={this.props.onClick} disabled style={{ backgroundColor: "#45cafc" }}  >
                </button>);
                break;
            case 'ACCEPTED WITH WHEELCHAIR INFANT': seat = (
                <button value={this.props.value} className="Seat" onClick={this.props.onClick} disabled style={{ backgroundColor: "green" }}  >
                </button>);
                break;
            case 'ACCEPTED WITH WHEELCHAIR': seat = (
                <button value={this.props.value} className="Seat" onClick={this.props.onClick} disabled style={{ backgroundColor: "red" }}  >
                </button>);
                break;
            case 'ACCEPTED WITH INFANT': seat = (
                <button value={this.props.value} className="Seat" onClick={this.props.onClick} disabled style={{ backgroundColor: "blue" }}  >
                </button>);
                break;
            default:
                seat = (<button value={this.props.value} className="Seat" onClick={this.props.onClick} style={{ backgroundColor: "rgba(255, 255, 71, 0.2)" }}>
                </button>);
        }
        return seat;
    }
}
export default Seat;
