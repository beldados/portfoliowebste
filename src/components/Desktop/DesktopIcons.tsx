import React from 'react';
import { useWindows } from '../../contexts/WindowContext';
import { 
  FolderOpen, 
  Terminal, 
  User, 
  FileText, 
  Camera, 
  Code, 
  BookOpen,
  Heart,
  Mail,
  Palette,
  Brain
} from 'lucide-react';
import TerminalApp from '../Apps/TerminalApp';
import FileExplorer from '../FileExplorer/FileExplorer';
import ProjectsApp from '../Apps/ProjectsApp';
import BlogApp from '../Apps/BlogApp';
import PhotosApp from '../Apps/PhotosApp';
import ResumeApp from '../Apps/ResumeApp';
import DevotionsApp from '../Apps/DevotionsApp';
import ContactApp from '../Apps/ContactApp';
import PhilosophyApp from '../Apps/PhilosophyApp';
import CreativeWorksApp from '../Apps/CreativeWorksApp';

interface DesktopIcon {
  id: string;
  name: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  action: () => void;
}

const DesktopIcons: React.FC = () => {
  const { openWindow } = useWindows();

  const icons: DesktopIcon[] = [
    {
      id: 'terminal',
      name: 'Terminal',
      icon: <Terminal className="w-8 h-8" />,
      position: { x: 50, y: 50 },
      action: () => openWindow({
        title: 'Terminal',
        content: <TerminalApp />,
        position: { x: 100, y: 100 },
        size: { width: 800, height: 500 },
        isMinimized: false,
      }),
    },
    {
      id: 'file-explorer',
      name: 'File Explorer',
      icon: <FolderOpen className="w-8 h-8" />,
      position: { x: 50, y: 150 },
      action: () => openWindow({
        title: 'File Explorer',
        content: <FileExplorer />,
        position: { x: 150, y: 150 },
        size: { width: 900, height: 600 },
        isMinimized: false,
      }),
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: <Code className="w-8 h-8" />,
      position: { x: 50, y: 250 },
      action: () => openWindow({
        title: 'Projects',
        content: <ProjectsApp />,
        position: { x: 200, y: 100 },
        size: { width: 1000, height: 700 },
        isMinimized: false,
      }),
    },
    {
      id: 'blog',
      name: 'Blog',
      icon: <BookOpen className="w-8 h-8" />,
      position: { x: 50, y: 350 },
      action: () => openWindow({
        title: 'Blog',
        content: <BlogApp />,
        position: { x: 250, y: 150 },
        size: { width: 800, height: 600 },
        isMinimized: false,
      }),
    },
    {
      id: 'philosophy',
      name: 'Philosophy',
      icon: <Brain className="w-8 h-8" />,
      position: { x: 50, y: 450 },
      action: () => openWindow({
        title: 'Philosophy',
        content: <PhilosophyApp />,
        position: { x: 300, y: 200 },
        size: { width: 800, height: 600 },
        isMinimized: false,
      }),
    },
    {
      id: 'creative-works',
      name: 'Creative Works',
      icon: <Palette className="w-8 h-8" />,
      position: { x: 150, y: 50 },
      action: () => openWindow({
        title: 'Creative Works',
        content: <CreativeWorksApp />,
        position: { x: 350, y: 100 },
        size: { width: 900, height: 650 },
        isMinimized: false,
      }),
    },
    {
      id: 'photos',
      name: 'Photos',
      icon: <Camera className="w-8 h-8" />,
      position: { x: 150, y: 150 },
      action: () => openWindow({
        title: 'Photos',
        content: <PhotosApp />,
        position: { x: 400, y: 200 },
        size: { width: 900, height: 650 },
        isMinimized: false,
      }),
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: <FileText className="w-8 h-8" />,
      position: { x: 150, y: 250 },
      action: () => openWindow({
        title: 'Resume',
        content: <ResumeApp />,
        position: { x: 450, y: 100 },
        size: { width: 700, height: 800 },
        isMinimized: false,
      }),
    },
    {
      id: 'devotions',
      name: 'Devotions',
      icon: <Heart className="w-8 h-8" />,
      position: { x: 150, y: 350 },
      action: () => openWindow({
        title: 'Devotions',
        content: <DevotionsApp />,
        position: { x: 500, y: 150 },
        size: { width: 600, height: 500 },
        isMinimized: false,
      }),
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: <Mail className="w-8 h-8" />,
      position: { x: 150, y: 450 },
      action: () => openWindow({
        title: 'Contact',
        content: <ContactApp />,
        position: { x: 550, y: 200 },
        size: { width: 500, height: 400 },
        isMinimized: false,
      }),
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute pointer-events-auto group cursor-pointer"
          style={{
            left: icon.position.x,
            top: icon.position.y,
          }}
          onDoubleClick={icon.action}
        >
          <div className="flex flex-col items-center p-3 rounded-lg hover:bg-black hover:bg-opacity-30 transition-all duration-200 group-hover:scale-105 backdrop-blur-sm">
            <div className="text-white group-hover:text-yellow-300 transition-colors duration-200 drop-shadow-lg">
              {icon.icon}
            </div>
            <span className="text-white text-sm mt-2 font-medium text-center max-w-20 truncate drop-shadow-lg">
              {icon.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;