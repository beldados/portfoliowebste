export interface FileSystemItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileSystemItem[];
  content?: string;
}

export const fileSystemData: FileSystemItem = {
  name: 'home',
  type: 'folder',
  children: [
    {
      name: 'Projects',
      type: 'folder',
      children: [
        {
          name: 'EthiopicBibleAPI',
          type: 'folder',
          children: [
            {
              name: 'README.md',
              type: 'file',
              content: '# EthiopicBible API\n\nA comprehensive REST API for the Ethiopic Bible with multi-language support including Amharic.'
            },
            {
              name: 'main.py',
              type: 'file',
              content: 'from fastapi import FastAPI\nfrom database import connect_db\n\napp = FastAPI(title="EthiopicBible API")'
            }
          ]
        },
        {
          name: 'LifelongLearners',
          type: 'folder',
          children: [
            {
              name: 'src',
              type: 'folder',
              children: [
                {
                  name: 'App.tsx',
                  type: 'file',
                  content: 'import React from "react";\nimport Dashboard from "./components/Dashboard";\n\nfunction App() {\n  return <Dashboard />;\n}'
                }
              ]
            },
            {
              name: 'package.json',
              type: 'file',
              content: '{\n  "name": "lifelong-learners",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.0.0"\n  }\n}'
            }
          ]
        },
        {
          name: 'HeartSync',
          type: 'folder',
          children: [
            {
              name: 'backend',
              type: 'folder',
              children: [
                {
                  name: 'server.js',
                  type: 'file',
                  content: 'const express = require("express");\nconst app = express();\n\napp.listen(3000, () => {\n  console.log("HeartSync server running on port 3000");\n});'
                }
              ]
            },
            {
              name: 'frontend',
              type: 'folder',
              children: [
                {
                  name: 'index.html',
                  type: 'file',
                  content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>HeartSync - AI Relationship Coach</title>\n</head>\n<body>\n  <h1>Welcome to HeartSync</h1>\n</body>\n</html>'
                }
              ]
            }
          ]
        },
        {
          name: 'JobDone',
          type: 'folder',
          children: [
            {
              name: 'client.js',
              type: 'file',
              content: '// የቤት ሰራተኛ መፈለጊያ - Ethiopian domestic worker platform\nconst jobPlatform = {\n  findWorkers: () => {\n    console.log("Finding domestic workers...");\n  }\n};'
            },
            {
              name: 'server.js',
              type: 'file',
              content: 'const express = require("express");\nconst app = express();\n\n// JobDone platform for Ethiopian workers\napp.listen(3000);'
            }
          ]
        },
        {
          name: 'FaceRecognition',
          type: 'folder',
          children: [
            {
              name: 'app.py',
              type: 'file',
              content: 'import cv2\nimport flask\nfrom flask import Flask, render_template\n\napp = Flask(__name__)\n\n# Face recognition system using OpenCV'
            },
            {
              name: 'model.py',
              type: 'file',
              content: 'import cv2\nimport numpy as np\n\n# Machine learning model for face recognition\nclass FaceRecognizer:\n    def __init__(self):\n        self.model = cv2.face.LBPHFaceRecognizer_create()'
            }
          ]
        }
      ]
    },
    {
      name: 'Resume',
      type: 'folder',
      children: [
        {
          name: 'resume.txt',
          type: 'file',
          content: `DANIEL DEMERW
Software Engineer, AI Enthusiast & Creative
Email: daniel@example.com
GitHub: github.com/sheshbazzarr
Location: Ethiopia

EDUCATION:
• University of the People - Computer Science (2024-2026)
• IU International University - BSc Applied Artificial Intelligence (2025-2028)
• Holberton School - Software Engineering (2024-2025)
• Explore AI - Data Science (2024)

EXPERIENCE:
• Freelance Software Engineer (2023-2025)
  - Developed REST APIs using Python/FastAPI
  - Built full-stack applications with React/TypeScript
  - Implemented AI-powered features and machine learning models
  - Database design and optimization

• Data Science & Applied AI Specialist
  - Machine learning model development
  - NLP and text processing projects
  - Computer vision applications
  - AI ethics and responsible development

SKILLS:
• Languages: Python, JavaScript, TypeScript, Java, SQL
• Frameworks: FastAPI, React, Node.js, Flask, Tailwind CSS
• AI/ML: TensorFlow, PyTorch, OpenCV, Scikit-learn, NLP
• Databases: PostgreSQL, MongoDB, Redis
• Tools: Git, Docker, Linux, VS Code
• Creative: Digital Art, Photography, Music Composition

PROJECTS:
• EthiopicBible API - FastAPI-based Bible API with multi-language support
• LifelongLearners - AI-powered educational platform with personalized recommendations
• HeartSync - Relationship coaching app with emotional intelligence
• JobDone - Ethiopian domestic worker platform (የቤት ሰራተኛ መፈለጊያ)
• Face Recognition System - OpenCV and Flask-based recognition system

INTERESTS:
• Applied AI and Machine Learning
• Philosophy (David Hume, Bertrand Russell, Thomas Aquinas)
• Ethiopian Culture and Art
• Creative Technology
• Open Source Contributions`
        },
        {
          name: 'cover_letter.txt',
          type: 'file',
          content: `Dear Hiring Manager,

I am writing to express my interest in the Software Engineer position at your company. With my background in AI/ML development, full-stack web development, and a unique perspective shaped by philosophical inquiry and Ethiopian cultural heritage, I am confident I can contribute meaningfully to your team's success.

My recent work includes developing the EthiopicBible API serving multiple languages, building AI-powered educational platforms like LifelongLearners, and creating innovative applications like HeartSync for relationship coaching. Beyond technical skills, my studies in philosophy (particularly the works of David Hume, Bertrand Russell, and Thomas Aquinas) have taught me to approach problems with intellectual rigor and creative thinking.

My background in applied AI and multiple ongoing degrees gives me a unique perspective on ethical technology development and human-centered design. I believe technology should serve humanity's highest aspirations while remaining grounded in practical utility.

I would welcome the opportunity to discuss how my technical skills, AI expertise, and creative approach can benefit your organization.

Sincerely,
Daniel Demerw`
        }
      ]
    },
    {
      name: 'Education',
      type: 'folder',
      children: [
        {
          name: 'uopeople_cs.txt',
          type: 'file',
          content: `UNIVERSITY OF THE PEOPLE - COMPUTER SCIENCE
2024 - 2026

Program Overview:
• Tuition-free, accredited online university
• Bachelor of Science in Computer Science
• Comprehensive curriculum covering software engineering fundamentals
• Strong foundation in algorithms, data structures, and computer systems
• Collaborative learning with global student community

Key Coursework:
• Programming Fundamentals (Python, Java)
• Data Structures and Algorithms
• Database Systems and Design
• Software Engineering Principles
• Computer Networks and Security
• Operating Systems
• Web Development Technologies
• Software Testing and Quality Assurance

Skills Developed:
• Problem-solving and analytical thinking
• Software design and architecture
• Team collaboration and project management
• Technical communication and documentation
• Version control and development workflows

Projects and Achievements:
• Collaborative programming assignments with international peers
• Open-source contributions and community involvement
• Applied computer science concepts to real-world problems
• Developed strong foundation for advanced AI/ML studies`
        },
        {
          name: 'iu_applied_ai.txt',
          type: 'file',
          content: `IU INTERNATIONAL UNIVERSITY - BSC APPLIED ARTIFICIAL INTELLIGENCE
2025 - 2028

Program Overview:
• Comprehensive AI and machine learning curriculum
• Focus on practical applications and ethical AI development
• Advanced coursework in neural networks and deep learning
• Industry-relevant skills and cutting-edge technologies
• International perspective on AI development and deployment

Key Coursework:
• Machine Learning Fundamentals
• Deep Learning and Neural Networks
• Natural Language Processing
• Computer Vision and Image Processing
• AI Ethics and Responsible Development
• Data Science and Analytics
• Robotics and Autonomous Systems
• AI in Business and Society

Specialization Areas:
• Applied Machine Learning
• Computer Vision Applications
• NLP and Language Technologies
• AI System Design and Implementation
• Ethical AI and Bias Mitigation

Skills and Technologies:
• TensorFlow, PyTorch, Keras
• Python for AI/ML Development
• Statistical Analysis and Modeling
• Big Data Processing and Analytics
• Cloud AI Services and Deployment
• AI Project Management and Strategy

Career Preparation:
• Capstone projects with industry partners
• Internship opportunities in AI companies
• Research projects in emerging AI fields
• Professional development in AI ethics and governance`
        },
        {
          name: 'holberton_se.txt',
          type: 'file',
          content: `HOLBERTON SCHOOL - SOFTWARE ENGINEERING
2024 - 2025

Program Overview:
• Project-based learning approach
• Full-stack development with modern technologies
• Peer learning and collaborative programming
• Industry-relevant skills and portfolio development
• Focus on practical, hands-on experience

Core Curriculum:
• Low-level Programming (C, Assembly)
• High-level Programming (Python, JavaScript)
• System Engineering and DevOps
• Web Development (Frontend and Backend)
• Database Design and Management
• API Development and Integration
• Mobile Development
• Machine Learning Fundamentals

Technical Skills:
• Linux/Unix System Administration
• Version Control with Git
• Containerization with Docker
• Cloud Services (AWS, Google Cloud)
• Web Frameworks (Flask, Django, React)
• Database Technologies (MySQL, PostgreSQL, MongoDB)
• Testing and Quality Assurance
• Agile Development Methodologies

Projects and Portfolio:
• Built multiple full-stack web applications
• Developed RESTful APIs and microservices
• Created mobile applications with modern frameworks
• Implemented machine learning solutions
• Contributed to open-source projects
• Collaborated on team projects using industry best practices

Professional Development:
• Technical interview preparation
• Industry mentorship and networking
• Soft skills development and communication
• Career guidance and job placement support`
        },
        {
          name: 'explore_ai_ds.txt',
          type: 'file',
          content: `EXPLORE AI - DATA SCIENCE CERTIFICATION
2024

Program Overview:
• Comprehensive data science and analytics program
• Machine learning and statistical modeling
• Data visualization and business intelligence
• Real-world project experience with industry datasets
• Focus on African context and applications

Core Topics:
• Statistical Analysis and Hypothesis Testing
• Data Cleaning and Preprocessing
• Exploratory Data Analysis (EDA)
• Machine Learning Algorithms
• Deep Learning Fundamentals
• Time Series Analysis
• Natural Language Processing
• Computer Vision Basics

Tools and Technologies:
• Python (Pandas, NumPy, Scikit-learn)
• R for Statistical Computing
• SQL for Database Querying
• Tableau and Power BI for Visualization
• Jupyter Notebooks and Google Colab
• Git for Version Control
• Cloud Platforms (AWS, Google Cloud)

Projects Completed:
• Predictive modeling for business applications
• Customer segmentation and market analysis
• Sentiment analysis of social media data
• Image classification using deep learning
• Time series forecasting for financial data
• Recommendation systems development

Skills Developed:
• Data storytelling and communication
• Business intelligence and analytics
• Statistical modeling and validation
• Machine learning model deployment
• Data ethics and privacy considerations
• Project management and collaboration

Certification Achievement:
• Successfully completed all coursework and projects
• Demonstrated proficiency in data science methodologies
• Applied machine learning to solve real-world problems
• Prepared for advanced AI and ML studies`
        }
      ]
    },
    {
      name: 'Blog',
      type: 'folder',
      children: [
        {
          name: 'ai_future_jobs.md',
          type: 'file',
          content: `# AI and the Future of Jobs: Adaptation Over Replacement

The conversation around AI and employment often centers on fear - fear of job displacement, economic disruption, and technological unemployment. But as someone working at the intersection of AI development and practical applications, I believe we're looking at this from the wrong angle.

## The Real Question Isn't "Will AI Replace Jobs?"

The real question is: "How will AI transform the way we work?" History shows us that technological revolutions don't just destroy jobs - they create new ones, often in ways we couldn't have imagined.

## What I've Learned Building AI Systems

In developing projects like HeartSync (an AI relationship coach) and the EthiopicBible API, I've seen firsthand how AI augments human capabilities rather than replacing them.

The future of work in an AI world isn't about humans versus machines. It's about humans with machines, creating possibilities we couldn't achieve alone.`
        },
        {
          name: 'make_it_stick_notes.md',
          type: 'file',
          content: `# Make It Stick: Learning That Lasts

Recently finished reading "Make It Stick" by Peter Brown, Henry Roediger, and Mark McDaniel. As someone constantly learning new technologies and deepening my understanding of both code and AI, the insights from this book have been transformative.

## Key Principles

### 1. Retrieval Practice
Testing yourself frequently is more effective than re-reading. Instead of reviewing code examples, try to write them from memory first.

### 2. Spaced Repetition
Spacing out learning sessions over time strengthens memory more than cramming. This applies to learning new programming languages or AI concepts.

### 3. Interleaving
Mixing different types of problems or topics in a single study session improves discrimination and transfer of learning.

Learning is not about cramming information but about building durable, flexible knowledge that can be applied in new situations.`
        },
        {
          name: 'eat_that_frog.md',
          type: 'file',
          content: `# Eat That Frog: Conquering Procrastination in Tech

Brian Tracy's "Eat That Frog" has become a cornerstone of my productivity system, especially when juggling multiple projects like the EthiopicBible API, LifelongLearners platform, and AI research.

## The Frog Principle in Software Development

Your "frog" is your biggest, most important task - the one you're most likely to procrastinate on. In tech, this might be:

- **Refactoring legacy code** that everyone avoids
- **Writing comprehensive tests** for a complex feature
- **Tackling that architectural decision** you've been postponing
- **Learning that new AI technology** your project desperately needs

The goal isn't to work more hours - it's to work on the right things at the right time.`
        }
      ]
    },
    {
      name: 'Philosophy',
      type: 'folder',
      children: [
        {
          name: 'reading_notes.md',
          type: 'file',
          content: `# Philosophy Reading Notes

## Current Reading List

### Epistemology
- **David Hume - An Enquiry Concerning Human Understanding** ⭐⭐⭐⭐⭐
  - The problem of induction and causation
  - Skepticism about miracles and testimony
  - The is-ought problem in moral reasoning

- **Bertrand Russell - The Problems of Philosophy** ⭐⭐⭐⭐⭐
  - Knowledge by acquaintance vs. description
  - The problem of the external world
  - The value of philosophical inquiry

### Philosophy of Religion
- **Thomas Aquinas - Summa Theologica (Selected Parts)** ⭐⭐⭐⭐⭐
  - The Five Ways (arguments for God's existence)
  - Relationship between faith and reason
  - Natural law theory

## Key Insights

### On Faith and Reason
The relationship between faith and reason is not one of opposition but of complementarity. Hume's skepticism about induction shows that even scientific reasoning requires a kind of faith in the uniformity of nature.

### Applications to Technology
These philosophical insights inform my approach to AI development:
- Humility about the limits of formal verification (Hume's problem of induction)
- Recognition that AI systems involve subjective elements in their design
- Systematic thinking and clear definitions (Russell's analytical approach)
- Integration of technical and ethical considerations (Aquinas's synthesis)`
        },
        {
          name: 'theology_notes.md',
          type: 'file',
          content: `# Theology Study Notes

## Ethiopian Orthodox Tradition

### Core Beliefs
- Trinity: Father, Son, and Holy Spirit as one essence, three persons
- Incarnation: Christ as fully God and fully human
- Theosis: Participation in divine life through grace
- Communion of Saints: Connection between earthly and heavenly church

### Distinctive Features
- Emphasis on mystical experience and contemplation
- Rich liturgical tradition with ancient music and art
- Integration of reason and revelation
- Strong monastic tradition
- Preservation of ancient texts and practices

## Integration with Philosophy

### Faith and Reason
Following Aquinas, I see faith and reason as complementary ways of knowing truth. Reason can support and clarify faith, while faith provides a foundation for ultimate questions that reason alone cannot answer.

### Ethics and Technology
Theological anthropology (understanding of human nature) informs how I approach AI and technology design, emphasizing human dignity, community, and flourishing.`
        }
      ]
    },
    {
      name: 'Photos',
      type: 'folder',
      children: [
        {
          name: 'Portraits',
          type: 'folder',
          children: [
            {
              name: 'profile_2024.jpg',
              type: 'file',
              content: 'Professional headshot for LinkedIn and resume'
            },
            {
              name: 'conference_photo.jpg',
              type: 'file',
              content: 'Photo from tech conference presentation'
            }
          ]
        },
        {
          name: 'LifeMoments',
          type: 'folder',
          children: [
            {
              name: 'graduation_2022.jpg',
              type: 'file',
              content: 'University graduation ceremony'
            },
            {
              name: 'family_gathering.jpg',
              type: 'file',
              content: 'Family celebration during holidays'
            }
          ]
        },
        {
          name: 'Ethiopia',
          type: 'folder',
          children: [
            {
              name: 'lalibela_churches.jpg',
              type: 'file',
              content: 'Rock-hewn churches of Lalibela'
            },
            {
              name: 'simien_mountains.jpg',
              type: 'file',
              content: 'Sunrise over Simien Mountains'
            },
            {
              name: 'coffee_ceremony.jpg',
              type: 'file',
              content: 'Traditional Ethiopian coffee ceremony'
            }
          ]
        }
      ]
    },
    {
      name: 'CreativeWorks',
      type: 'folder',
      children: [
        {
          name: 'DigitalArt',
          type: 'folder',
          children: [
            {
              name: 'ethiopian_patterns.ai',
              type: 'file',
              content: 'Digital artwork inspired by traditional Ethiopian textile patterns'
            },
            {
              name: 'amharic_calligraphy.psd',
              type: 'file',
              content: 'Modern interpretations of Ge\'ez and Amharic script'
            },
            {
              name: 'ai_generated_art.png',
              type: 'file',
              content: 'AI-generated artwork exploring Ethiopian cultural themes'
            }
          ]
        },
        {
          name: 'Writing',
          type: 'folder',
          children: [
            {
              name: 'ai_ethics_essay.md',
              type: 'file',
              content: 'Essay: "Ethical AI Development in the Ethiopian Context"'
            },
            {
              name: 'tech_blog_posts.md',
              type: 'file',
              content: 'Collection of technical blog posts and tutorials'
            }
          ]
        },
        {
          name: 'Music',
          type: 'folder',
          children: [
            {
              name: 'ai_composed_music.wav',
              type: 'file',
              content: 'Music composition using AI and traditional Ethiopian scales'
            },
            {
              name: 'coding_playlist.m3u',
              type: 'file',
              content: 'Curated playlist for coding and AI development sessions'
            }
          ]
        },
        {
          name: 'CodeArt',
          type: 'folder',
          children: [
            {
              name: 'generative_art.py',
              type: 'file',
              content: 'Python code for generating AI-powered artistic patterns'
            },
            {
              name: 'data_visualization.js',
              type: 'file',
              content: 'JavaScript code for creating interactive data visualizations'
            }
          ]
        }
      ]
    },
    {
      name: 'Hobbies',
      type: 'folder',
      children: [
        {
          name: 'reading_list.md',
          type: 'file',
          content: `# Current Reading List

## Philosophy & Theology
- **David Hume** - A Treatise of Human Nature ⭐⭐⭐⭐⭐
- **Bertrand Russell** - The History of Western Philosophy ⭐⭐⭐⭐
- **Thomas Aquinas** - Summa Contra Gentiles ⭐⭐⭐⭐⭐

## Technical Books
- Hands-On Machine Learning by Aurélien Géron ⭐⭐⭐⭐⭐
- Deep Learning by Ian Goodfellow ⭐⭐⭐⭐
- Clean Code by Robert C. Martin ⭐⭐⭐⭐⭐
- The Art of Computer Programming by Donald Knuth (ongoing)

## AI/ML Specific
- Pattern Recognition and Machine Learning by Christopher Bishop ⭐⭐⭐⭐⭐
- Artificial Intelligence: A Modern Approach by Russell & Norvig ⭐⭐⭐⭐
- The Elements of Statistical Learning ⭐⭐⭐⭐

## Creative & General Interest
- The Righteous Mind by Jonathan Haidt ⭐⭐⭐⭐
- Sapiens by Yuval Noah Harari ⭐⭐⭐⭐
- Digital Minimalism by Cal Newport ⭐⭐⭐⭐
- The Artist's Way by Julia Cameron ⭐⭐⭐⭐

## Ethiopian Literature & Culture
- The Red Sea Press Ethiopian Literature Collection
- Traditional Ethiopian Orthodox Texts (Ge'ez)
- Modern Ethiopian Poetry and Fiction
- Historical texts on Ethiopian Christianity

## Recently Finished
- Make It Stick by Peter Brown ⭐⭐⭐⭐⭐
- Eat That Frog by Brian Tracy ⭐⭐⭐⭐
- The Pragmatic Programmer by David Thomas ⭐⭐⭐⭐⭐`
        },
        {
          name: 'ai_projects.md',
          type: 'file',
          content: `# AI & Creative Projects

## Machine Learning Projects
- **EthiopicBible API**: NLP and text processing for multi-language Bible search
- **HeartSync**: Emotional intelligence AI for relationship coaching
- **Face Recognition System**: Computer vision application with OpenCV
- **LifelongLearners**: AI-powered educational recommendations

## Creative AI Experiments
- **Generative Art**: Using GANs to create Ethiopian-inspired patterns
- **Music Composition**: AI-assisted composition with traditional scales
- **Poetry Generation**: NLP models trained on Amharic and English poetry
- **Data Visualization**: Interactive visualizations of Ethiopian cultural data

## Research Interests
- **Ethical AI Development**: Bias mitigation and fairness in AI systems
- **Cultural AI**: Preserving and promoting Ethiopian culture through technology
- **Educational AI**: Personalized learning systems for developing countries
- **Multilingual NLP**: Supporting Ethiopian languages in AI applications

## Learning & Study
- **Philosophy Reading Groups**: Weekly discussions with local scholars
- **AI Ethics Courses**: Online and local university classes
- **Open Source Contributions**: Contributing to AI/ML projects
- **Community Involvement**: Teaching AI concepts to young developers

## Future Projects
- **Ethiopian Language Models**: Developing NLP models for Amharic and Ge'ez
- **Cultural Preservation AI**: Digitizing and analyzing traditional art and music
- **Educational Platform**: AI-powered learning system for Ethiopian students
- **Healthcare AI**: Diagnostic tools for rural Ethiopian communities`
        }
      ]
    },
    {
      name: 'Devotions',
      type: 'folder',
      children: [
        {
          name: 'daily_meditation.md',
          type: 'file',
          content: `# Daily Meditation Notes

## January 2024

### Walking by Faith (Jan 25)
2 Corinthians 5:7 - "For we walk by faith, not by sight."

Reflection: In both AI development and life, we often must trust in things we cannot fully see or understand. God calls us to trust His character even when the future of technology is unclear.

### The Gift of Wisdom (Jan 20)
James 1:5 - "If any of you lacks wisdom, let him ask God..."

Reflection: When developing AI systems, I've learned to pray for wisdom before making ethical decisions. God's wisdom applies to all areas of life, including technology.

### Created for Good Works (Jan 15)
Ephesians 2:10 - "For we are his workmanship, created in Christ Jesus for good works..."

Reflection: My skills in AI and technology are gifts that God can use for His purposes. Even machine learning can be a form of service when done with the right heart.

## Prayer Requests
- Wisdom in AI development and ethical considerations
- Opportunities to serve through technology and innovation
- Growth in faith and philosophical understanding
- Health and strength for family
- Unity and peace in Ethiopia
- Guidance in balancing technical work with spiritual growth

## Theological Reflections
- The relationship between divine creativity and human innovation
- How philosophical inquiry can deepen faith
- The role of beauty in both art and algorithms
- Technology as a tool for building community and serving others
- Ethical considerations in AI development from a Christian perspective`
        }
      ]
    },
    {
      name: 'AboutMe',
      type: 'folder',
      children: [
        {
          name: 'contact.json',
          type: 'file',
          content: `{
  "name": "Daniel Demerw",
  "title": "Software Engineer, AI Enthusiast & Creative",
  "email": "daniel@example.com",
  "phone": "+251-xxx-xxx-xxx",
  "location": "Addis Ababa, Ethiopia",
  "social": {
    "github": "github.com/sheshbazzarr",
    "linkedin": "linkedin.com/in/danieldemerw",
    "youtube": "youtube.com/@tetertech",
    "twitter": "@danieldemerw"
  },
  "languages": ["Amharic", "English", "Tigrinya", "Ge'ez (reading)"],
  "availability": "Available for freelance projects and AI collaborations",
  "interests": [
    "Applied AI & Machine Learning", 
    "Software Engineering", 
    "Philosophy & Theology", 
    "Digital Art & Design", 
    "Ethiopian Culture", 
    "Photography", 
    "Music Composition"
  ],
  "specialties": [
    "AI/ML development and deployment",
    "Full-stack web development", 
    "API design and development", 
    "Computer vision applications",
    "NLP and language technologies",
    "Digital art and creative coding",
    "Philosophical writing and analysis",
    "Cultural documentation and preservation"
  ]
}`
        },
        {
          name: 'github.url',
          type: 'file',
          content: 'https://github.com/sheshbazzarr'
        },
        {
          name: 'philosophy.txt',
          type: 'file',
          content: `PERSONAL PHILOSOPHY & WORLDVIEW

As a software engineer, AI enthusiast, and person of faith, my worldview is shaped by several core principles:

## Integration of Faith and Reason
Following the Ethiopian Orthodox tradition and philosophers like Thomas Aquinas, I believe faith and reason are complementary paths to truth. My study of David Hume's skepticism and Bertrand Russell's analytical philosophy has taught me intellectual humility, while my faith provides a foundation for ultimate meaning and purpose.

## AI as Creative Expression and Service
I view AI development not just as problem-solving but as a form of creative expression and service. Like digital art or music composition, AI systems can be beautiful, elegant, and meaningful. Technology should serve human flourishing and reflect our highest aspirations.

## Cultural Heritage and Innovation
My Ethiopian heritage provides a rich foundation of wisdom, art, and spiritual tradition. I seek to bridge this ancient wisdom with modern AI technology, preserving cultural treasures while embracing innovation. The geometric patterns in Ethiopian art inspire my generative models; the contemplative tradition informs my approach to complex AI problems.

## Ethical AI Development
In my work with artificial intelligence and machine learning, I'm guided by a deep respect for human dignity and agency. AI should augment human capabilities, not replace human judgment. Ethical considerations must be central to AI development, especially in contexts like healthcare, education, and cultural preservation.

## Creative Synthesis
I believe the boundaries between disciplines are artificial. Philosophy informs my AI architecture; theology shapes my approach to ethics in technology; art influences my algorithm design. The most interesting work happens at the intersections.

## Service and Community
Whether developing AI systems, creating art, or exploring philosophical questions, my ultimate goal is service—to God, to community, and to the flourishing of human culture. Technology and creativity are gifts to be shared, not hoarded.

## Continuous Learning
The pursuit of truth, beauty, and goodness is a lifelong journey. I remain committed to learning—whether mastering new AI techniques, reading ancient theological texts, or experimenting with new artistic mediums.

This philosophy guides my decisions in both professional and personal contexts, shaping how I approach problems, relationships, and creative work.`
        }
      ]
    }
  ]
};