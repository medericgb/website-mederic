import React from "react";

function Home() {
  return (
    <div className="Home">
      <h2>Home Page</h2>
      <div>
        <h2>Mederic Joel</h2>
        <p>
          Je suis <a href="#">Médéric Joel</a>, Développeur d'applications,
          UI/UX Designer.
        </p>
        <div>
          <h3>Compétences techniques</h3>
          <ul>
            <li>HTML5 et CSS3</li>
            <li>Javascript ES6</li>
            <li>React JS</li>
            <li>React Native</li>
            <li>Node JS, Express</li>
            <li>Mongo DB et SQL</li>
            <li>Python</li>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>Design</h3>
          <ul>
            <li>Design d'interface</li>
            <li>Design d'experience</li>
            <li>Design graphique</li>
            <li>React Native</li>
          </ul>
          <h3>Outils utilisés</h3>
          <p>Adobe XD; Figma; Photoshop</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
