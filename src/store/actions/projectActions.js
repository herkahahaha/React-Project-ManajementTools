export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // asny call to database
    const firestore = getFirestore();
    //ingat nama project yang kita miliki dikonsol firebase disini "projects" yg saya gunakan
    // ini kerangka awal input data kedalam projek firebase kita
    // .then dan .catch merupakan fungsi callback
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
