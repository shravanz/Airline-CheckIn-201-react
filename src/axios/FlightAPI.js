/////////// IMPORTING THE THIRD-PARTY MODULES AND CONFIGURATION URLS//////////////////////////
import axios from "axios";
import { FLIGHT_LIST_URL } from "../config/urls";
/////////// GET FLIGHTS LIST/////////////////////////////////////////////////////////////////
export const getFlightList = async () => {
  return await axios.get(FLIGHT_LIST_URL).then(response => response);
};
/////////////// ASSIGNING THE FLIGHT WITH ID/////////////////////////////////////////////////
export const assignedFlight = async id => {
  return await axios
    .get(FLIGHT_LIST_URL, {
      params: {
        id
      }
    })
    .then(response => response.data[0]);
};
//////////// UPDATING THE FLIGHT LIST///////////////////////////////////////////////////////
export const updateFlight = async (id, data) => {
  return await axios
    .patch(`${FLIGHT_LIST_URL}/${id}`, data)
    .then(response => response);
};
