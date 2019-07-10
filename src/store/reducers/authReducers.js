const initState = {
  authError: null
};

const authReducers = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login error"
      };
    case "LOGIN_SUCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducers;
