import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Judul Project - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quas molestias magni excepturi.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Hahahaha</div>
          <div>6th July, 8am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
