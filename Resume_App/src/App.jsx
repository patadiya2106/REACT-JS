
import "../public/css/style.css";


import profilePhoto from "../public/Rj4.jpg"; //



const Resume = () => {
  return (
    <div className="resume-container">
      {/* Left Column */}
      <div className="left-column">
        <img src={profilePhoto} alt="Rahul Patadiya" className="profile-photo" />
        <h1>Rahul Patadiya</h1>
        <h2>Full Stack Developer</h2>

        <div className="contact-info">
          <p><a href="mailto:rahulpatadiya07@gmail.com">rahulpatadiya07@gmail.com</a></p>
          <p><a href="tel:+918000828245">+91 80008 28245</a></p>
          <p>Mota Varachha, Surat</p>
          <p><a href="https://github.com/patadiya2106" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <p><a href="https://www.linkedin.com/in/rahul-patadiya-6b936b340" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>

        <div className="skills card">
          <h3>Technical Skills</h3>
          <ul>
            <li>C, JavaScript</li>
            <li>MongoDB</li>
            <li>Git, GitHub</li>
            <li>Node.js, Express.js</li>
            <li>REST API, JWT Auth</li>
            <li>HTML, CSS, Tailwind, Bootstrap</li>
          </ul>
        </div>

        <div className="skills card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </div>

        <div className="languages card">
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Gujarati</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <section>
          <h3>Profile</h3>
          <p>
            I'm a Full Stack Developer passionate about building scalable web applications and intuitive user experiences.
            With hands-on experience in both frontend and backend development, I bring complete solutions to life—from
            concept to deployment.
          </p>
        </section>

        <section>
          <h3>Education</h3>
          <ul>
            <li><strong>Higher Secondary School Certificate</strong>, SMT.L.L.KAKADIYA SEC HIGH.SEC SCHOOL (2021–2022)</li>
            <li><strong>Secondary School Certificate</strong>, SMT.L.L.KAKADIYA SEC HIGH.SEC SCHOOL (2017–2018)</li>
          </ul>
        </section>
        
        <section>
          <h3>Achievements</h3>
          <ul>
            <li>Developed and deployed 2+ live web applications with 95% positive user feedback.</li>
            <li>Consistently delivered projects before deadlines with high code quality.</li>
            <li>Actively contributed to open-source projects on GitHub.</li>
          </ul>
        </section>

        <section>
          <h3>Interests</h3>
          <p>Exploring AI-driven development, contributing to open-source, UI/UX design, and playing chess.</p>
        </section>
        <button onClick={()=>{window.print()}}>Resume</button>
      </div>
    </div>
  );
};



export default Resume;




