import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { removeUserDetail } from "../../actions/UserAction";
import { connect } from "react-redux";
//import { GoogleLogout } from "react-google-login";
export class LogoutContainer extends Component {
  render() {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   <GoogleLogout
    //   clientId=""
    //   buttonText="Logout"
    //   onLogoutSuccess={logout}
    // >
    // </GoogleLogout>
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.props.removeUserDetail();
    return <Redirect to='/' />;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mapDispatchToProps = dispatch => {
  return {
    removeUserDetail: () => dispatch(removeUserDetail())
  };
};

export default connect(null, mapDispatchToProps)(LogoutContainer);
