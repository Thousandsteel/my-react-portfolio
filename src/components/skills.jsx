
import React from "react";
import "../App.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        <div className="skill-bar">
          <div className="skill-title">HTML</div>
          <div className="skill-progress">
            <div className="skill-level" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-title">CSS</div>
          <div className="skill-progress">
            <div className="skill-level" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-title">JavaScript</div>
          <div className="skill-progress">
            <div className="skill-level" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-title">React</div>
          <div className="skill-progress">
            <div className="skill-level" style={{ width: "75%" }}>
              75%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
