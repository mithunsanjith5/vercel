import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Navbar from './Navbar.js';
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [showNavbar, setShowNavbar] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, []);
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode, handleScroll]);
  return (
    <div className="App">
      <Navbar darkMode={darkMode} show={showNavbar} setDarkMode={setDarkMode} />
      <header className="head">
        <div className="container">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <h1>MITHUN SANJITH</h1>
          <p className="title">Aspiring Software Developer</p>
          <p className="subtitle">Student at Jain (Deemed-to-be University)</p>
        </div>
      </header>
      <Section id="about" title="ABOUT ME">
                  <p>A dedicated Computer Science Student with a keen understanding of emerging technologies and software. Committed to continuous learning and professional growth, aiming to collaborate with dynamic teams. Passionate about contributing to an organization's success and spreading education for the greater good.</p>
      </Section>
      <Section id="skills" title="SKILLS">
        <ul className="skills">
          <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
        </ul>
      </Section>
     <Section id="internships" title="INTERNSHIPS">
  <div className="internship-list">
    <div className="internship">
      <h3>Ellucian - Cloud Intern </h3>
      <p>Worked on an ML-based incident management system using AWS Lambda, Bedrock, and LLMs like LLaMA 3.2. Built proactive/reactive modules that predicted and summarized incidents and recommended best responses. Integrated Slack APIs to automate war rooms. Developed a single dashboard with React to streamline workflows.Our solution proactively identified potential issues, enabling anticipatory measures that reduce incident
occurrence by 30–40% and cut triage, assignment, and resolution time by up to 30%.</p>
    </div>
    <div className="internship">
      <h3> Rural Handmade - IoT Intern </h3>
      <p>Managed IoT product inventory using sensor data collection and entered product data into database.Developed research blogs analyzing emerging IoT use cases and trends.Assisted in optimizing IoT device integration for improved remote monitoring and automation of supply chain.</p>
    </div>
  </div>
</Section>

      <Section id="projects" title="PROJECTS">
        <div className="project-grid">
          <ProjectCard
            title="AI Cyber-Assistant" 
            description="Built an intelligent banking Chatbot capable of handling user queries, managing transactions, and providing account insights with secure authentication."
            link="https://github.com/mithunsanjith5/CyberAssistant"
          />
          <ProjectCard
            title="AI DRIVEN VIRTUAL HEALTH PREDICTION MODEL"
            description="Developed a machine learning model to predict lung cancer risk based on patient data, enhancing early diagnosis and clinical decision-making."      
            link="https://github.com/mithunsanjith5/Language-Translation"
          />
          <ProjectCard
            title="LANGUAGE TRANSLATION"
            description="Built a real-time language translation web app using Streamlit and deep learning-based translation APIs for seamless multilingual communication."
          />
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <p>Email: mithunsanjith5@gmail.com</p>
        <p>Phone: +91 7845651055</p>
        <p>
          <a href="https://www.linkedin.com/in/mithun-sanjith-0a52a0271" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://github.com/mithunsanjith5" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </Section>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MITHUN SANJITH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
const Section = ({ id, title, children }) => (
  <section id={id}>
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);
const ProjectCard = ({ title, description, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);
export default App;