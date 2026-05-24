import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded elite projects - No backend required!
  const defaultProjects = [
    {
      _id: '1',
      title: 'SIH (Smart India Hackathon)',
      description: 'Engineered a real-time security notification system utilizing Cybersecurity and Blockchain protocols for the Ministry of Defence.',
      prizePool: '₹1,50,000', 
      techStack: ['Cybersecurity', 'Blockchain', 'React', 'Python']
    },
    {
      _id: '2',
      title: 'SUVIDHA',
      description: 'A highly scalable digital platform architected to streamline accessibility and optimize user convenience through robust full-stack engineering.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      _id: '3',
      title: 'AI For Bharat',
      description: 'Architected and deployed complex machine learning pipelines and anomaly detection models under high-pressure, time-restricted environments.',
      techStack: ['Machine Learning', 'Python', 'NLP', 'Data Pipelines']
    },
    {
      _id: '4',
      title: 'AMD Slingshot',
      description: 'Advanced computing architecture developed for the national tour, focusing heavily on hardware-software integration and raw processing efficiency.',
      techStack: ['System Architecture', 'Hardware Optimization', 'C++']
    }
  ];

  const arsenalSkills = [
    {
      icon: "01.",
      title: "Python Ecosystem",
      desc: "Backend architecture, task automation, scripting, and scalable data dashboards.",
      level: "90%"
    },
    {
      icon: "02.",
      title: "Full Stack Development",
      desc: "End-to-end product delivery — wireframing to database integration.",
      level: "85%"
    },
    {
      icon: "03.",
      title: "Machine Learning",
      desc: "Deep focus on anomaly detection and generative threat identification.",
      level: "80%"
    },
    {
      icon: "04.",
      title: "Cybersecurity",
      desc: "Implementation of secure notification systems and blockchain integrity.",
      level: "85%"
    },
    {
      icon: "05.",
      title: "Data Engineering",
      desc: "Constructing robust data pipelines and scalable database architectures.",
      level: "85%"
    },
    {
      icon: "06.",
      title: "Cloud Architecture",
      desc: "Architecting resilient deployment pipelines, serverless infrastructure, and scalable cloud-native applications.",
      level: "85%"
    },
    {
      icon: "07.",
      title: "System Design",
      desc: "Engineering distributed systems with a focus on high availability, fault tolerance, and microservices.",
      level: "80%"
    },
    {
      icon: "08.",
      title: "Gaming & eSports",
      desc: "Competitive strategic execution, hardware optimization, and basic graphics engine concepts.",
      level: "100%"
    }
  ];

  useEffect(() => {
    // Simulate loading data by setting hardcoded projects
    setProjects(defaultProjects);
    setLoading(false);
  }, []);

  return (
    <>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-logo">VJ.</div>
          <div className="nav-links">
            <a href="#about">Profile</a>
            <a href="#skills">Arsenal</a>
            <a href="#projects">Works</a>
            <a href="#achievements">Milestones</a>
            <a href="#hall-of-fame">Vault</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-split" id="home">
          <div className="hero-left">
            <div className="availability-pill">
              <span className="dot"></span> AVAILABLE FOR STRATEGIC OPPORTUNITIES
            </div>
            
            {/* UPDATED: Name on a single line */}
            <h1>
              Vedant <span className="text-accent">Jadhav</span>
            </h1>
            
            <div className="tech-subtitle">
              Artificial Intelligence & Full-Stack Architecture
            </div>
            <p className="hero-bio">
              A software engineer and <strong>Smart India Hackathon 2025 Winner</strong>. Passionate about anomaly detection, deepfake analytics, and constructing elegant platforms from the ground up.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary" style={{textDecoration: 'none'}}>Explore Portfolio</a>
              <a href="#contact" className="btn-secondary" style={{textDecoration: 'none'}}>Inquire</a>
            </div>
          </div>

          <div className="hero-right">
            <a href="#sih-winner" className="sih-card">
              <h3 style={{fontStyle: 'italic'}}>SIH Winner</h3>
              <div className="prize">Grand Finale</div>
              <p style={{ marginBottom: '0.5rem' }}>Smart India Hackathon 2025</p>
              
              <div className="sih-card-prize-pool">Prize: ₹1,50,000</div>
              
              <div className="card-badges">
                <span className="card-badge">Cybersecurity</span>
                <span className="card-badge">Blockchain</span>
              </div>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          DISCOVER
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="container section-spacer" id="about" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="about-split">
          
          <div className="about-left">
            <div className="section-subtitle">The Vision</div>
            <h2 className="section-title">Who I <span className="text-accent" style={{fontStyle: 'italic'}}>Am</span></h2>
            
            <p className="about-text-content">
              I am a 1st-year B.Tech engineering student specializing in <strong>Artificial Intelligence & Machine Learning</strong> at JSPM University, Pune. 
            </p>
            <p className="about-text-content">
              From engineering real-time security alert systems to securing the top position in India's most prestigious competitive hackathon against <strong>13,91,884 students</strong>, my methodology is rooted in solving complex problems with refined technology.
            </p>
            <p className="about-text-content">
              I operate precisely at the intersection of deep analytical logic and minimalist architectural design.
            </p>
            
            <p className="about-text-content philosophy-text">
              "Engineering elegant realities through precision, logic, and relentless innovation."
            </p>
          </div>

          <div className="about-right">
            <div className="about-image-container">
              <img src="/vedant.jpg" alt="Vedant Jadhav Portrait" />
            </div>
          </div>

        </div>
      </div>

      {/* Skills Section */}
      <div className="container skills-section" id="skills">
        <div>
          <div className="section-subtitle">Capabilities</div>
          <h2 className="section-title">My <span className="text-accent" style={{fontStyle: 'italic'}}>Arsenal</span></h2>
          
          <div className="arsenal-grid">
            {arsenalSkills.map((skill, index) => (
              <div key={index} className="arsenal-card">
                <div className="arsenal-icon">{skill.icon}</div>
                <h3 className="arsenal-title">{skill.title}</h3>
                <p className="arsenal-desc">{skill.desc}</p>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Display Section */}
      <div className="container section-spacer" id="projects" style={{ paddingTop: '6rem' }}>
        <section>
          <div className="section-subtitle">Selected Works</div>
          <h2 className="section-title">Featured <span className="text-accent" style={{fontStyle: 'italic'}}>Projects</span></h2>
          
          {loading ? (
            <p style={{fontWeight: 400, color: 'var(--text-muted)'}}>Accessing archives...</p>
          ) : projects.length === 0 ? (
            <p style={{fontWeight: 400, color: 'var(--text-muted)'}}>No public projects available at this time.</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project._id} className="project-card">
                  <h3 style={{ color: 'var(--primary-accent)', marginTop: 0, fontStyle: 'italic' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>{project.description}</p>
                  
                  {project.prizePool && (
                    <p className="project-prize">Prize Pool: {project.prizePool}</p>
                  )}

                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', margin: '0.5rem 0', marginTop: 'auto' }}>
                    {project.techStack.map((tech, index) => (
                      <span key={index} style={{ borderBottom: '1px solid var(--border-hover)', paddingBottom: '0.2rem', fontSize: '0.65rem', color: 'var(--text-main)', letterSpacing: '1px', textTransform: 'uppercase' }}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Dedicated SIH Winner Section */}
      <div className="container section-spacer" id="sih-winner" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="sih-feature-split">
          
          <div className="sih-gallery">
            <div className="sih-img-placeholder">
              <img src="/image1.jpg" alt="Smart India Hackathon Event 1" />
            </div>
            <div className="sih-img-placeholder">
              <img src="/image2.jpg" alt="Smart India Hackathon Event 2" />
            </div>
            <div className="sih-img-placeholder">
              <img src="/image3.jpg" alt="Smart India Hackathon Event 3" />
            </div>
            <div className="sih-img-placeholder">
              <img src="/image4.jpg" alt="Smart India Hackathon Event 4" />
            </div>
          </div>

          <div className="sih-feature-details">
            <div className="sih-national-badge">
              National Winner
            </div>
            
            <h2 className="sih-huge-title">Smart India <br/><span className="text-accent" style={{fontStyle: 'italic'}}>Hackathon 2025</span></h2>
            <div className="sih-prize-text">₹1,50,000 Award</div>
            
            <p className="sih-desc-text">
              Secured first place competing against <strong>13,91,884 students</strong> from 6,497 institutes across the nation. Team STRAVOS engineered a bespoke real-time analytical solution for the Ministry of Defence.
            </p>
            
            <p className="sih-ps-text">
              Mandate: <strong>"User and Entity Behaviour Analytics for Internal Threat Identification"</strong>
            </p>

            <div className="sih-theme-badges">
              <span className="sih-bb">Cybersecurity Theme</span>
              <span className="sih-bb">Blockchain Protocol</span>
            </div>
          </div>

        </div>
      </div>

      {/* Unified Timeline Section */}
      <div className="container achievements-section" id="achievements">
        <div>
          <div className="section-subtitle" style={{ textAlign: 'center' }}>The Ascent</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Milestones & <span className="text-accent" style={{fontStyle: 'italic'}}>Education</span></h2>
          
          <div className="unified-timeline">
            
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <h4 className="timeline-title">Winner - Smart India Hackathon</h4>
              <div className="timeline-subtitle">Grand Finale • ₹1,50,000 Prize</div>
              <p className="timeline-desc">Secured 1st place competing against 13 Lakh+ students. Engineered a real-time security notification system utilizing Cybersecurity and Blockchain protocols for the Ministry of Defence.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2025 — 2026</div>
              <h4 className="timeline-title">Competitive Prototyping</h4>
              <div className="timeline-subtitle">UIDAI Data Hackathon & AI for Bharat</div>
              <p className="timeline-desc">Participated in multiple national-level hackathons. Architected prototypes and deployed machine learning pipelines under high-pressure, time-restricted environments.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2025 — 2029</div>
              <h4 className="timeline-title">B.Tech in Computer Science (AI & ML)</h4>
              <div className="timeline-subtitle">JSPM University, Pune</div>
              <p className="timeline-desc">Pursuing specialized engineering studies focusing on data structures, algorithmic design, and advanced neural networks.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2023 — 2025</div>
              <h4 className="timeline-title">Higher Secondary (12th Grade)</h4>
              <div className="timeline-subtitle">Cambridge Jr College</div>
              <p className="timeline-desc">Focused on core sciences and mathematics, building a strong analytical and problem-solving foundation for future engineering studies.</p>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <h4 className="timeline-title">Secondary Education (10th Grade)</h4>
              <div className="timeline-subtitle">Graduated with Distinction</div>
              <p className="timeline-desc">Achieved a solid 83.8% academic score, setting the initial stage for higher education in STEM fields.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Hall of Fame / Gallery Section */}
      <div className="container section-spacer" id="hall-of-fame" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="section-subtitle" style={{ textAlign: 'center' }}>The Vault</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Hall of <span className="text-accent" style={{fontStyle: 'italic'}}>Fame</span></h2>
        
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/image1.jpg" alt="Hall of Fame 1" />
          </div>
          <div className="gallery-item">
            <img src="/image2.jpg" alt="Hall of Fame 2" />
          </div>
          <div className="gallery-item">
            <img src="/image3.jpg" alt="Hall of Fame 3" />
          </div>
          <div className="gallery-item">
            <img src="/image4.jpg" alt="Hall of Fame 4" />
          </div>
          <div className="gallery-item">
            <img src="/image5.jpg" alt="Hall of Fame 5" />
          </div>
          <div className="gallery-item">
            <img src="/image6.jpg" alt="Hall of Fame 6" />
          </div>
          <div className="gallery-item">
            <img src="/image7.jpg" alt="Hall of Fame 7" />
          </div>
          <div className="gallery-item">
            <img src="/image8.jpg" alt="Hall of Fame 8" />
          </div>
        </div>
      </div>

      {/* Sleek Contact Section */}
      <div className="container section-spacer" id="contact" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="section-subtitle" style={{ textAlign: 'center' }}>Inquiries</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Let's <span className="text-accent" style={{fontStyle: 'italic'}}>Connect</span></h2>
        
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          
          <p className="contact-intro">
            Available for technical collaborations, architectural consulting, and full-stack engineering opportunities. Let us build the future.
          </p>

          <div className="contact-email-display">
            vedantjadhav30.7.2007@gmail.com
          </div>

          <div className="contact-buttons">
            <a href="https://github.com/vedant1256" target="_blank" rel="noreferrer" className="contact-btn btn-github">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/vedant-jadhav-8988a22a6/" target="_blank" rel="noreferrer" className="contact-btn btn-linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn Network
            </a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div>
              Pune (Wagholi), Maharashtra
            </div>
            <div style={{ color: 'var(--border)' }}>|</div>
            <div>
              +91 7620107045
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;