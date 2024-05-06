import "./portfolio.css";

import IMG1 from "../../assets/farmer2c.png";
import IMG2 from "../../assets/glassmorphism.png";
import IMG3 from "../../assets/tic-tac-toe.png";
import IMG4 from "../../assets/blood tank.png";

import React from "react";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Farmer2Consumer website ",
      img: IMG1,
      description:
        "A crop selling website for farmers and it acts as a interface between farmers and consumers.",
      technologies: "Html | CSS | Javascript ",
      link: "https://yashwanth-kandregula.github.io/landingpage/",
      github: "https://github.com/Yashwanth-kandregula/landingpage",
    },
    {
      id: 2,
      title: "Glassmorphism login page",
      img: IMG2,
      description:
        "a simple login page with glassmorphism effect using html, css and javascript",
      technologies: "Html | CSS | Javascript",
      link: "https://yashwanth-kandregula.github.io/glassmorphism-login/?#",
      github: "https://github.com/Yashwanth-kandregula/glassmorphism-login",
    },
    {
      id: 3,
      title: "Blood tank",
      img: IMG4,
      description: "blood bank website",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://bb-rho-nine.vercel.app/ ",
      github: "https://github.com/Yashwanth-kandregula/BB",
    },
    {
      id: 4,
      title: "Tic-tac-toe game",
      img: IMG3,
      description:"A simple tic-tac-toe game using html, css and javascript",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "",
      github: "https://github.com/Yashwanth-kandregula/ya-/tree/main",
    },
  
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
