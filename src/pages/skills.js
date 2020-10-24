import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './../styles/skills.css';
import { Container } from 'react-bootstrap';
import { PrismCode } from '../components/prismCode';

const html = `
<div id="About-me">
  <h3>DELORY</h3>
  <p>Erwan</p>
</div>`;

const css = `
* {
  padding: 0;
  margin: 0;
}`;

const js = `
function direBonjour() {
  alert('Bonjour !');
}`;

const sql = `
SELECT * FROM Competences
WHERE userID = 1;`;

const jsx = `
function App() {
  return(
    <WebSite />
  );
}`;

const Skills = () => {
  return(
    <div id="skills">
      <h2 className="skills-title"><FontAwesomeIcon icon={faCode} /> Mes compétences</h2>
      <Container>
        <PrismCode 
          code = {html}
          language = "html"
          plugins = {["line-numbers"]}
        />

        <PrismCode 
          code = {css}
          language = "css"
          plugins = {["line-numbers"]}
        />

        <PrismCode 
          code = {js}
          language = "js"
          plugins = {["line-numbers"]}
        />

        <PrismCode 
          code = {sql}
          language = "js"
          plugins = {["line-numbers"]}
        />

        <PrismCode 
          code = {jsx}
          language = "js"
          plugins = {["line-numbers"]}
        />
        <p>Je possède des compétences en déveleppement web avec les langages suivants: HTML, CSS, JavaScript, TypeScript, SQL, NodeJs, JSON, PHP.</p>
        <p>J'ai également des compétences sur les différents frameworks JavaScript comme React, Angular et VueJS.</p>
        <p>Hormis le développement web, j'ai des compétences en C/C++, Java, Git, Docker.</p>
      </Container>

    </div>
    
  );
}
export default Skills;