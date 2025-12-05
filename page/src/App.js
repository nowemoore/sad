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
            <p className="hero-subtitle">Studying the dynamics of human-AI decision-making to craft safeguards that keep AI-powered decision-making robust, human-centred, and reliable.</p>
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

          <div className="about-image-text-section">
            <div className="about-image-container">
              <img src={illustration1} alt="Illustration 1" className="about-image" />
            </div>
            <div className="about-text-container">
              <h3>Why We Do What We Do</h3>
              <p>
                All across the span of human history, societies have been built on the promise that greatness lies in every one of us having our own way to meaningfully contribute to our collective prosperity—all the way until now. As AI systems become more capable, humanity comes to face the so-far-unheard-of prospect that maybe none of us are all that necessary in keeping the System running, leading to <a href="https://arxiv.org/abs/2501.16946" target="_blank" rel="noopener noreferrer" className="inline-link">Gradual Disempowerment</a>.
              </p>
            </div>
          </div>

          <div className="about-image-text-section reverse">
            <div className="about-image-container">
              <img src={illustration2} alt="Illustration 2" className="about-image" />
            </div>
            <div className="about-text-container">
              <h3>AI & Decision-Making</h3>
              <p>
                The possibility of faster, higher returns forces humans to outsource decision-making to AI. AI can be implemented to directly make decisions (i.e. humans build agents that decide for us) or indirectly influence seemingly human choices (i.e. humans allow agents to steer our choices). At SAD Labs, we believe that as AI becomes more capable, humans must guarantee they hold real control over every decision, not just the impression of it. 
              </p>
              <p>
                Now in order to protect the integrity of human choice, humans must retain <strong>oversight, agency</strong>, and <strong>impact</strong> over their decisions. This means that they must be able to critically evaluate choices presented by AI, have the competency to make their own choices, and be able to see their decisions meaningfully affect outcomes. So far, there is no metric for any of these critical components of human decision-making when working with AI.
              </p>
            </div>
          </div>

          <div className="about-image-text-section">
            <div className="about-image-container">
              <img src={illustration3} alt="Illustration 3" className="about-image" />
            </div>
            <div className="about-text-container">
              <h3>Not All Choices Are Born Equal</h3>
              <p>
                Everything we do at SAD Labs is motivated by the understanding that the most critical decisions often happen in adversarial, judgment-impairing contexts. Human judgment is often impaired by conditions such as time pressure, information ambiguity, high stakes, and more. We ask how these conditions can help us understand inherited vulnenrabilities in model decision-making and failure modes of human-AI collaboration on interactive, decision-making tasks.

              </p>
            </div>
          </div>

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
                  <h4>Reliable Decision-Making by Models</h4>
                  <p>Exposing models to judgment-impairing conditions to understand the robustness of their decision-making standards.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="about-feature-text">
                  <h4>Robust Human-AI Collaboration</h4>
                  <p>Understanding human-AI cooperation failures on decision-making tasks under judgment-impairing conditions.</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="about-feature-text">
                  <h4>Targeted Safeguards</h4>
                  <p>Propose safeguards that appropriately address both model and HCI failure modes on critical decision-making.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Research Areas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years of Research Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Committed to Open Source</div>
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
                We're working to get our research output to you as soon as possible!
            </p>
          
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text" style={{color: 'white'}}>
            If you have questions about our work, would like to collaborate, or want to make a helpful suggestion, please reach out to Nikola via any of the channels below.
          </p>
          
          <div className="contact-social">     
            <a href="https://www.linkedin.com/in/nowemoore/" target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
            
            <a href="mailto:ndatkova@sas.upenn.edu" className="social-link">
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
