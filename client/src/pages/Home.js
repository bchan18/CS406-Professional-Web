import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-page">
      <div className="header-box">
        <h1>Brian Chan</h1>
        <h2>QA Engineering Intern & Computer Science Student</h2>
        <div className="social-icons">
          <a 
            href="https://github.com/bchan18" 
            target="_blank" 
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a 
            href="https://www.linkedin.com/in/brianchan562/" 
            target="_blank" 
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
          <a 
            href="mailto:chanbria@oregonstate.edu" 
            className="social-icon"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
        <div className="resume-button-box">
          <a 
            href="/Brian_Chan_Resume.pdf" 
            download="Brian_Chan_Resume.pdf" 
            className="resume-button"
          >
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div className="section-box about-me">
        <h2>About me</h2>
        <p>
          I am a health professional transitioning into the tech industry with a strong foundation in both biological sciences and computer science. 
          With hands-on experience in automation and laboratory workflows, I have successfully optimized processes, improving efficiency by over 50% in my previous role. 
          I am currently completing a Bachelor of Science in Computer Science at Oregon State University with an expected graduation in June 2025.
        </p>
      </div>
      <div className="section-box education-skills">
        <div className="education">
          <h2>Education</h2>
          <p>
            <strong>Oregon State University</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Corvallis, OR 
            <br />
            Bachelor of Science in Computer Science &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;Expected June 2025
          </p>
          <p>
            <strong>University of California, Irvine</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; Irvine, CA
            <br />
            Bachelor of Science in Biological Sciences &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;June 2018
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li><strong>Programming Languages:</strong> Python, VENUS, SQL, HTML/CSS</li>
            <li><strong>Frameworks:</strong> Express, React, Node</li>
            <li><strong>Developer Tools:</strong> PyCharm, VS Code, Git, Figma, phpMyAdmin, Power BI</li>
            <li><strong>Databases:</strong> MySQL, MongoDB</li>
            <li><strong>Parallel Computing Technologies:</strong> OpenMP, CUDA, OpenCL</li>
          </ul>
        </div>
      </div>
      <div className="section-box experience">
        <h2>Experience</h2>
        <p>
          <div className="experience-header">
          <strong>The Testing Company</strong>
          <span>March 2022 - March 2023</span>
          </div>
          Automation Laboratory Associate
        </p>
        <ul>
          <li>
            Implemented automation workflow in the laboratory. Achieving turnaround time results in less than 6 hours
            compared to other competitors’ 24 hours turnaround time.
          </li>
          <li>
            Implemented automated sample accessioning which resulted in 50% efficiency compared to manual techniques.
          </li>
          <li>
            Troubleshot issues involving Hamilton automated liquid handling and performed daily and weekly maintenance.
          </li>
        </ul>
        <p>
          <div className="experience-header">
          <strong>CVS</strong>
          <span>March 2022 - March 2023</span>
          </div>
          Certified Pharmacy Technician
        </p>
        <ul>
          <li>Managed drop-off medication and filling of medication in a timely manner.</li>
          <li>Managed inventory of medication within pharmacy and kept up-to-date data log of inventory.</li>
          <li>Cleared any workflow on RxConnect and resolved any insurance issues.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;