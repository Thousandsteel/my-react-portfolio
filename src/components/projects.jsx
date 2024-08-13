import React from "react";
import "../App.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>
            This is an image of project 1.{" "}
            <img
              src="/assets/images/Screenshot1.png"
              alt="project 1"
              className="project1"
            ></img>
          </p>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>
            This is an image of project 2.{" "}
            <img
              src="/assets/images/Capture2.PNG"
              alt="project 2"
              className="project1"
            ></img>
          </p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>
            This is an image of project 3.{" "}
            <img
              src="/assets/images/Capture4.PNG"
              alt="project 3"
              className="project1"
            ></img>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
