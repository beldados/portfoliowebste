import React, { useState, useRef } from 'react';
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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'overview', label: 'Overview', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Award className="w-4 h-4" /> },
  ];

  const personalInfo = {
    name: 'Daniel Demerw',
    title: 'Backend Developer, AI Enthusiast & Creative',
    email: 'demerwdani@gmail.com',
    phone: '+251967287536',
    location: 'Addis Ababa, Ethiopia',
    website: 'https://beldados.vercel.app/',
    github: 'https://github.com/sheshbazzarr',
    linkedin: 'https://www.linkedin.com/in/daniel-demerw/',
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
        {
          text: 'Developed AI-powered applications including HeartSync (relationship coaching) and LifelongLearners (educational platform)',
          links: [
            { text: 'HeartSync', url: 'https://github.com/sheshbazzarr/heartsync' },
            { text: 'LifelongLearners', url: 'https://github.com/sheshbazzarr/lifelonglearners' }
          ]
        },
        'Built RESTful APIs using Python/FastAPI with comprehensive documentation and multi-language support',
        'Created face recognition systems using OpenCV and machine learning techniques',
        {
          text: 'Developed Ethiopian-focused platforms like JobDone (የቤት ሰራተኛ መፈለጊያ) for local job matching',
          links: [
            { text: 'JobDone', url: 'https://github.com/sheshbazzarr/jobdone' }
          ]
        },
        'Collaborated with international clients on diverse AI and web development projects'
      ]
    },
    {
      title: 'Data Science & AI Student',
      company: 'Multiple Institutions',
      period: '2024 - Present',
      location: 'Online & Ethiopia',
      responsibilities: [
        {
          text: 'Pursuing BSc in Applied Artificial Intelligence at IU International University',
          links: [
            { text: 'IU International University', url: 'https://www.iu.org/' }
          ]
        },
        {
          text: 'Completing Software Engineering program at Holberton School',
          links: [
            { text: 'Holberton School', url: 'https://www.holbertonschool.com/' }
          ]
        },
        {
          text: 'Studying Computer Science at University of the People',
          links: [
            { text: 'University of the People', url: 'https://www.uopeople.edu/' }
          ]
        },
        {
          text: 'Completed Data Science certification at Explore AI',
          links: [
            { text: 'Explore AI', url: 'https://www.explore.ai/' }
          ]
        },
        'Applied machine learning techniques to real-world problems and datasets'
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc Applied Artificial Intelligence',
      institution: 'IU International University',
      institutionUrl: 'https://www.iu.org/',
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
      degree: 'BSc in Software Engineering',
      institution: 'Addis Ababa Institute of Technology (AAIT)',
      institutionUrl: 'https://www.aau.edu.et/',
      period: '2023 - 2024',
      location: 'Addis Ababa, Ethiopia',
      achievements: [
        'Completed rigorous coursework in advanced mathematics and computational logic',
        'Developed strong foundations in Object-Oriented Programming (OOP) and software design',
        'Active member of the Ethiopian Space Science Society (ESSS), contributing to technical discussions',
        'Consistently excelled in class performance with high academic standing'
      ]
    },
    {
      degree: 'Doctor of Medicine (MD)',
      institution: 'ECUSTA Higher Learning Institute',
      institutionUrl: 'https://ecusta-hli.edu.et/',
      period: '2025 - 2031',
      location: 'Addis Ababa, Ethiopia',
      achievements: [
        'Completed introductory basic medical science modules',
        'Focusing on foundational clinical knowledge and human anatomy',
        'Developing core competencies in healthcare ethics and patient care',
        'Engaged in early-stage medical research and laboratory practicals'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      institutionUrl: 'https://www.uopeople.edu/',
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
      institutionUrl: 'https://www.holbertonschool.com/',
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
      institutionUrl: 'https://www.explore.ai/',
      period: '2024',
      location: 'Online',
      achievements: [
        'Comprehensive data science and analytics program',
        'Machine learning and statistical modeling',
        'Data visualization and business intelligence',
        'Real-world project experience with industry datasets'
      ]
    },
    {
      degree: 'DSA (competitive programming)',
      institution: 'A2SV (AFRICAN TO SILICON VALLEY)',
      institutionUrl: 'https://a2sv.org/',
      period: '2025',
      location: 'Online',
      achievements: [
        'Mastered basic data structures',
        'Array, stack, linked list, queue, tree, graph',
        'Participated in internship',
        'Solved more than 500 problems'
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
      { name: 'PyTorch', level: 75 },
      { name: 'OpenCV', level: 85 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'NLP', level: 80 },
      { name: 'Hugging Face Transformers', level: 80 },
      { name: 'LangChain', level: 75 },
      { name: 'spaCy', level: 80 }
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
      { name: 'Django', level: 80 },
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
      githubUrl: 'https://github.com/sheshbazzarr/EthiopicBibleAPI',
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
      githubUrl: 'https://github.com/sheshbazzarr/LifelongLearners',
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
      githubUrl: 'https://github.com/sheshbazzarr/HeartSync',
      achievements: [
        'Real-time AI suggestions with emotional intelligence',
        'Date planning and gift recommendation features',
        'Communication tips and relationship guidance',
        'Privacy-first, ethical AI approach'
      ]
    },
    {
      name: 'JobDone Platform',
      description: 'Ethiopian domestic worker platform (የቤት ሰራተኛ መፈለጊያ) for local job matching',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sheshbazzarr/linkdone',
      achievements: [
        'Local job matching platform for Ethiopian workers',
        'User-friendly interface with Amharic support',
        'Secure payment and verification system',
        'Community-driven platform for domestic services'
      ]
    },
    {
      name: 'Face Recognition System',
      description: 'Machine learning-powered face recognition with web interface',
      technologies: ['Python', 'OpenCV', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
      githubUrl: 'https://github.com/sheshbazzarr/FaceRecognition',
      achievements: [
        'Custom ML model training and deployment',
        'Flask-based web application with responsive design',
        'Integrated computer vision with user-friendly interface',
        'Cloud deployment for easy access'
      ]
    },
    {
      name: 'Temsalet',
      description: 'An app that aims to preserve and promote the rich tradition of Ethiopia through proverbs',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'AI/ML'],
      githubUrl: 'https://github.com/sheshbazzarr/temsalet',
      achievements: [
        'Proverb of the Day: Each day, a new proverb is featured with meaning and origin',
        'Search functionality for specific proverbs or topics',
        'Save and Share: Users can save favorite proverbs and share them',
        'Language Support: The app supports both English and Amharic languages'
      ]
    }
  ];

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (2 * margin);
      let yPosition = margin;
      
      // Helper function to add text with word wrapping
      const addText = (text: string, fontSize: number, isBold: boolean = false, color: string = '#000000') => {
        pdf.setFontSize(fontSize);
        pdf.setTextColor(color);
        if (isBold) {
          pdf.setFont('helvetica', 'bold');
        } else {
          pdf.setFont('helvetica', 'normal');
        }
        
        const lines = pdf.splitTextToSize(text, contentWidth);
        if (yPosition + (lines.length * fontSize * 0.4) > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        
        pdf.text(lines, margin, yPosition);
        yPosition += lines.length * fontSize * 0.4 + 2;
      };
      
      // Helper function to add section header
      const addSectionHeader = (title: string) => {
        addText(title, 16, true, '#1e40af');
        yPosition += 5;
      };
      
      // Page 1: Header and Overview
      addText('DANIEL DEMERW', 24, true, '#1e40af');
      addText('Software Engineer, AI Enthusiast & Creative', 14, true);
      yPosition += 5;
      
      // Contact Information
      addText('Email: demerwdani@gmail.com', 10);
      addText('Phone: +251967287536', 10);
      addText('Location: Addis Ababa, Ethiopia', 10);
      addText('GitHub: https://github.com/sheshbazzarr', 10);
      addText('LinkedIn: https://www.linkedin.com/in/daniel-demerw/', 10);
      yPosition += 8;
      
      // Professional Summary
      addSectionHeader('PROFESSIONAL SUMMARY');
      addText(personalInfo.summary, 10);
      yPosition += 8;
      
      // Experience
      addSectionHeader('EXPERIENCE');
      
      experience.forEach(job => {
        addText(job.title, 12, true);
        addText(`${job.company} | ${job.period} | ${job.location}`, 10, false, '#6b7280');
        yPosition += 3;
        
        job.responsibilities.forEach(responsibility => {
          const text = typeof responsibility === 'string' ? responsibility : responsibility.text;
          addText(`• ${text}`, 10);
        });
        yPosition += 5;
      });
      
      // Education
      addSectionHeader('EDUCATION');
      
      education.forEach(edu => {
        addText(edu.degree, 12, true);
        addText(`${edu.institution} | ${edu.period} | ${edu.location}`, 10, false, '#6b7280');
        yPosition += 3;
        
        edu.achievements.forEach(achievement => {
          addText(`• ${achievement}`, 10);
        });
        yPosition += 5;
      });
      
      // Skills
      addSectionHeader('SKILLS');
      
      Object.entries(skills).forEach(([category, skillList]) => {
        addText(category, 11, true);
        const skillNames = skillList.map(skill => skill.name).join(' • ');
        addText(skillNames, 10);
        yPosition += 3;
      });
      
      // Projects
      addSectionHeader('PROJECTS');
      
      projects.forEach(project => {
        addText(project.name, 12, true);
        addText(project.description, 10);
        addText(`Technologies: ${project.technologies.join(', ')}`, 10, false, '#6b7280');
        yPosition += 3;
        
        project.achievements.forEach(achievement => {
          addText(`• ${achievement}`, 10);
        });
        yPosition += 5;
      });
      
      // Download the PDF
      pdf.save('Daniel_Demerw_Resume.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

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
            <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline">
              {personalInfo.website}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Github className="w-4 h-4" />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline">
              {personalInfo.github}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-4 h-4" />
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 underline">
              {personalInfo.linkedin}
            </a>
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
                {typeof responsibility === 'string' ? (
                  <span>{responsibility}</span>
                ) : (
                  <span>
                    {responsibility.text.split(/(HeartSync|LifelongLearners|JobDone|IU International University|Holberton School|University of the People|Explore AI)/).map((part, partIdx) => {
                      const link = responsibility.links?.find(link => link.text === part);
                      if (link) {
                        return (
                          <a
                            key={partIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            {part}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </span>
                )}
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
              <p className="text-blue-600 font-medium">
                {edu.institutionUrl ? (
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-800 underline"
                  >
                    {edu.institution}
                  </a>
                ) : (
                  edu.institution
                )}
              </p>
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
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 underline text-sm"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
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
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 sidebar">
        <div className="mb-6">
          <button 
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}</span>
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
      <div className="flex-1 overflow-y-auto p-6" ref={resumeRef}>
        {renderContent()}
      </div>
    </div>
  );
};

export default ResumeApp;