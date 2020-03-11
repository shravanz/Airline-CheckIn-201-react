// Material Design for BootStrap
// THIS COMPONENT WILL BE UPDATING THE MEAL AND ANCILLARY ITEM WITH SELECTED RADIO BUTTON IN ADMIN ROLE AND ALSO UPDATING JSON FILE
import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBCardHeader,
  MDBCard,
  MDBCardBody
} from "mdbreact";

export class MealItem extends Component {
  render() {
    const { newItem, items, service } = this.props.state;

    return (
      <MDBCard style={{ marginTop: "2px" }}>
        <MDBCardHeader
          tag='h6'
          className='text-center font-weight-bold text-uppercase py-3 heavy-rain-gradient'
        >
          <MDBRow>
            <MDBCol>
              <input
                onChange={this.props.selectMealItem}
                checked={service === "Meal" ? true : false}
                type='radio'
                id='radio1'
                value='Male'
              />
              <label style={{ paddingLeft: "1px", textAlign: "center" }}>
                <b>Meal</b>
              </label>
            </MDBCol>
            <MDBCol>
              <input
                onChange={this.props.selectAncillary}
                checked={service === "Ancillary" ? true : false}
                type='radio'
                id='radio1'
                value='Female'
              />
              <label style={{ paddingLeft: "1px" }}>
                <b>Ancillary</b>
              </label>
            </MDBCol>
          </MDBRow>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <form onSubmit={this.props.handleSubmit}>
              <MDBRow>
                <MDBCol size='6'>
                  <input
                    type='text'
                    id='MealItem'
                    className='form-control'
                    onChange={this.props.handleChange}
                    value={newItem}
                  />
                </MDBCol>
                <MDBCol size='5'>
                  <MDBBtn color='success' type='submit' size='sm'>
                    Add{" "}
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
            <MDBRow
              style={items.length > 0 ? { border: "border-primary" } : {}}
              className='py-3'
            >
              {items.map((item, index) => (
                <MDBBtn
                  key={index}
                  rounded
                  outline
                  color='secondary'
                  size='md'
                  value={item}
                  onClick={this.props.handleRemove}
                >
                  {item}
                </MDBBtn>
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default MealItem;
