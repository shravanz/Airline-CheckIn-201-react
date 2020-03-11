// Material Design for BootStrap
// THIS COMPONENT WILL USED FOR UPDATING THE PASSENGER ONLY ACTIVE FOR ADMIN ROLE
import React, { Component } from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdbreact";
class NewPassenger extends Component {
  state = {
    modal13: false
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  toggle = N => () => {
    let modalNumber = "modal" + N;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    const { selectedPassengerId } = this.props.passengerDetail;
    return (
      <MDBContainer>
        <MDBBtn
          color='primary'
          size='sm'
          gradient='blue'
          onClick={this.toggle(13)}
          disabled={selectedPassengerId === "#"}
        >
          Update
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal13}
          toggle={this.toggle(13)}
          size='md'
        >
          <MDBModalHeader
            className='text-center text-white near-moon-gradient'
            titleClass='w-100'
            tag='h5'
          >
            <MDBIcon icon='user-edit' className='text-white mr-2' />
            Update Passenger Detail
          </MDBModalHeader>
          <MDBModalBody>
            <div>
              <form
                className='needs-validation'
                onSubmit={this.props.submitHandler}
                noValidate
              >
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.first_name}
                      name='first_name'
                      onChange={this.props.changeHandler}
                      type='text'
                      id='fistName'
                      label='First Name'
                      required
                    >
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBInput>
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.last_name}
                      name='last_name'
                      onChange={this.props.changeHandler}
                      type='text'
                      id='mlastName'
                      label='Last Name'
                      required
                    >
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.mobile_no}
                      onChange={this.props.changeHandler}
                      type='number'
                      id='mobile_no'
                      name='mobile_no'
                      label='Mobile'
                      disabled
                      required
                    >
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBInput>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.date_of_birth}
                      onChange={this.props.changeHandler}
                      type='text'
                      id='date_of_birth'
                      name='date_of_birth'
                      label='Date of birth'
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.passport}
                      onChange={this.props.changeHandler}
                      type='text'
                      id='passport'
                      name='passport'
                      label='Passport'
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      value={this.props.passengerDetail.address}
                      onChange={this.props.changeHandler}
                      type='text'
                      id='address'
                      name='address'
                      label='Address'
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBModalFooter>
                  <MDBBtn color='danger' onClick={this.toggle(13)}>
                    Cancel
                  </MDBBtn>
                  <MDBBtn
                    color='success'
                    type='submit'
                    onClick={this.toggle(13)}
                  >
                    Update
                  </MDBBtn>
                </MDBModalFooter>
              </form>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NewPassenger;
