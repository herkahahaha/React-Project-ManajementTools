export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // asny call to database
    const firestore = getFirestore();
    //ingat nama project yang kita miliki dikonsol firebase
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "herka",
        authorLastName: "hahaha",
        authorId: 1212121,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
