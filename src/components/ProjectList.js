import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      
          <div>
        <h2>My Projects</h2>
        <div id="project-list">
        {projects.map(project =>{
        return(
         <ProjectItem key={project.id} name={project.name} technologies={project.technologies} about={project.about}/>
         )} )}  </div>
      </div>
        
      
    </div>
      )}


export default ProjectList;
