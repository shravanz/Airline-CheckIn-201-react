import React, { Component } from 'react';
import { MDBContainer, MDBIcon, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput } from 'mdbreact';
class NewPassenger extends Component {

    state = {
        modal13: false
    };

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        const {selectedPassengerId } = this.props.passengerDetail;
        return (
            <MDBContainer>
                <MDBBtn color="primary" size='sm' gradient="blue" onClick={this.toggle(13)}  disabled={selectedPassengerId === "#"}>
                    Update 
                </MDBBtn>
                <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} size="md">
                    <MDBModalHeader className="text-center text-white blue-gradient darken-3" titleClass="w-100" tag="h5">
                        <MDBIcon icon="users" className="text-white mr-2" />
                        Update Passenger Detail
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div>
                            <form
                                className="needs-validation"
                                onSubmit={this.props.submitHandler}
                                noValidate
                            >
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.first_name}
                                            name="first_name"
                                            onChange={this.props.changeHandler}
                                            type="text"
                                            id="fistName"
                                            label="First name"
                                            required
                                        >
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>

                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.last_name}
                                            name="last_name"
                                            onChange={this.props.changeHandler}
                                            type="text"
                                            id="mlastName"
                                            label="Last name"
                                            required
                                        >
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.mobile_no}
                                            onChange={this.props.changeHandler}
                                            type="number"
                                            id="mobile_no"
                                            name="mobile_no"
                                            label="Mobile No"
                                            disabled
                                            required
                                        >
                                            <div className="valid-feedback">Looks good!</div>
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.date_of_birth}
                                            onChange={this.props.changeHandler}
                                            type="text"
                                            id="date_of_birth"
                                            name="date_of_birth"
                                            label="Date of birth"
                                        >
                                        </MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.passport}
                                            onChange={this.props.changeHandler}
                                            type="text"
                                            id="passport"
                                            name="passport"
                                            label="Passport"
                                        >
                                        </MDBInput>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <MDBInput
                                            value={this.props.passengerDetail.address}
                                            onChange={this.props.changeHandler}
                                            type="text"
                                            id="address"
                                            name="address"
                                            label="Address"
                                        >
                                        </MDBInput>
                                    </MDBCol>
                                </MDBRow>
                                <MDBModalFooter>
                                    <MDBBtn color="secondary" onClick={this.toggle(13)}>
                                        Cancel
                                    </MDBBtn>
                                    <MDBBtn color="primary"  type="submit" onClick={this.toggle(13)}  >
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







