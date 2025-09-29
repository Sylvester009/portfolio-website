'use client'

import { useState, useEffect } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
}

interface Skill {
  name: string
  level: number
  category: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects: Project[] = [
  {
    title: "Library Management System",
    description: "Full-stack web application to manage books, members, and borrowing history, featuring authentication, role-based access, and RESTful APIs.",
    technologies: ["Next.js", "React", "Flask", "Python", "PostgreSQL"],
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "WorkNest",
    description: "Job application platform that helps users organize saved jobs, track application progress, and manage notes with a clean, intuitive interface.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Food Delivery App",
    description: "Responsive food delivery interface with restaurant listings, order tracking, and a smooth checkout flow to simulate a real-world delivery platform.",
    technologies: ["React", "Next.js", "CSS", "MongoDB"],
    category: "Full Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "News Homepage",
    description: "Modern and responsive homepage for a news platform, focusing on typography, grid layouts, and user-centered design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    githubUrl: "#",
    liveUrl: "#"
  }
];


  const skills: Skill[] = [
  { name: "React/Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "UI/UX Implementation", level: 82, category: "frontend" },
  { name: "Python", level: 88, category: "backend" },
  { name: "Flask & REST APIs", level: 84, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "OOP & SOLID Principles", level: 86, category: "architecture" },
  { name: "Clean Code & Best Practices", level: 83, category: "architecture" }
];


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-dark text-text">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-2xl border-0' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold gradient-text">
              Ninestarx
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary transform scale-105' 
                      : 'text-text-light hover:text-text'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
                  )}
                </button>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-dark font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Start Project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved Layout */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-darker"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Profile and Main Content Side by Side on desktop */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              {/* Profile Image/Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary p-0.5 glow">
                  <div className="w-full h-full bg-darker rounded-2xl flex items-center justify-center">
                    <div className="text-2xl font-bold gradient-text">SS</div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-black mb-4">
                    <span className="gradient-text">Sylvester Samuel</span>
                  </h1>
                  
                  <div className="text-xl md:text-2xl font-light mb-6 text-text-light">
                    <span>Software Engineer </span>
                    <span className="text-primary">•</span>
                    <span> Frontend Developer</span>
                  </div>
                  
                  <p className="text-lg text-text-light leading-relaxed max-w-2xl">
    Passionate about turning ideas into <span className="text-primary font-medium">impactful software</span>, 
    I specialize in crafting <span className="text-secondary font-medium">intuitive interfaces </span> 
    and <span className="text-accent font-medium">scalable solutions</span> that drive real-world value. 
    With a background in <span className="text-primary font-medium">ALX Software Engineering</span>, 
    I bridge <span className="text-secondary font-medium">design and development</span> to build 
    products that are not only functional, but also memorable.
  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow text-sm"
                  >
                    View My Work
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 border border-text-light/30 text-text font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300 text-sm"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Stats - Moved to bottom of hero section */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 lg:max-w-sm mt-16 text-text-light">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm">Years</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Improved Layout */}
      <section id="about" className="section-padding bg-darker">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">My Journey</h3>
                   <p className="text-text-light leading-relaxed">
          I&apos;m a <span className="text-primary font-medium">software engineer</span> and 
          <span className="text-secondary font-medium"> frontend developer</span> passionate about 
          building meaningful digital products. After completing the 
          <span className="text-primary font-medium"> ALX Software Engineering program</span>, 
          I’ve been sharpening my craft through real-world projects—ranging from 
          RESTful APIs to modern web applications—while staying grounded in solid 
          <span className="text-accent font-medium"> OOP and SOLID principles</span>.
        </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">My Philosophy</h3>
                 <p className="text-text-light leading-relaxed">
          I believe in <span className="text-accent font-medium">purpose-driven code</span>—solutions 
          that not only work but create real impact. My approach is to combine 
          clean, scalable engineering with thoughtful design, ensuring every product 
          is both <span className="text-primary font-medium">functional</span> and 
          <span className="text-secondary font-medium"> user-centered</span>.
        </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20">Clean Code</span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium border border-secondary/20">User Focused</span>
                  <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium border border-accent/20">Performance</span>
                </div>
              </div>
              
              {/* Right Column - Stats Card */}
              <div className="card-hover rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-text mb-8 text-center">Core Expertise</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
          <div className="text-2xl font-bold text-primary">Frontend</div>
          <div className="text-text-light text-sm mt-2">React, Next.js</div>
        </div>
        <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
          <div className="text-2xl font-bold text-secondary">Backend</div>
          <div className="text-text-light text-sm mt-2">Python, Flask, REST APIs</div>
        </div>
        <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
          <div className="text-2xl font-bold text-accent">Principles</div>
          <div className="text-text-light text-sm mt-2">OOP, SOLID</div>
        </div>
        <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
          <div className="text-2xl font-bold text-primary">Goal</div>
          <div className="text-text-light text-sm mt-2">Engineer @ NASA</div>
        </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Improved Layout */}
      <section id="skills" className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              A comprehensive skill set spanning modern web technologies, design principles, and architectural patterns
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="card-hover p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-text">{skill.name}</span>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-medium rounded-full h-2.5">
                    <div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-text-light mt-2 capitalize">{skill.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Improved Layout */}
      <section id="projects" className="section-padding bg-darker">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              A curated selection of projects showcasing innovation, technical excellence, and design craftsmanship
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="card-hover rounded-xl overflow-hidden group">
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-dark-medium to-darker">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 glass rounded-full text-sm font-semibold text-text">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-4xl font-black text-text/10">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-light mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-dark border border-text-light/10 rounded-lg text-sm font-medium text-text-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-6">
                      <a href={project.githubUrl} className="text-text-light hover:text-primary transition-colors font-medium flex items-center gap-2">
                        <span>GitHub</span>
                      </a>
                      <a href={project.liveUrl} className="text-text-light hover:text-secondary transition-colors font-medium flex items-center gap-2">
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Improved Layout */}
      <section id="contact" className="section-padding bg-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I&apos;m currently available for freelance work and new opportunities.
              Let&apos;s discuss how we can create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="text-center">
                <div className="text-lg font-semibold text-primary mb-2">Email</div>
                <a href="mailto:alex@example.com" className="text-text-light hover:text-secondary transition-colors text-lg">
                  samsylvester09@gmail.com.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-secondary mb-2">Phone</div>
                <a href="tel:+2348126844299" className="text-text-light hover:text-primary transition-colors text-lg">
                  +234 (812) 684-4299
                </a>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-12">
              {['GitHub', 'LinkedIn', 'Twitter', 'Discord'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  title={social}
                >
                  <span className="font-semibold text-text-light hover:text-primary transition-colors">{social[0]}</span>
                </a>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('home')}
              className="px-8 py-3 border border-text-light/30 text-text font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darker py-12 border-t border-text-light/10">
        <div className="container-custom text-center">
          <div className="text-xl font-bold gradient-text mb-4">Ninestarx</div>
          <p className="text-text-light mb-2">
            Crafting digital excellence through code and design
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
          <p className="text-text-light/60 text-sm">
            © {new Date().getFullYear()} Sylvester Samuel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}