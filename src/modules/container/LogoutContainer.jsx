import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {removeUserDetail} from '../../actions/UserAction'
import {connect} from 'react-redux'

export class LogoutContainer extends Component {

    // constructor(props){
    //     super(props)
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('role');
    // }

    render() {
        this.props.removeUserDetail();
        return <Redirect to='/'/>
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeUserDetail : () => dispatch(removeUserDetail())
    }
}

export default connect(null,mapDispatchToProps)(LogoutContainer)
