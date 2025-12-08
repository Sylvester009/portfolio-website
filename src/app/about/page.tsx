import Image from 'next/image';

interface Project {
  title: string;
  image?: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}


export default function About () {

    const projects: Project[] = [
    {
      title: 'Ninestarx Portfolio',
      image: '/images/Ninestarx-Portfolio.png',
      description:
        "A personal portfolio about Samuel Sylvester — stylish, sleek, and a bit kicky! Funny thing? It's also a project itself, so adding it to the list feels a little meta.",
      technologies: ['Next.js', 'React', 'Shadcn UI', 'TailwindCSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/Sylvester009/portfolio-website',
      liveUrl: 'https://ninestarx-page.vercel.app',
    },

    {
      title: 'WorkNest',
      image: '/images/WorkNest.png',
      description:
        'Job application platform that helps users organize saved jobs, track application progress, and manage notes with a clean, intuitive interface.',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'Prisma',
        'PostgreSQL',
      ],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Sylvester009/job-posting-app',
      liveUrl: 'https://worknest-app.vercel.app',
    },
    {
      title: 'Food Delivery App',
      image: '/images/Restuarant-App.png',
      description:
        'Responsive food delivery interface with restaurant listings, order tracking, and a smooth checkout flow to simulate a real-world delivery platform.',
      technologies: ['React', 'Next.js', 'CSS', 'MongoDB'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Sylvester009/foodrestuarantapp',
      liveUrl: 'https://foodrestuarantapp.vercel.app/',
    },
    {
      title: 'News Homepage',
      image: '/images/homepage.png',
      description:
        'Modern and responsive homepage for a news platform, focusing on typography, grid layouts, and user-centered design.',
      technologies: ['HTML', 'CSS'],
      category: 'Frontend',
      githubUrl: 'https://github.com/Sylvester009/news-homepage',
      liveUrl: 'https://news-homepage-tawny-six.vercel.app/',
    },
  ];

  const skills: Skill[] = [
    {name: 'React/Next.js', level: 90, category: 'frontend'},
    {name: 'TypeScript', level: 85, category: 'frontend'},
    {name: 'UI/UX Implementation', level: 82, category: 'frontend'},
    {name: 'Python', level: 88, category: 'backend'},
    {name: 'Flask & REST APIs', level: 84, category: 'backend'},
    {name: 'Node.js', level: 70, category: 'backend'},
    {name: 'OOP & SOLID Principles', level: 86, category: 'architecture'},
    {name: 'Clean Code & Best Practices', level: 83, category: 'architecture'},
  ];

    return(
        <>
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
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      My Journey
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      I&apos;m a{' '}
                      <span className="text-primary font-medium">
                        software engineer
                      </span>{' '}
                      and
                      <span className="text-secondary font-medium">
                        {' '}
                        frontend developer
                      </span>{' '}
                      passionate about building meaningful digital products.
                      After completing the
                      <span className="text-primary font-medium">
                        {' '}
                        ALX Software Engineering program
                      </span>
                      , I’ve been sharpening my craft through real-world
                      projects—ranging from RESTful APIs to modern web
                      applications—while staying grounded in solid
                      <span className="text-accent font-medium">
                        {' '}
                        OOP and SOLID principles
                      </span>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-4">
                      My Philosophy
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      I believe in{' '}
                      <span className="text-accent font-medium">
                        purpose-driven code
                      </span>
                      —solutions that not only work but create real impact. My
                      approach is to combine clean, scalable engineering with
                      thoughtful design, ensuring every product is both{' '}
                      <span className="text-primary font-medium">
                        functional
                      </span>{' '}
                      and
                      <span className="text-secondary font-medium">
                        {' '}
                        user-centered
                      </span>
                      .
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20">
                      Clean Code
                    </span>
                    <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg font-medium border border-secondary/20">
                      User Focused
                    </span>
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium border border-accent/20">
                      Performance
                    </span>
                  </div>
                </div>

                {/* Right Column - Stats Card */}
                <div className="card-hover rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-text mb-8 text-center">
                    Core Expertise
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
                      <div className="text-2xl font-bold text-primary">
                        Frontend
                      </div>
                      <div className="text-text-light text-sm mt-2">
                        React, Next.js
                      </div>
                    </div>
                    <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
                      <div className="text-2xl font-bold text-secondary">
                        Backend
                      </div>
                      <div className="text-text-light text-sm mt-2">
                        Python, Flask, REST APIs
                      </div>
                    </div>
                    <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
                      <div className="text-2xl font-bold text-accent">
                        Principles
                      </div>
                      <div className="text-text-light text-sm mt-2">
                        OOP, SOLID
                      </div>
                    </div>
                    <div className="text-center p-6 bg-dark-medium rounded-xl border border-text-light/10">
                      <div className="text-2xl font-bold text-primary">
                        Goal
                      </div>
                      <div className="text-text-light text-sm mt-2">
                        Engineer @ NASA
                      </div>
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
                A comprehensive skill set spanning modern web technologies,
                design principles, and architectural patterns
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="card-hover p-6 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-text">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-medium rounded-full h-2.5">
                      <div
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                    <div className="text-xs text-text-light mt-2 capitalize">
                      {skill.category}
                    </div>
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
                A curated selection of projects showcasing innovation, technical
                excellence, and design craftsmanship
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="card-hover rounded-xl overflow-hidden group"
                  >
                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-dark-medium to-darker">
                      <Image
                        src={project.image || ''}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
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
                      <p className="text-text-light mb-6 leading-relaxed">
                        {project.description}
                      </p>

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
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-text-light hover:text-primary transition-colors font-medium flex items-center gap-2"
                        >
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="text-text-light hover:text-secondary transition-colors font-medium flex items-center gap-2"
                        >
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-text-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I&apos;m currently available
                for freelance work and new opportunities. Let&apos;s discuss how
                we can create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:alex@example.com"
                    className="text-text-light hover:text-secondary transition-colors text-lg"
                  >
                    samsylvester09@gmail.com.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-secondary mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+2348126844299"
                    className="text-text-light hover:text-primary transition-colors text-lg"
                  >
                    +234 (812) 684-4299
                  </a>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mb-12">
                {[
                  {
                    name: 'GitHub',
                    url: 'https://github.com/Sylvester009',
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://linkedin.com/in/ninestars',
                  },
                  {
                    name: 'X',
                    url: '#',
                  },
                  {
                    name: 'Discord',
                    url: '#',
                  },
                ].map(({name, url}) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                    title={name}
                  >
                    <span className="font-semibold text-text-light hover:text-primary transition-colors">
                      {name[0]}
                    </span>
                  </a>
                ))}
              </div>

              <button
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
            <div className="text-xl font-bold gradient-text mb-4">
              Ninestarx
            </div>
            <p className="text-text-light mb-2">
              Crafting digital excellence through code and design
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto my-4"></div>
            <p className="text-text-light/60 text-sm">
              © {new Date().getFullYear()} Sylvester Samuel. All rights
              reserved.
            </p>
          </div>
        </footer>
      
      
        </>
    )
}