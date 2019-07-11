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
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("Signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducers;
