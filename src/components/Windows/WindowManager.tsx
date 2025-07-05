import React from 'react';
import { useWindows } from '../../contexts/WindowContext';
import Window from './Window';

const WindowManager: React.FC = () => {
  const { windows } = useWindows();

  return (
    <div className="absolute inset-0 pointer-events-none">
      {windows.map((window) => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          position={window.position}
          size={window.size}
          isMinimized={window.isMinimized}
          zIndex={window.zIndex}
        >
          {window.content}
        </Window>
      ))}
    </div>
  );
};

export default WindowManager;