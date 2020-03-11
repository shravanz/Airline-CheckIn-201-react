import React, { Component } from 'react'
import Flight from '../components/Flight'
import { getFlightList } from '../../axios/FlightAPI'

export class FlightContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flightList: []
        }
    }

    componentDidMount() {
        let flightListPromises = getFlightList();
        flightListPromises.then(
            response => {
                let flights = response.data;
                flights.sort((a, b) => new Date(a.departureDate) - new Date(b.departureDate));
                this.setState({ flightList: flights });
            }
        );
    }

    render() {
        return (<Flight flightList={this.state.flightList} />)
    }
}

export default FlightContainer
