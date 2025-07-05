import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Award
} from 'lucide-react';

const ResumeApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Award className="w-4 h-4" /> },
  ];

  const personalInfo = {
    name: 'Daniel Demerw',
    title: 'Software Engineer, AI Enthusiast & Creative',
    email: 'daniel@example.com',
    phone: '+251-xxx-xxx-xxx',
    location: 'Addis Ababa, Ethiopia',
    website: 'danieldemerw.com',
    github: 'github.com/sheshbazzarr',
    linkedin: 'linkedin.com/in/danieldemerw',
    summary: `Passionate software engineer with expertise in AI/ML, full-stack development, and API design. 
    Currently pursuing multiple degrees in Computer Science and Applied AI while building innovative projects 
    that serve the Ethiopian community and beyond. Strong background in both frontend and backend development, 
    with a focus on creating user-friendly, AI-powered solutions. Committed to continuous learning and 
    contributing to meaningful projects that make a positive impact.`
  };

  const experience = [
    {
      title: 'Freelance Software Engineer & AI Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      location: 'Addis Ababa, Ethiopia',
      responsibilities: [
        'Developed AI-powered applications including HeartSync (relationship coaching) and LifelongLearners (educational platform)',
        'Built RESTful APIs using Python/FastAPI with comprehensive documentation and multi-language support',
        'Created face recognition systems using OpenCV and machine learning techniques',
        'Developed Ethiopian-focused platforms like JobDone (የቤት ሰራተኛ መፈለጊያ) for local job matching',
        'Collaborated with international clients on diverse AI and web development projects'
      ]
    },
    {
      title: 'Data Science & AI Student',
      company: 'Multiple Institutions',
      period: '2024 - Present',
      location: 'Online & Ethiopia',
      responsibilities: [
        'Pursuing BSc in Applied Artificial Intelligence at IU International University',
        'Completing Software Engineering program at Holberton School',
        'Studying Computer Science at University of the People',
        'Completed Data Science certification at Explore AI',
        'Applied machine learning techniques to real-world problems and datasets'
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc Applied Artificial Intelligence',
      institution: 'IU International University',
      period: '2025 - 2028',
      location: 'Online',
      achievements: [
        'Comprehensive AI and machine learning curriculum',
        'Focus on practical applications and ethical AI development',
        'Advanced coursework in neural networks and deep learning',
        'Capstone projects in AI system design and implementation'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      period: '2024 - 2026',
      location: 'Online',
      achievements: [
        'Tuition-free, accredited online university',
        'Focus on software engineering and computer systems',
        'Strong foundation in algorithms and data structures',
        'Collaborative learning with global student community'
      ]
    },
    {
      degree: 'Software Engineering Certificate',
      institution: 'Holberton School',
      period: '2024 - 2025',
      location: 'Online',
      achievements: [
        'Project-based learning approach',
        'Full-stack development with modern technologies',
        'Peer learning and collaborative programming',
        'Industry-relevant skills and portfolio development'
      ]
    },
    {
      degree: 'Data Science Certification',
      institution: 'Explore AI',
      period: '2024',
      location: 'Online',
      achievements: [
        'Comprehensive data science and analytics program',
        'Machine learning and statistical modeling',
        'Data visualization and business intelligence',
        'Real-world project experience with industry datasets'
      ]
    }
  ];

  const skills = {
    'Programming Languages': [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 }
    ],
    'AI/ML Technologies': [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'OpenCV', level: 85 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'NLP', level: 80 }
    ],
    'Frontend Technologies': [
      { name: 'React', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vue.js', level: 70 },
      { name: 'Responsive Design', level: 85 }
    ],
    'Backend Technologies': [
      { name: 'FastAPI', level: 90 },
      { name: 'Flask', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 90 }
    ],
    'Databases & Tools': [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 }
    ]
  };

  const projects = [
    {
      name: 'EthiopicBible API',
      description: 'Comprehensive REST API for the Ethiopic Bible with multi-language support',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'PostgreSQL'],
      achievements: [
        'Supports multiple languages including Amharic',
        'High-performance API with comprehensive documentation',
        'Easy-to-use endpoints for quick integration',
        'Deployed with full OpenAPI documentation'
      ]
    },
    {
      name: 'LifelongLearners Platform',
      description: 'AI-powered educational platform with personalized learning recommendations',
      technologies: ['React', 'Node.js', 'AI/ML', 'PostgreSQL', 'TypeScript'],
      achievements: [
        'Curated learning paths tailored to user interests',
        'AI-powered recommendations based on learning style',
        'Community engagement through forums and live sessions',
        'Real-time feedback for optimal learning results'
      ]
    },
    {
      name: 'HeartSync - AI Relationship Coach',
      description: 'Relationship coaching app with emotional intelligence and AI suggestions',
      technologies: ['TypeScript', 'React', 'AI/ML', 'Node.js', 'Tailwind CSS'],
      achievements: [
        'Real-time AI suggestions with emotional intelligence',
        'Date planning and gift recommendation features',
        'Communication tips and relationship guidance',
        'Privacy-first, ethical AI approach'
      ]
    },
    {
      name: 'Face Recognition System',
      description: 'Machine learning-powered face recognition with web interface',
      technologies: ['Python', 'OpenCV', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
      achievements: [
        'Custom ML model training and deployment',
        'Flask-based web application with responsive design',
        'Integrated computer vision with user-friendly interface',
        'Cloud deployment for easy access'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{personalInfo.name}</h2>
        <p className="text-lg mb-4">{personalInfo.title}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>{personalInfo.website}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="w-4 h-4" />
            <span>{personalInfo.github}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-4 h-4" />
            <span>{personalInfo.linkedin}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {experience.map((job, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <p className="text-blue-600 font-medium">{job.company}</p>
              <p className="text-gray-600 text-sm">{job.location}</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
              {job.period}
            </span>
          </div>
          <ul className="space-y-2">
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
              <p className="text-gray-600 text-sm">{edu.location}</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
              {edu.period}
            </span>
          </div>
          <ul className="space-y-2">
            {edu.achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
          <div className="space-y-4">
            {skillList.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <ul className="space-y-2">
            {project.achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return renderOverview();
      case 'experience': return renderExperience();
      case 'education': return renderEducation();
      case 'skills': return renderSkills();
      case 'projects': return renderProjects();
      default: return renderOverview();
    }
  };

  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
        <div className="mb-6">
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
        
        <nav className="space-y-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.icon}
              <span className="font-medium">{section.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResumeApp;