import React from "react";

const Resume = () => {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    // Add more proficiencies as needed
  ];

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="link-to-your-resume.pdf" download>
        Download Resume
      </a>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
