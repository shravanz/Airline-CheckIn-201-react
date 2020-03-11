import axios from "axios";
import { PASSENGER_DETAILS_URL } from "../config/urls";

export const fetchFlightPassengers = async flightId => {
  return await axios
    .get(PASSENGER_DETAILS_URL, { params: { flight_id: flightId } })
    .then(response => response.data);
};

///////////////////CREATING A NEW PASSENGER UPDATING JSON FILE////////////////////////////////////////////////
export const createNewPassenger = async data => {
  return axios.post(PASSENGER_DETAILS_URL, data).then(response => response);
};
///////////////////UPDATING A SEAT AND STATUS WITH JSON FILE////////////////////////////////////////////////
export const updatePassengerSeatAndStatus = async (id, data) => {
  return axios
    .patch(`${PASSENGER_DETAILS_URL}/${id}`, data)
    .then(response => response);
};
///////////////////UPDATE PASSENGER DEATIL FROM JSON FILE///////////////////////////////////////////////////
export const updatePassengerDetail = async (id, data) => {
  return axios
    .patch(`${PASSENGER_DETAILS_URL}/${id}`, data)
    .then(response => response);
};
/////////////////UPDATE MEAL ARRAY FROM PASSENGER LIST FROM JSON FILE///////////////////////////////////////
export const updatePassengerMealItem = async (id, data) => {
  return axios
    .patch(`${PASSENGER_DETAILS_URL}/${id}`, data)
    .then(response => response);
};
////////////////UPDATE ANCILLARY SERVICE FROM JSON FILE /////////////////////////////////////////////////////
export const updatePassengerAncillary = async (id, data) => {
  return axios
    .patch(`${PASSENGER_DETAILS_URL}/${id}`, data)
    .then(response => response);
};
