// Material Design for BootStrap
// THIS MODULE COMPONENET IS RESPONSIBLE FOR ADDING A NEW PASSENGER, ONLY ACTIVE FOR ADMIN USER
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
    const { first_name, last_name, mobile_no } = this.props.passengerDetail;
    // Validation
    let isSubmitButtonEnable =
      first_name.length > 0 && last_name.length > 0 && mobile_no.length === 10;
    return (
      <MDBContainer>
        <MDBBtn
          color='primary'
          size='sm'
          gradient='blue'
          onClick={this.toggle(13)}
        >
          Create
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
            <MDBIcon icon='user-check' className='text-white solid mr-2' />
            New Passenger Detail
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
                      onChange={this.props.changeHandler}
                      type='number'
                      id='mobile_no'
                      name='mobile_no'
                      label='Mobile'
                      required
                    >
                      <div className='valid-feedback'>Looks good!</div>
                    </MDBInput>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
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
                      onChange={this.props.changeHandler}
                      type='text'
                      id='passport'
                      name='passport'
                      label='Passport'
                    ></MDBInput>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBInput
                      onChange={this.props.changeHandler}
                      type='text'
                      id='address'
                      name='address'
                      label='Address'
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md='6'>
                    <MDBRow>
                      <MDBCol md='3'>Gender: </MDBCol>
                      <MDBCol md='4'>
                        <input
                          onChange={this.props.selectGender}
                          checked={
                            this.props.passengerDetail.gender === "Male"
                              ? true
                              : false
                          }
                          type='radio'
                          id='radio1'
                          value='Male'
                        />
                        <label style={{ paddingLeft: "1px" }}>
                          <b>Male</b>
                        </label>
                      </MDBCol>
                      <MDBCol md='5'>
                        <input
                          onChange={this.props.selectGender}
                          checked={
                            this.props.passengerDetail.gender === "Female"
                              ? true
                              : false
                          }
                          type='radio'
                          id='radio2'
                          value='Female'
                        />
                        <label style={{ paddingLeft: "1px" }}>
                          <b>Female</b>
                        </label>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol md='6'>
                    <MDBRow>
                      <MDBCol md='1'>
                        <input
                          type='checkbox'
                          id='infant'
                          onClick={this.props.hasInfant}
                        />
                      </MDBCol>
                      <MDBCol md='3'>
                        <b>Infant</b>
                      </MDBCol>
                      <MDBCol md='1'>
                        <input
                          type='checkbox'
                          id='wheelChair'
                          onClick={this.props.wheelChairRequired}
                        />
                      </MDBCol>
                      <MDBCol md='1'>
                        <b>WheelChair</b>
                      </MDBCol>
                    </MDBRow>
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
                    disabled={isSubmitButtonEnable} // {!isSubmitButtonEnable} enable/disabled adding a user
                  >
                    Create
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
