import React, { Component } from 'react'
import Header from './Header';
import FlightContainer from '../container/FlightContainer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class Home extends Component {
    render() {
        console.log(this.props.token)
        if (this.props.token === "") {
            return <Redirect to="/" />
        }
        return (
            <>
                <Header />
                <FlightContainer />
            </>
        )
    }
}

const mapStateToProps = state =>{
    return {
        token : state.token
    }
} 

export default connect(mapStateToProps) (Home)
