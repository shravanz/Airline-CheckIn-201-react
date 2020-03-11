import axios from 'axios';
import { LOGIN_DETAILS_URL } from '../config/urls';

export const authenticateUser = async (username, password) => {
    return await axios.get(LOGIN_DETAILS_URL, {
        params: {
            email: username,
            password: password
        }
    }).then(response =>response.data)
}



