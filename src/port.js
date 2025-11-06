import React, { useState, useEffect, useRef } from 'react';
import { Camera, Cloud, Database, Code, Server, Zap, Mail, Linkedin, ChevronDown, Menu, X, ArrowRight, Cpu, Layout, GitBranch } from 'lucide-react';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${particle.opacity})`;
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const techStack = {
    frontend: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'React Flow'],
    backend: ['Python', 'Django', 'FastAPI', 'SQL', 'PL/SQL'],
    cloud: ['Azure ADF', 'Azure Databricks', 'Azure Synapse', 'AWS S3', 'AWS Lambda'],
    dataEngineering: ['PySpark', 'Apache Kafka', 'Apache Spark', 'ETL/ELT'],
    databases: ['PostgreSQL', 'Azure SQL', 'MySQL', 'Snowflake'],
    devops: ['Git', 'Azure DevOps', 'Terraform', 'CI/CD'],
    visualization: ['Power BI', 'DAX', 'Pandas', 'Matplotlib']
  };

  const projects = [
    {
      title: 'GTN Automation - Pharmaceuticals Company',
      company: 'Mushroom Solutions',
      period: 'April 2025 - Present',
      description: 'End-to-end data engineering solution streamlining financial data processing.',
      tech: ['Azure Data Factory', 'PySpark', 'Azure Synapse', 'Power BI', 'Terraform'],
      highlights: [
        'Designed scalable ETL pipelines with parameterized workflows',
        'Built distributed processing using Azure Databricks & Delta Lake'
      ]
    },
    {
      title: 'Shell PLC Integration Platform',
      company: 'Wipro',
      period: 'Dec 2022 - April 2023',
      description: 'Credit card transaction management system for fuel purchases.',
      tech: ['Azure Data Factory', 'PySpark', 'Azure Stream Analytics', 'Power BI'],
      highlights: [
        'Enhanced data workflows with 25% efficiency improvement',
        'Real-time analytics using Azure Stream Analytics'
      ]
    },
    {
      title: 'Data Lineage Visualization System',
      company: 'Mushroom Solutions',
      period: '2024-2025',
      description: 'Dynamic graph-based system for visualizing data pipelines.',
      tech: ['React.js', 'React Flow', 'Django', 'PostgreSQL'],
      highlights: [
        'Built interactive flow diagrams with zoom & minimap',
        'RESTful API integration for real-time data'
      ]
    }
  ];

  const experience = [
    { company: 'Mushroom Solutions', role: 'Software Engineer', period: 'April 2025 - Present', description: 'Full-stack development & Azure data engineering' },
    { company: 'Fusion Plus', role: 'Software Engineer', period: 'July 2024 - March 2025', description: 'Full-stack web development & data solutions' },
    { company: 'Wipro', role: 'Project Engineer', period: 'Dec 2022 - April 2023', description: 'Front-end development & data engineering' }
  ];

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #020617, #1e3a8a, #0f172a)',
      color: 'white',
      overflowX: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <canvas ref={canvasRef} style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0}} />

      {/* Navigation */}
      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(59, 130, 246, 0.2)'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <div style={{width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Code size={24} />
            </div>
            <span style={{fontSize: '1.25rem', fontWeight: 'bold', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Malik Hussain
            </span>
          </div>
          <div style={{display: 'flex', gap: '2rem'}}>
            {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{color: '#d1d5db', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => e.target.style.color = '#60a5fa'} onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '64px', zIndex: 1}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10, padding: '0 1rem'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '9999px', padding: '0.5rem 1rem', fontSize: '0.875rem', color: '#93c5fd', marginBottom: '2rem'}}>
            <Zap size={16} />
            <span>Full-Stack Data Engineer</span>
          </div>

          <h1 style={{fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', background: 'linear-gradient(to right, #60a5fa, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Mohammed Malik Hussain
          </h1>

          <p style={{fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: '#d1d5db', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem'}}>
            Crafting scalable data pipelines and modern web applications with{' '}
            <span style={{color: '#60a5fa', fontWeight: '600'}}>React</span>,{' '}
            <span style={{color: '#c084fc', fontWeight: '600'}}>Python</span>, and{' '}
            <span style={{color: '#22d3ee', fontWeight: '600'}}>Cloud Technologies</span>
          </p>

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem'}}>
            <a href="#projects" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'linear-gradient(to right, #2563eb, #9333ea)', borderRadius: '0.5rem', fontWeight: '600', textDecoration: 'none', color: 'white', transition: 'all 0.3s', border: 'none', cursor: 'pointer'}}>
              <span>View Projects</span>
              <ArrowRight size={20} />
            </a>
            <a href="#contact" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '0.5rem', fontWeight: '600', textDecoration: 'none', color: 'white', transition: 'all 0.3s', cursor: 'pointer'}}>
              Get in Touch
            </a>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto'}}>
            {[
              { icon: Layout, label: 'Frontend', color: 'linear-gradient(to bottom right, #3b82f6, #22d3ee)' },
              { icon: Server, label: 'Backend', color: 'linear-gradient(to bottom right, #9333ea, #ec4899)' },
              { icon: Cloud, label: 'Cloud', color: 'linear-gradient(to bottom right, #22d3ee, #3b82f6)' },
              { icon: Database, label: 'Data Eng', color: 'linear-gradient(to bottom right, #ec4899, #9333ea)' }
            ].map((item, i) => (
              <div key={i} style={{padding: '1.5rem', backgroundColor: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '1rem', transition: 'all 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'; e.currentTarget.style.transform = 'scale(1.05)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'; e.currentTarget.style.transform = 'scale(1)';}}>
                <div style={{width: '48px', height: '48px', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', transition: 'transform 0.3s', background: item.color}}>
                  <item.icon size={24} />
                </div>
                <p style={{fontSize: '0.875rem', color: '#d1d5db', fontWeight: '500'}}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{position: 'relative', padding: '5rem 1rem', zIndex: 1}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Featured Projects
          </h2>
          <p style={{textAlign: 'center', color: '#9ca3af', fontSize: '1.125rem', marginBottom: '4rem'}}>
            Real-world solutions driving business impact
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            {projects.map((project, i) => (
              <div key={i} style={{position: 'relative', backgroundColor: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s', cursor: 'pointer'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'; e.currentTarget.style.transform = 'scale(1.05)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'; e.currentTarget.style.transform = 'scale(1)';}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <div style={{width: '48px', height: '48px', background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <GitBranch size={24} />
                  </div>
                  <span style={{fontSize: '0.75rem', color: '#9ca3af', backgroundColor: 'rgba(71, 85, 105, 0.5)', padding: '0.25rem 0.75rem', borderRadius: '9999px', height: 'fit-content'}}>
                    {project.period}
                  </span>
                </div>

                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>{project.title}</h3>
                <p style={{fontSize: '0.875rem', color: '#60a5fa', marginBottom: '0.75rem'}}>{project.company}</p>
                <p style={{fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem'}}>{project.description}</p>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
                  {project.tech.map((tech, j) => (
                    <span key={j} style={{fontSize: '0.875rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#93c5fd', padding: '0.375rem 0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(59, 130, 246, 0.3)'}}>{tech}</span>
                  ))}
                </div>

                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                  {project.highlights.map((highlight, j) => (
                    <li key={j} style={{fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.5rem'}}>
                      <span style={{color: '#60a5fa', marginRight: '0.5rem'}}>▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{position: 'relative', padding: '5rem 1rem', zIndex: 1, backgroundColor: 'rgba(15, 23, 42, 0.3)'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Tech Stack
          </h2>
          <p style={{textAlign: 'center', color: '#9ca3af', fontSize: '1.125rem', marginBottom: '4rem'}}>
            Technologies I work with daily
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {Object.entries(techStack).map(([category, skills], i) => (
              <div key={i} style={{backgroundColor: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{width: '40px', height: '40px', background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem'}}>
                    <Cpu size={20} />
                  </div>
                  <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'capitalize'}}>
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                </div>

                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {skills.map((skill, j) => (
                    <span key={j} style={{fontSize: '0.875rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#93c5fd', padding: '0.375rem 0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(59, 130, 246, 0.3)'}}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{position: 'relative', padding: '5rem 1rem', zIndex: 1}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Experience
          </h2>
          <p style={{textAlign: 'center', color: '#9ca3af', fontSize: '1.125rem', marginBottom: '4rem'}}>
            My professional journey
          </p>

          <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', left: '32px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #3b82f6, #9333ea)'}}></div>

            {experience.map((exp, i) => (
              <div key={i} style={{position: 'relative', paddingLeft: '80px', marginBottom: '3rem'}}>
                <div style={{position: 'absolute', left: '20px', top: 0, width: '28px', height: '28px', backgroundColor: '#3b82f6', borderRadius: '50%', border: '4px solid #020617', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%'}}></div>
                </div>

                <div style={{backgroundColor: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '1rem', padding: '1.5rem', transition: 'all 0.3s'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem'}}>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold'}}>{exp.role}</h3>
                    <span style={{fontSize: '0.875rem', color: '#60a5fa', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '9999px'}}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{color: '#c084fc', fontWeight: '500', marginBottom: '0.5rem'}}>{exp.company}</p>
                  <p style={{color: '#9ca3af'}}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{position: 'relative', padding: '5rem 1rem', zIndex: 1, backgroundColor: 'rgba(15, 23, 42, 0.3)'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Let's Connect
          </h2>
          <p style={{color: '#9ca3af', fontSize: '1.125rem', marginBottom: '4rem'}}>
            Open to new opportunities and collaborations
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem'}}>
            {[
              { icon: Mail, label: 'Email', value: 'malik.mdb9123@gmail.com', href: 'mailto:malik.mdb9123@gmail.com' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com' },
              { icon: Camera, label: 'Phone', value: '+91 9966758389', href: 'tel:+919966758389' }
            ].map((contact, i) => (
              <a key={i} href={contact.href} style={{backgroundColor: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(8px)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', textDecoration: 'none', color: 'white', transition: 'all 0.3s', cursor: 'pointer', display: 'block'}} onMouseEnter={(e) => {e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'; e.currentTarget.style.transform = 'scale(1.05)';}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.5)'; e.currentTarget.style.transform = 'scale(1)';}}>
                <div style={{width: '48px', height: '48px', background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem'}}>
                  <contact.icon size={24} />
                </div>
                <p style={{color: '#d1d5db', fontWeight: '500', marginBottom: '0.25rem'}}>{contact.label}</p>
                <p style={{fontSize: '0.875rem', color: '#6b7280'}}>{contact.value}</p>
              </a>
            ))}
          </div>

          <div style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '1rem', padding: '2rem'}}>
            <p style={{fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1rem'}}>
              Based in <span style={{color: '#60a5fa', fontWeight: '600'}}>Hyderabad, India</span>
            </p>
            <p style={{color: '#9ca3af'}}>
              Available for full-time opportunities in Full-Stack Development and Data Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid rgba(30, 41, 59, 0.5)', color: '#6b7280', position: 'relative', zIndex: 1}}>
        <p>© 2025 Mohammed Malik Hussain. Built with React & passion.</p>
      </footer>
    </div>
  );
};

export default Portfolio;