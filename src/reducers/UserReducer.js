const initialState = {
  role: "",
  token: "",
  userName: ""
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_DETAIL": {
      return {
        ...state,
        role: action.payload.role,
        token: action.payload.token,
        userName: action.payload.userName
      };
    }
    case "REMOVE_USER_DETAIL": {
      return { ...state, role: "", token: "", userName: "" };
    }
    default:
      return state;
  }
};
