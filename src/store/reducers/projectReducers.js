const initState = {
  projects: [
    { id: "1", title: "Cara bikin web", content: "auooooaoaooaoooaoaoaoa" },
    { id: "2", title: "Cara bikin anak", content: "auooooaoaooaoooaoaoaoa" },
    { id: "3", title: "Cara bikin kue", content: "auooooaoaooaoooaoaoaoa" }
  ]
};

const projectReducers = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducers;
