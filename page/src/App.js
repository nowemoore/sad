import React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import nikolaImg from './assets/nikola.jpg';
import illustration1 from './assets/illustrative-picture-1.jpg';
import illustration2 from './assets/illustrative-picture-2.jpg';
import illustration3 from './assets/illustrative-picture-3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faListCheck, faGauge, faShieldAlt, faUserClock, faWaveSquare, faGripLines, faTableCells, faArrowRightFromBracket , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const statsRef = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const visibleThreshold = 0.5;
                if (entry.intersectionRatio >= visibleThreshold) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        },
        {
            threshold: [0, 0.2, 0.5, 0.8],
            rootMargin: '0px'
        }
    );

    const animatedElements = document.querySelectorAll(`
        .from-left,
        .from-right,
        .from-bottom,
        .stat-card,
        .section-title,
        .section-text,
        .about-text-container,
        .about-text-container h3,
        .about-text-container h4,
        .about-text-container p,
        .about-image-container,
        .approach-item,
        .team-card,
        .team-button-wrapper,
        .contact-social,
        .footer
    `);

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);

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
          <p className="hero-subtitle-top from-bottom">Research Initiative for</p>
          <div className="hero-breathing-wrapper">
            <h1 className="hero-title from-bottom">Secure AI-Powered Decision-Making</h1>
          </div>
            <div className="hero-divider from-bottom"></div>
            <p className="hero-subtitle from-bottom"><b>What kind of decision-makers are models? What kind of decision-makers do we become in their wake?</b></p>
            <p className="hero-subtitle from-bottom" style={{maxWidth: '600px', margin: '3rem auto'}}> At SAD Labs, we build tools that help professionals turn AI-assisted decisions into measurable, reviewable processes.</p>

            <div className="hero-breathing-wrapper">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_b6_Kbt2QjgZpxau81UzShz7MihYweYKaluur-x8ag-gIlg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="cta-button from-bottom" style={{ display: 'inline-block', textDecoration: 'none' }}>
                Express Interest
              </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <h2 className="section-title from-bottom">About Us</h2>
          <p className="section-text from-bottom">
            We study how AI recommendations shape real decisions in real conditions. Our work focuses on measurement, evaluation, and practical safeguards for human–AI collaboration in professional settings.
          </p>
          <div className="about-content">
          </div>

          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><div className='about-text-container'>
              <h3>Our Top Priorities</h3>
              
               <div className="approach-grid">
                  <div className="approach-item from-left">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faGauge} />
                      </div>
                      <h5>Agency Monitoring Tools</h5>
                      <p>We build metrics to track human agency and monitor decision-making autonomy over time so that you always keep the final say.</p>
                  </div>
                  
                  <div className="approach-item from-bottom">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faListCheck} />
                      </div>
                      <h5>Context-Aware Evaluation Protocols</h5>
                      <p>We put a number on how robust model decision-making remains when real-world chaos hits by focusing on situations designed to make decisions difficult.</p>
                  </div>
                  
                  <div className="approach-item from-right">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faShieldAlt} />
                      </div>
                      <h5>Safeguards against Disempowernment</h5>
                      <p>We test interventions that keep humans at the center of decision-making. Models should work for not instead of you.</p>
                  </div>
              </div>
            </div>
          </div>
          
          <div className='about-text-container' ref={statsRef}>
              <h3>Did You Know That...</h3>
              <div className="stats-grid">
                  <div className="stat-card from-left">
                      <div className='stat-content'>
                          <div className="stat-number">66%</div>
                          <div className="stat-label">of workers who make decisions using AI don't check its accuracy?</div>
                      </div>
                  </div>
                  <div className="stat-card from-bottom">
                      <div className='stat-content'>
                          <div className="stat-number">56%</div>
                          <div className="stat-label">of workers who use AI make mistakes in their work because of it?</div>
                      </div>
                  </div>
                  <div className="stat-card from-right">
                      <div className='stat-content'>
                          <div className="stat-number">43%</div>
                          <div className="stat-label">inflation in errors occurs when time-pressured decision-makers lean into AI?</div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="about-image-text-section">
            <div className="about-image-container from-left">
              <img src={illustration1} alt="Illustration 1" className="about-image" />
            </div>
            <div className="about-text-container from-right">
              <h4>Why Is This Bothering Us</h4>
              <p>
              Most people who use AI at work don't verify its process, and most processes that go unverified result in magnitudes of eror much higher than usual. Every error missed puts the next decision at risk. Now imagine that decision is a <span style={{ color: '#549981'}}>medical diagnosis.</span> <span style={{ color: '#2f755f'}}>A loan approval.</span> <span style={{ color: '#00523e'}}>A military call. </span>All these decisions have one thing in common: they rarely happen under the luxury of ideal conditions. At SAD Labs, we study what happens when humans and AI make decisions together when it matters most and how to keep those decisions safe.
              </p>
            </div>
          </div>

          <div className="about-image-text-section reverse">
            <div className="about-image-container from-right">
              <img src={illustration2} alt="Illustration 2" className="about-image" />
            </div>
            <div className="about-text-container from-left">
              <h4>What Problem Are We Solving</h4>
              <p>
                We're facing a slow erosion of human agency&mdash;not necessarily through AI takeover, but through <span style={{ color: '#549981'}}>Gradual Disempowerment</span>: the quiet outsourcing of judgment until humans are left holding the wheel of a car they no longer know how to drive. As AI becomes more capable, humans are outsourcing more decisions&mdash;but there's <span style={{ color: '#00523e'}}>no metric</span> for whether humans still hold real control. We're building one.
              </p>
            </div>
          </div>

          <div className="about-image-text-section">
            <div className="about-image-container from-left">
              <img src={illustration3} alt="Illustration 3" className="about-image" />
            </div>
            <div className="about-text-container from-right">
              <h4>What Are We Hoping To Achieve</h4>
              <p>
                We believe AI at its best expands what you're capable of. Our mission is to help people use AI with <span style={{ color: '#2f755f'}}>clarity</span> and <span style={{ color: '#2f755f'}}>confidence</span>, while preserving the judgment and expertise that make independent decision-making possible. We want you to trust your AI tools and understand how much it plays into your decisions, always knowing where their input ends and yours begin.
              </p>
            </div>
          </div>

          <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='about-text-container'>
              <h3>What Makes Us Different?</h3>
              
               <div className="approach-grid">
                  <div className="approach-item from-left">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faWaveSquare} />
                      </div>
                      <h5>We Design for Imperfection</h5>
                      <p>We understand that not all decisions are born equal. We study decisions made under <span style={{ color: '#2f755f'}}>judgment impairing conditions</span> to account for it.</p>
                  </div>

                  <div className="approach-item from-bottom">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faGripLines  } />
                      </div>
                      <h5>We Draw the Line</h5>
                      <p>We seek the boundary between <span style={{ color: '#2f755f'}}>helpful augmentation</span> and <span style={{ color: '#2f755f'}}>displacement of choice</span> and use it to inform our metrics.</p>
                  </div>
                  
                  <div className="approach-item from-bottom">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faTableCells } />
                      </div>
                      <h5>We Define Risk by Features, Not Examples</h5>
                      <p>We identify which types of tasks invite failures in human-AI problem-solving collaboration, so safeguards can be <span style={{ color: '#2f755f'}}>targeted, not blanket</span>.</p>
                  </div>
                  
                  {/* <div className="approach-item from-right">
                      <div className="approach-icon">
                          <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      </div>
                      <h5>Our Work Does Not Stay Inside the Lab</h5>
                      <p>Asking hard questions matters. Making the answers useful for everyone matters even more. We design <span style={{ color: '#2f755f'}}>practical tools</span> to protect your agency in the wild.</p>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="section-container">
            <h2 className="section-title from-bottom">Our Team</h2>
            <div className="team-grid">
              <div className="team-card from-left">
                <img src={nikolaImg} alt="Nikola" className="team-avatar" />
                <h3 className="team-name">Nikola</h3>
                <p className="team-role">Lead Investigator</p>
                <p className="team-bio">Language, cognition, and computer scientist by training, curious about painting a positive picture of AI-powered futures.</p>
              </div>
              <div className="team-card team-card-placeholder from-right">
                <div className="team-avatar-placeholder">
                  <FontAwesomeIcon icon={faUserClock} />
                </div>
                <h3 className="team-name">More to Come</h3>
                <p className="team-role">Future Team Members</p>
                <p className="team-bio">We're growing! More introductions coming soon.</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <p className="section-text from-bottom">
                We're currently looking for both research and ops talent to join our team! Especially if you have background in <strong>AI Safety, evaluation science, HCI, Game Theory, Cognitive Science, AI Control</strong>, and related fields, we would love to hear from you.
              </p>
              <div className="team-button-wrapper from-bottom">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_b6_Kbt2QjgZpxau81UzShz7MihYweYKaluur-x8ag-gIlg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="cta-button from-bottom" style={{ display: 'inline-block', textDecoration: 'none' }}>
                  Join the Team
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Research Section */}
      <section id="research" className="section research-section">
        <div className="section-container">
          <h2 className="section-title from-bottom">Our Research</h2>
          <p className="section-text from-bottom">
            We're working to get our research output to you as soon as possible! In the meantime, you're welcome to browse our <span style={{ color: '#549981'}}>Question Bank</span>, where we've compiled questions relevant to our research and shared them <span style={{ color: '#549981'}}>so that you can work on them too</span>. It's a living document, and we'd love to hear what you think is missing.
          </p>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <div className="hero-breathing-wrapper" style={{ display: 'inline-block' }}>
              <a 
                href="https://docs.google.com/spreadsheets/d/1wTfQIJ1-oXM_OCHj2zrOCIXYehPZNHWIt-xvJza0D9o/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button from-bottom" 
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
          <h2 className="section-title from-bottom">Contact Us</h2>
          <p className="section-text from-bottom" style={{color: 'white'}}>
            If you have questions about our work, would like to collaborate, or want to make a helpful suggestion, please reach out to us using the form linked below!
          </p>
          
          <div className="contact-social from-bottom">     
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
