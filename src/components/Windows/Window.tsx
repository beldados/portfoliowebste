import React, { useState, useRef, useEffect } from 'react';
import { useWindows } from '../../contexts/WindowContext';
import { Minus, Square, X, Maximize2 } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  zIndex: number;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  position,
  size,
  isMinimized,
  zIndex,
  children,
}) => {
  const { closeWindow, minimizeWindow, maximizeWindow, bringToFront, updateWindowPosition, updateWindowSize } = useWindows();
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, action: 'drag' | 'resize') => {
    e.preventDefault();
    bringToFront(id);
    
    if (action === 'drag') {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    } else if (action === 'resize') {
      setIsResizing(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - size.width));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - size.height - 64));
        updateWindowPosition(id, { x: newX, y: newY });
      } else if (isResizing) {
        const newWidth = Math.max(400, e.clientX - position.x);
        const newHeight = Math.max(300, e.clientY - position.y);
        updateWindowSize(id, { width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, position, size, id, updateWindowPosition, updateWindowSize]);

  if (isMinimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className="absolute bg-white rounded-lg shadow-2xl overflow-hidden pointer-events-auto"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex,
      }}
      onMouseDown={() => bringToFront(id)}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white cursor-move select-none"
        onMouseDown={(e) => handleMouseDown(e, 'drag')}
      >
        <span className="font-medium text-sm">{title}</span>
        <div className="flex items-center space-x-2">
          <button
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            onClick={() => minimizeWindow(id)}
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:bg-gray-700 rounded transition-colors"
            onClick={() => maximizeWindow(id)}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            className="p-1 hover:bg-red-600 rounded transition-colors"
            onClick={() => closeWindow(id)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-full pb-8 overflow-hidden">
        {children}
      </div>

      {/* Resize handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-gray-300 hover:bg-gray-400 transition-colors"
        onMouseDown={(e) => handleMouseDown(e, 'resize')}
      />
    </div>
  );
};

export default Window;