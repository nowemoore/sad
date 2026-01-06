import React from 'react';
import './App.css';
import nikolaImg from './assets/nikola.jpg';
import illustration1 from './assets/illustrative-picture-1.jpg';
import illustration2 from './assets/illustrative-picture-2.jpg';
import illustration3 from './assets/illustrative-picture-3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faHandshake, faShieldAlt, faUserClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <div className="hero-logo-letter" data-letter="S" style={{width: '35px', height: '35px', fontSize: '1.2rem'}}></div>
            <div className="hero-logo-letter" data-letter="A" style={{width: '35px', height: '35px', fontSize: '1.2rem'}}></div>
            <div className="hero-logo-letter" data-letter="D" style={{width: '35px', height: '35px', fontSize: '1.2rem'}}></div>
            Labs
          </a>

          <div 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <div className={`toggle-track ${darkMode ? 'dark' : 'light'}`}>
              <div className="toggle-slider">
                {darkMode ? '月' : '日'}
              </div>
            </div>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#research" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('research'); }}>
                Research
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

     {/* Home Section */}
      <section id="home" className="section hero-section">
        <div className="hero-content">
          <p className="hero-subtitle-top">Research Initiative for</p>
          <div className="hero-breathing-wrapper">
            <h1 className="hero-title">Secure AI-Powered Decision-Making</h1>
          </div>
            <div className="hero-divider"></div>
            <p className="hero-subtitle"><b>What kind of decision-makers are models? What kind of decision-makers do humans become in their wake?</b></p>
            <p className="hero-subtitle"> At SAD Labs, we're studying the dynamics of human-AI decision-making to craft safeguards that keep AI-powered decision-making robust, human-centred, and reliable.</p>

            <div className="hero-breathing-wrapper">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_b6_Kbt2QjgZpxau81UzShz7MihYweYKaluur-x8ag-gIlg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Express Interest
              </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">

          </div>
          <div className='about-text-container'>
            <h3>Did You Know That...</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className='stat-content'>
                <div className="stat-number">66%</div>
                <div className="stat-label">of workers who make decisions using AI don't check its accuracy</div>
                </div>
              </div>
              <div className="stat-card">
                <div className='stat-content'>
                <div className="stat-number">56%</div>
                <div className="stat-label">of workers who use AI make mistakes in their work because of it</div>
                </div>
              </div>
              <div className="stat-card">
                <div className='stat-content'>
                <div className="stat-number">43%</div>
                <div className="stat-label">is how much larger errors in estimates humans make when they rely on AI under time pressure</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-text-section">
            <div className="about-image-container">
              <img src={illustration1} alt="Illustration 1" className="about-image" />
            </div>
            <div className="about-text-container">
              <h4>Not All Decisions Are Born Equal</h4>
              <p>
              Did you know that 66% of workers use AI without checking accuracy—and 56% have already made mistakes because of it? Now imagine that decision is a <span style={{ color: '#549981'}}>medical diagnosis.</span> <span style={{ color: '#2f755f'}}>A loan approval.</span> <span style={{ color: '#00523e'}}>A military call. </span>All these decisions have one thing in common: they rarely happen under the luxury of ideal conditions. At SAD Labs, we study what happens when humans and AI make decisions together when it matters most and how to keep those decisions safe.
              </p>
            </div>
          </div>

          <div className="about-image-text-section reverse">
            <div className="about-image-container">
              <img src={illustration2} alt="Illustration 2" className="about-image" />
            </div>
            <div className="about-text-container">
              <h4>Measuring Control Before It's Gone</h4>
              <p>
                We're facing a slow erosion of human agency&mdash;not necessarily through AI takeover, but through <span style={{ color: '#549981'}}>Gradual Disempowerment</span>: the quiet outsourcing of judgment until humans are left holding the wheel of a car they no longer know how to drive. As AI becomes more capable, humans are outsourcing more decisions&mdash;but there's no metric for whether humans still hold real control. We're building one.
              </p>
            </div>
          </div>

          {/* <div className="about-image-text-section">
            <div className="about-image-container">
              <img src={illustration3} alt="Illustration 3" className="about-image" />
            </div>
            <div className="about-text-container">
              <h4>Not All Choices Are Born Equal</h4>
              <p>
                Everything we do at SAD Labs is motivated by the understanding that the most critical decisions often happen in adversarial, judgment-impairing contexts. Human judgment is often impaired by conditions such as time pressure, information ambiguity, high stakes, and more. We ask how these conditions can help us understand inherited vulnenrabilities in model decision-making and failure modes of human-AI collaboration on interactive, decision-making tasks.

              </p>
            </div>
          </div> */}

          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='about-text-container'>
              <h3>Our Approach</h3>
            </div>
            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <FontAwesomeIcon icon={faMicrochip} />
                </div>
                <div className="about-feature-text">
                  <h5>Evaluate the Reliability of Models' Decision-Making</h5>
                  <p>Exposing models to judgment-impairing conditions to understand the robustness of their decision-making standards.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="about-feature-text">
                  <h5>Understand the Robustness of Human-AI Collaboration</h5>
                  <p>Understanding human-AI cooperation failures on decision-making tasks under judgment-impairing conditions.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="about-feature-text">
                  <h5>Develop Targeted Safeguards</h5>
                  <p>Propose safeguards that appropriately address both model and HCI failure modes on critical decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="section-container">
            <h2 className="section-title">Our Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <img src={nikolaImg} alt="Nikola" className="team-avatar" />
                <h3 className="team-name">Nikola</h3>
                <p className="team-role">Lead Investigator</p>
                <p className="team-bio">Language, cognition, and computer scientist by training, curious about painting a positive picture of AI-powered futures.</p>
              </div>
              <div className="team-card team-card-placeholder">
                <div className="team-avatar-placeholder">
                  <FontAwesomeIcon icon={faUserClock} />
                </div>
                <h3 className="team-name">More to Come</h3>
                <p className="team-role">Future Team Members</p>
                <p className="team-bio">We're growing! More introductions coming soon.</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <p className="section-text">
                We're currently looking for both research and ops talent to join our team! Especially if you have background in <strong>AI Safety, evaluation science, HCI, Game Theory, Cognitive Science, AI Control</strong>, and related fields, we would love to hear from you.
              </p>
              <div className="team-button-wrapper">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_b6_Kbt2QjgZpxau81UzShz7MihYweYKaluur-x8ag-gIlg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>
                  Express Interest
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Research Section */}
      <section id="research" className="section research-section">
        <div className="section-container">
          <h2 className="section-title">Our Research</h2>
          <p className="section-text">
            We're working to get our research output to you as soon as possible! You're welcome to browse our Question Bank, where we've compiled the key questions driving our research. It's a living document, and we'd love to hear what you think is missing.
          </p>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div className="hero-breathing-wrapper" style={{ display: 'inline-block' }}>
              <a 
                href="https://docs.google.com/spreadsheets/d/1wTfQIJ1-oXM_OCHj2zrOCIXYehPZNHWIt-xvJza0D9o/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button" 
                style={{ display: 'inline-block', textDecoration: 'none' }}
              >
                Question Bank
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text" style={{color: 'white'}}>
            If you have questions about our work, would like to collaborate, or want to make a helpful suggestion, please reach out to us using the form linked below!
          </p>
          
          <div className="contact-social">     
            <a href="https://forms.gle/AJGVB791Qw48QAWdA" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SAD Labs. All rights reserved. Based out of London, UK.</p>
      </footer>
    </div>
  );
}

export default App;
