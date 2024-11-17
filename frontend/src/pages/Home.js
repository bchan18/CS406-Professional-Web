import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <h1>Brian Chan</h1>
        <div className="resume-button-box">
          <a 
            href="/Brian_Chan_Resume.pdf" 
            download="Brian_Chan_Resume.pdf" 
            className="resume-button"
          >
            <button>Resume</button>
          </a>
        </div>
        <h2>About me</h2>
          <p>I am a health professional transitioning into the tech industry with a strong foundation in both biological sciences and computer science. 
            With hands-on experience in automation and laboratory workflows, I have successfully optimized processes, improving efficiency by over 50% in my previous role. I
            am currently completing a Bachelor of Science in Computer Science at Oregon State University with an expected gradudation in June 2025.
          </p>
    <div className="education-skills">
      <div className="education">
        <h2>Education</h2>
        <p><strong>Oregon State University</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Corvallis, OR 
        <br />Bachelor of Science in Computer Science &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;Expected June 2025</p>
        
        <p><strong>University of California, Irvine</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; Irvine, CA
        <br />Bachelor of Science in Computer Science &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2018</p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, VENUS, SQL, HTML/CSS</li>
          <li><strong>Frameworks:</strong> Express, React, Node</li>
          <li><strong>Developer Tools:</strong> PyCharm, VS Code, Git, Figma, phpMyAdmin, Power BI</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Parallel Computing Technolgies:</strong> OpenMP, CUDA, OpenCL</li>
        </ul>
      </div>
    </div>
        <h2>Experience</h2>
          <p><strong>The Testing Company</strong> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; March 2022 - March 2023
          <br />Automation Laboratory Associate</p>
          <ul>
            <li>Implemented automation work flow in the laboratory. Achieving turnaround time results in less than 6 hours
            compared to other competitors 24 hours turnaround time.</li>
            <li>Implemented automated sample accessioning which resulted in 50% efficiency compared to manual techniques</li>
            <li>Troubleshoot issues involving Hamilton automated liquid handling and perform daily and weekly maintenance</li>
          </ul>
          <p><strong>CVS</strong> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; March 2022 - March 2023
          <br />Certified Pharmacy Technician</p>
          <ul>
            <li>Managed drop off medication and filling of medication in a timely manner</li>
            <li>Managed inventory of medication within pharmacy and kept up-to-date data log of inventory</li>
            <li>Cleared any workflow on RxConnect and resolved any insurance issues</li>
          </ul>
    </div>
  );
}

export default Home;