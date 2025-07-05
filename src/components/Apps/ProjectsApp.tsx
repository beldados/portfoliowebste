import React, { useState } from 'react';
import { ExternalLink, Github, Star, Code, Database, Globe, Youtube } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'planned';
  github?: string;
  demo?: string;
  youtube?: string;
  highlights: string[];
  category: 'web' | 'api' | 'mobile' | 'data' | 'ai';
}

const ProjectsApp: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ethiopic-bible-api',
      title: 'EthiopicBible API',
      description: 'A comprehensive REST API for the Ethiopic Bible with multi-language support including Amharic. High performance using FastAPI with easy-to-use endpoints.',
      tech: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'PostgreSQL'],
      status: 'completed',
      github: 'https://github.com/sheshbazzarr/EthiopicBibleAPI',
      demo: 'https://ethiopicbibleapi-2.onrender.com/docs',
      youtube: 'https://www.youtube.com/watch?v=oo6tStCSIeE',
      category: 'api',
      highlights: [
        'Retrieve specific Bible verses, chapters, or books',
        'Supports multiple languages, including Amharic',
        'High performance using FastAPI',
        'Easy-to-use API endpoints for quick integration',
        'Comprehensive documentation with OpenAPI',
      ],
    },
    {
      id: 'lifelong-learners',
      title: 'LifelongLearners',
      description: 'An educational platform that empowers individuals to take ownership of their learning journey with AI-powered recommendations and community engagement.',
      tech: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'TypeScript'],
      status: 'completed',
      github: 'https://github.com/sheshbazzarr/LifelongLearners',
      youtube: 'https://www.youtube.com/watch?v=N8OgCijOS0w',
      category: 'web',
      highlights: [
        'Curated Learning Paths tailored to interests and goals',
        'Community Engagement through forums and live sessions',
        'AI-Powered Recommendations based on learning style',
        'Real-Time Feedback for optimal learning results',
        'Collaborative projects and peer learning',
      ],
    },
    {
      id: 'heartsync',
      title: 'HeartSync',
      description: 'A relationship coaching app with emotional intelligence, featuring real-time AI suggestions, date planning, and communication tips.',
      tech: ['TypeScript', 'React', 'AI/ML', 'Node.js', 'Tailwind CSS'],
      status: 'completed',
      github: 'https://github.com/sheshbazzarr/HeartSync',
      youtube: 'https://www.youtube.com/@tetertech',
      category: 'ai',
      highlights: [
        'Conversation Coach with real-time AI suggestions',
        'Date Planner with creative ideas based on interests',
        'Gift Advisor for thoughtful recommendations',
        'Communication Tips and emotional insights',
        'Dark/Light Mode with fully responsive design',
        'Ethical AI with privacy-first approach',
      ],
    },
    {
      id: 'jobdone',
      title: 'JobDone - የቤት ሰራተኛ መፈለጊያ',
      description: 'A platform where workers can be found - specifically designed for Ethiopian domestic worker connections and job matching.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      status: 'completed',
      category: 'web',
      highlights: [
        'Ethiopian domestic worker platform',
        'Job matching and worker discovery',
        'Localized for Ethiopian market',
        'User-friendly interface in Amharic and English',
        'Secure worker verification system',
      ],
    },
    {
      id: 'face-recognition',
      title: 'Face Recognition System',
      description: 'A machine learning-powered face recognition system with web interface, trained and deployed using OpenCV and Flask.',
      tech: ['Python', 'OpenCV', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
      status: 'completed',
      github: 'https://github.com/sheshbazzarr/FaceRecognition',
      youtube: 'https://www.youtube.com/watch?v=EQILXt0xKrk',
      category: 'ai',
      highlights: [
        'Machine learning model for face recognition',
        'Flask-based web application with user-friendly interface',
        'Bootstrap styling for responsive design',
        'Integrated ML model into web app',
        'Deployed on Heroku Cloud for easy access',
        'Two-phase development: ML training and web integration',
      ],
    },
    {
      id: 'portfolio-os',
      title: 'በልዳዶስ Portfolio OS',
      description: 'This very portfolio website designed as a desktop operating system interface with terminal and file explorer.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      status: 'completed',
      category: 'web',
      highlights: [
        'Desktop OS-like interface',
        'Interactive terminal with command parsing',
        'Draggable and resizable windows',
        'File explorer with virtual file system',
        'Modern design with smooth animations',
        'Ethiopian cultural theming',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'web', label: 'Web Apps', icon: <Code className="w-4 h-4" /> },
    { id: 'api', label: 'APIs', icon: <Database className="w-4 h-4" /> },
    { id: 'ai', label: 'AI/ML', icon: <Star className="w-4 h-4" /> },
    { id: 'data', label: 'Data Science', icon: <Star className="w-4 h-4" /> },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'planned': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full flex">
      {/* Left sidebar */}
      <div className="w-64 border-r border-gray-200 p-4 overflow-y-auto">
        <div className="mb-6">
          <h2 className="font-bold text-xl text-gray-800 mb-2">Projects</h2>
          <p className="text-sm text-gray-600">Explore my work and contributions</p>
        </div>
        
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                selectedCategory === category.id 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {selectedProject ? (
          <div className="p-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="mb-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Projects
            </button>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedProject.title}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {selectedProject.youtube && (
                    <a
                      href={selectedProject.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {categories.find(c => c.id === selectedCategory)?.label}
              </h2>
              <p className="text-gray-600">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer p-6"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium text-sm">
                      View Details →
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Github className="w-4 h-4 text-gray-500" />
                      )}
                      {project.demo && (
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      )}
                      {project.youtube && (
                        <Youtube className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsApp;