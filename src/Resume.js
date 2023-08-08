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
      <a href="https://docs.google.com/document/d/1WG-Mm9A-qUznjiGN5UTvewF_WgZEADBP/edit?usp=sharing&ouid=116002456890298908150&rtpof=true&sd=true" download>
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
