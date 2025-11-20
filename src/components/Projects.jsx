import React from 'react';
import './Projects.css';

const Projects = () => {
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
      image: '/project1-preview.png' // Placeholder
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
      image: '/project2-preview.png' // Placeholder
    },
    {
      id: 3,
      title: 'MVP for in your class and school through asynchronous audio.',
      results: [
        { value: '4x faster', description: 'checking of shipping documents' },
        { value: '75% less', description: 'errors in document presentation' },
        { value: 'Up to 2 days', description: 'saved in payment cycle' }
      ],
      bgColor: '#f0a6e8',
      imageBg: '#202025',
      image: '/project3-preview.png' // Placeholder
    }
  ];

  return (
    <section className="projects" id="works">
      <div className="projects-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ backgroundColor: project.bgColor }}
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
                <div className="preview-placeholder">
                  Preview Image
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
