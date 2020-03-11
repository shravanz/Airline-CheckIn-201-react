/////////// IMPORTING THE THIRD-PARTY MODULES AND CONFIGURATION URLS//////////////////////////
import axios from "axios";
import { LOGIN_DETAILS_URL } from "../config/urls";
/////////////// LOCAL AUTHENCTICATION USING JSON SERVER LOGIN MODULE//////////////////////////
export const authenticateUser = async (username, password) => {
  return await axios
    .get(LOGIN_DETAILS_URL, {
      params: {
        email: username,
        password
      }
    })
    .then(response => response.data);
};
