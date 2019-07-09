export const createProject = project => {
  return (dispatch, getState) => {
    // asny call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
