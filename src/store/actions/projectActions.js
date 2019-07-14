// ini kerangka mengambil data yang ada dan yg telah ditambahkan kedalam database
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // asny call to database
    const firestore = getFirestore();
    /*ingat nama project yang kita miliki dikonsol firebase disini "projects" yg saya gunakan ini kerangka awal input data kedalam projek firebase kita .then dan .catch merupakan fungsi callback*/
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
