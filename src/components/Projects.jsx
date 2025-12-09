import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (projectId) => {
    setIsHovering(true);
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoveredProject(null);
  };

  const projects = [
    {
      id: 1,
      title: 'Maturing a Design System for a Multi-Product B2B Agritech Platform',
      results: [
        { value: '4+ products', description: 'covered' },
        { value: 'light mode', description: 'enabled' },
        { value: 'Up to 30%', description: 'delivery time saved' }
      ],
      bgColor: '#e5eaeb',
      imageBg: '#134551',
      image: '/images/project1-preview.png',
      link: 'https://olenakachurina-designsystem.figma.site/'
    },
    {
      id: 2,
      title: 'MVP for an AI-first agritech documents management platform',
      results: [
        { value: '4x faster', description: 'checking of shipping documents' },
        { value: '75% less', description: 'errors in document presentation' },
        { value: 'Up to 2 days', description: 'saved in payment cycle' }
      ],
      bgColor: '#fed35b',
      imageBg: '#e5eaeb',
      image: '/images/project2-preview.png',
      link: 'https://olenakachurina-quickdocs.figma.site/'
    },
    {
      id: 3,
      title: "Students' progress tracking application.",
      results: [
        { value: 'Prototype', description: 'that was later adapted for classroom solution' },
        { value: 'Adopted', description: 'in US and EU schools' },
        { value: '', description: '' }
      ],
      bgColor: '#f0a6e8',
      imageBg: '#202025',
      image: '/images/project3-preview.png',
      link: '/project-3'
    }
  ];

  return (
    <section className="projects" id="works">
      <div className="projects-container">
        {projects.map((project) => {
          // Determine if link is internal (starts with /) or external
          const isInternal = project.link && project.link.startsWith('/');
          const CardWrapper = project.link 
            ? (isInternal ? Link : 'a')
            : 'div';
          
          const cardProps = project.link 
            ? (isInternal 
                ? { to: project.link }
                : { href: project.link }
              )
            : {};
          
          return (
            <CardWrapper 
              key={project.id} 
              className="project-card"
              style={{ backgroundColor: project.bgColor }}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              {...cardProps}
            >
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-results">
                  {project.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <p className="result-value">{result.value}</p>
                      <p className="result-description">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-preview">
                <div 
                  className="preview-container"
                  style={{ backgroundColor: project.imageBg }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="preview-image"
                  />
                </div>
              </div>

              {isHovering && hoveredProject === project.id && (
                <div 
                  className="cursor-chip"
                  style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`
                  }}
                >
                  View case study
                </div>
              )}
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
