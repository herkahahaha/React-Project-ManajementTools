import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* kenapa disini pakai && agar data state yang lama bisa diparsing dengan yang baru */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
