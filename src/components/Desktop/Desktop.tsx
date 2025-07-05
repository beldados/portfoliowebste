import React, { useState, useEffect } from 'react';
import Wallpaper from './Wallpaper';
import DesktopIcons from './DesktopIcons';
import Taskbar from '../Taskbar/Taskbar';
import WindowManager from '../Windows/WindowManager';
import { useWindows } from '../../contexts/WindowContext';

const Desktop: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { windows } = useWindows();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Wallpaper />
      <DesktopIcons />
      <WindowManager />
      <Taskbar currentTime={currentTime} />
      
      {/* System info with Ethiopian branding */}
      <div className="fixed top-4 right-4 text-white text-sm font-mono bg-black bg-opacity-60 px-4 py-3 rounded-lg backdrop-blur-sm border border-yellow-400 border-opacity-30">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-yellow-400">በልዳዶስ</span>
          <span className="text-gray-300">v1.0</span>
        </div>
        <div className="text-xs text-gray-300">
          {windows.length} windows | Ethiopian OS
        </div>
      </div>
    </div>
  );
};

export default Desktop;