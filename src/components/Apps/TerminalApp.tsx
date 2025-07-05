import React, { useState, useRef, useEffect } from 'react';
import { useTerminal } from '../../contexts/TerminalContext';
import { useWindows } from '../../contexts/WindowContext';
import { fileSystemData } from '../../data/fileSystemData';
import FileExplorer from '../FileExplorer/FileExplorer';
import BlogApp from './BlogApp';
import ProjectsApp from './ProjectsApp';
import PhotosApp from './PhotosApp';
import ResumeApp from './ResumeApp';
import DevotionsApp from './DevotionsApp';
import ContactApp from './ContactApp';
import PhilosophyApp from './PhilosophyApp';
import CreativeWorksApp from './CreativeWorksApp';

const TerminalApp: React.FC = () => {
  const { history, currentDirectory, addToHistory, changeDirectory } = useTerminal();
  const { openWindow } = useWindows();
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (command: string) => {
    const args = command.trim().split(' ');
    const cmd = args[0].toLowerCase();
    const params = args.slice(1);

    switch (cmd) {
      case '':
        addToHistory('', '');
        break;
      
      case 'help':
        addToHistory('help', [
          'Available commands:',
          '  ls                    - List directory contents',
          '  cd <directory>        - Change directory',
          '  cat <file>            - Display file contents',
          '  open <app>            - Open application',
          '  whoami                - Display user information',
          '  clear                 - Clear terminal',
          '  pwd                   - Show current directory',
          '  tree                  - Show directory tree',
          '  neofetch              - Display system information',
          '  philosophy            - Open philosophy library',
          '  creative              - Open creative works',
          '',
          'Examples:',
          '  open blog             - Open blog application',
          '  cat resume.txt        - Display resume',
          '  ls Projects           - List projects',
          '  philosophy            - Browse philosophical works',
        ].join('\n'));
        break;

      case 'ls':
        const targetDir = params[0] || '.';
        const dirData = targetDir === '.' ? fileSystemData : fileSystemData.children?.find(d => d.name === targetDir);
        
        if (dirData && dirData.children) {
          const items = dirData.children.map(item => {
            const icon = item.type === 'folder' ? '📁' : '📄';
            return `${icon} ${item.name}`;
          });
          addToHistory(`ls ${targetDir}`, items.join('\n'));
        } else {
          addToHistory(`ls ${targetDir}`, `ls: cannot access '${targetDir}': No such file or directory`);
        }
        break;

      case 'cd':
        const newDir = params[0] || '/home/daniel';
        changeDirectory(newDir);
        addToHistory(`cd ${newDir}`, `Changed directory to ${newDir}`);
        break;

      case 'pwd':
        addToHistory('pwd', currentDirectory);
        break;

      case 'whoami':
        addToHistory('whoami', [
          'Daniel Demerw',
          'Software Engineer, AI Enthusiast & Creative',
          'Location: Ethiopia',
          'Interests: AI, Software Engineering, Philosophy, Art',
          'Education: Computer Science (UoPeople), Applied AI (IU), Software Engineering (Holberton)',
          'Philosophy: David Hume, Bertrand Russell, Thomas Aquinas',
          'Email: daniel@example.com',
          'GitHub: github.com/sheshbazzarr',
          '',
          'Welcome to በልዳዶስ (BeldaDOS) - where technology meets wisdom!'
        ].join('\n'));
        break;

      case 'cat':
        const filename = params[0];
        if (filename) {
          handleCatCommand(filename);
        } else {
          addToHistory('cat', 'cat: missing file operand');
        }
        break;

      case 'open':
        const app = params[0];
        if (app) {
          handleOpenCommand(app);
        } else {
          addToHistory('open', 'open: missing application name');
        }
        break;

      case 'philosophy':
        openWindow({
          title: 'Philosophy',
          content: <PhilosophyApp />,
          position: { x: 200, y: 100 },
          size: { width: 800, height: 600 },
          isMinimized: false,
        });
        addToHistory('philosophy', 'Opening Philosophy Library...');
        break;

      case 'creative':
        openWindow({
          title: 'Creative Works',
          content: <CreativeWorksApp />,
          position: { x: 250, y: 150 },
          size: { width: 900, height: 650 },
          isMinimized: false,
        });
        addToHistory('creative', 'Opening Creative Works...');
        break;

      case 'clear':
        addToHistory('clear', '');
        break;

      case 'tree':
        addToHistory('tree', generateTree(fileSystemData));
        break;

      case 'neofetch':
        addToHistory('neofetch', [
          '                    ██████                    daniel@beldados',
          '                ████▒▒▒▒▒▒████                ---------------',
          '              ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██              OS: በልዳዶስ (BeldaDOS) v1.0',
          '            ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██            Kernel: WebKit Ethiopian Edition',
          '          ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██          Shell: BeldaShell',
          '        ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██        DE: BeldaDE',
          '      ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██      Theme: Ethiopian Cultural',
          '    ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██    Terminal: BeldaTerm',
          '  ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██  Memory: ∞ / ∞',
          '██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██ CPU: Philosophical Processing Unit',
          '██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██ GPU: Creative Rendering Engine',
          '██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██ Uptime: Since ancient times',
          '  ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██  Packages: Philosophy, Art, Code',
          '    ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██    Resolution: Infinite wisdom',
          '      ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██      WM: Faith & Reason Manager',
          '        ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██        Font: Ge\'ez Unicode',
          '          ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██          Colors: Ethiopian Heritage',
          '            ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██            ',
          '              ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██              "Faith and reason are like',
          '                ████▒▒▒▒▒▒████                two wings on which the human',
          '                    ██████                    spirit rises to truth" - JP II',
        ].join('\n'));
        break;

      default:
        addToHistory(command, `bash: ${cmd}: command not found`);
        break;
    }
  };

  const handleCatCommand = (filename: string) => {
    const fileContent = getFileContent(filename);
    if (fileContent) {
      addToHistory(`cat ${filename}`, fileContent);
    } else {
      addToHistory(`cat ${filename}`, `cat: ${filename}: No such file or directory`);
    }
  };

  const handleOpenCommand = (app: string) => {
    const appConfig = {
      blog: {
        title: 'Blog',
        content: <BlogApp />,
        size: { width: 800, height: 600 },
      },
      projects: {
        title: 'Projects',
        content: <ProjectsApp />,
        size: { width: 1000, height: 700 },
      },
      photos: {
        title: 'Photos',
        content: <PhotosApp />,
        size: { width: 900, height: 650 },
      },
      resume: {
        title: 'Resume',
        content: <ResumeApp />,
        size: { width: 700, height: 800 },
      },
      devotions: {
        title: 'Devotions',
        content: <DevotionsApp />,
        size: { width: 600, height: 500 },
      },
      contact: {
        title: 'Contact',
        content: <ContactApp />,
        size: { width: 500, height: 400 },
      },
      philosophy: {
        title: 'Philosophy',
        content: <PhilosophyApp />,
        size: { width: 800, height: 600 },
      },
      creative: {
        title: 'Creative Works',
        content: <CreativeWorksApp />,
        size: { width: 900, height: 650 },
      },
      explorer: {
        title: 'File Explorer',
        content: <FileExplorer />,
        size: { width: 900, height: 600 },
      },
    };

    const config = appConfig[app as keyof typeof appConfig];
    if (config) {
      openWindow({
        title: config.title,
        content: config.content,
        position: { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
        size: config.size,
        isMinimized: false,
      });
      addToHistory(`open ${app}`, `Opening ${config.title}...`);
    } else {
      addToHistory(`open ${app}`, `open: ${app}: Application not found`);
    }
  };

  const getFileContent = (filename: string): string | null => {
    const files: { [key: string]: string } = {
      'resume.txt': `
DANIEL DEMERW
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
• Open Source Contributions
      `,
      'philosophy.txt': `
FAITH AND REASON: A HARMONY

In Ethiopia's rich Christian tradition, faith and reason have always walked hand in hand. 
This reflection explores how understanding theology and philosophy enriches not just scholars, 
but any believer seeking depth in their spiritual journey.

The ancient Ethiopian church has long embraced both mystical experience and rational inquiry. 
From the scholarly traditions of Lalibela to the theological debates of Debre Libanos, 
our heritage shows that faith does not shy away from questions but welcomes them.

In my own journey as a software engineer and AI enthusiast, I find parallels between debugging code and 
exploring theological questions. Both require patience, systematic thinking, and the 
humility to acknowledge when we don't yet understand.

My study of David Hume's skepticism has taught me intellectual humility, while Bertrand Russell's 
analytical clarity has shaped how I approach complex problems. Thomas Aquinas shows how reason 
can support and illuminate faith without replacing it.

The beauty of Ethiopian Christianity lies in its integration of head and heart, 
reason and revelation, tradition and innovation. This synthesis offers a model 
for how faith can engage with modernity without losing its essential character.

As I continue in both my technical and spiritual growth, I'm reminded that the 
God who created the elegant mathematical laws governing our universe is the same 
God who calls us into relationship. In this integration, I find both my calling 
and my peace.
      `,
      'contact.json': `
{
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
  ]
}
      `,
    };

    return files[filename] || null;
  };

  const generateTree = (data: any, prefix = ''): string => {
    if (!data.children) return '';
    
    return data.children.map((item: any, index: number) => {
      const isLast = index === data.children.length - 1;
      const current = prefix + (isLast ? '└── ' : '├── ') + item.name;
      const children = item.children ? 
        generateTree(item, prefix + (isLast ? '    ' : '│   ')) : '';
      return current + (children ? '\n' + children : '');
    }).join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  return (
    <div className="h-full bg-black text-green-400 font-mono text-sm p-4 overflow-hidden flex flex-col">
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto space-y-1"
      >
        {history.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-400">daniel@beldados:{currentDirectory}$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalApp;