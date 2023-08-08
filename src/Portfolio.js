import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Lyk Song",
      image: "homepage.PNG",
      deployLink: "https://gurverm.github.io/lyrics-application/",
      githubLink: "https://github.com/gurverm/lyrics-application",
    },
    {
      title: "Eventopia",
      image: "horiseon sample image.jpg",
      deployLink: "https://eventopia-ea333846024a.herokuapp.com/",
      githubLink: "https://github.com/PacoCasillas/Eventopia",
    },
    
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <div className="links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

