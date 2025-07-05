import React from 'react';
import { useWindows } from '../../contexts/WindowContext';
import { 
  Terminal, 
  FolderOpen, 
  Code, 
  BookOpen, 
  Camera, 
  FileText,
  Heart,
  Mail,
  Minus,
  X,
  Square,
  Palette
} from 'lucide-react';

interface TaskbarProps {
  currentTime: Date;
}

const Taskbar: React.FC<TaskbarProps> = ({ currentTime }) => {
  const { windows, minimizeWindow, closeWindow, bringToFront } = useWindows();

  const getIconForWindow = (title: string) => {
    switch (title) {
      case 'Terminal': return <Terminal className="w-4 h-4" />;
      case 'File Explorer': return <FolderOpen className="w-4 h-4" />;
      case 'Projects': return <Code className="w-4 h-4" />;
      case 'Blog': return <BookOpen className="w-4 h-4" />;
      case 'Photos': return <Camera className="w-4 h-4" />;
      case 'Resume': return <FileText className="w-4 h-4" />;
      case 'Devotions': return <Heart className="w-4 h-4" />;
      case 'Contact': return <Mail className="w-4 h-4" />;
      case 'Philosophy': return <BookOpen className="w-4 h-4" />;
      case 'Creative Works': return <Palette className="w-4 h-4" />;
      default: return <Square className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-black bg-opacity-80 backdrop-blur-sm border-t border-yellow-400 border-opacity-30 flex items-center justify-between px-4 z-50">
      {/* Left side - BeldaDOS logo with Ethiopian styling */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-black font-bold text-xs">በልዳ</span>
        </div>
        <div className="text-white">
          <div className="font-bold text-sm">በልዳዶስ</div>
          <div className="text-xs text-gray-300">BeldaDOS</div>
        </div>
      </div>

      {/* Center - Open windows */}
      <div className="flex space-x-2 max-w-2xl overflow-x-auto">
        {windows.map((window) => (
          <div
            key={window.id}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              window.isMinimized 
                ? 'bg-gray-700 bg-opacity-50' 
                : 'bg-yellow-400 bg-opacity-20 border border-yellow-400 border-opacity-30'
            }`}
            onClick={() => {
              if (window.isMinimized) {
                minimizeWindow(window.id);
              }
              bringToFront(window.id);
            }}
          >
            <div className="text-white">
              {getIconForWindow(window.title)}
            </div>
            <span className="text-white text-sm font-medium max-w-32 truncate">
              {window.title}
            </span>
            <div className="flex space-x-1 ml-2">
              <button
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(window.id);
                }}
              >
                <Minus className="w-3 h-3" />
              </button>
              <button
                className="text-red-400 hover:text-red-300 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(window.id);
                }}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - System info with Ethiopian calendar */}
      <div className="flex items-center space-x-4 text-white text-sm">
        <div className="text-center">
          <div className="font-mono text-yellow-400">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="font-mono text-xs text-gray-300">
            {currentTime.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;