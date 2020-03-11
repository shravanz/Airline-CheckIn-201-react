import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom'
export class Flight extends Component {

    render() {
        return (
            <MDBCard >
                <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
                    Flight List
                </MDBCardHeader>
                <MDBCardBody >
                    <MDBTable striped bordered hover small reponsive="true" scrollY maxHeight="200px">
                        <MDBTableHead>
                            <tr>
                                <th>#</th>
                                <th>Airline</th>
                                <th>Flight No</th>
                                <th>Dep Station</th>
                                <th>Arr Station</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th></th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.props.flightList && this.props.flightList.map(
                                (value, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1} </td>
                                        <td>{value.airline}</td>
                                        <td>{value.flightNo}</td>
                                        <td>{value.departureStation}</td>
                                        <td>{value.arrivalStation}</td>
                                        <td>{value.departureDate.substring(0, 10)}</td>
                                        <td>{value.departureDate.substring(11, 16)}</td>
                                        <td>
                                            <Link to={'/checkin/' + value.id} style={{ color: "blue" }}>Assign</Link>
                                        </td>
                                    </tr>
                                }
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default Flight
