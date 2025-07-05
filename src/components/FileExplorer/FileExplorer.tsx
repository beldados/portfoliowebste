import React, { useState } from 'react';
import { FolderOpen, File, ChevronRight, ChevronDown } from 'lucide-react';
import { fileSystemData } from '../../data/fileSystemData';
import { useWindows } from '../../contexts/WindowContext';

interface FileItem {
  name: string;
  type: 'file' | 'folder';
  children?: FileItem[];
  content?: string;
}

const FileExplorer: React.FC = () => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const { openWindow } = useWindows();

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (items: FileItem[], level = 0, parentPath = '') => {
    return items.map((item, index) => {
      const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
      const isExpanded = expandedFolders.has(currentPath);
      
      return (
        <div key={index} className="select-none">
          <div
            className={`flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer transition-colors ${
              selectedFile?.name === item.name ? 'bg-blue-100' : ''
            }`}
            style={{ paddingLeft: `${level * 20 + 8}px` }}
            onClick={() => {
              if (item.type === 'folder') {
                toggleFolder(currentPath);
              } else {
                setSelectedFile(item);
              }
            }}
          >
            {item.type === 'folder' ? (
              <>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                )}
                <FolderOpen className="w-4 h-4 text-blue-600" />
              </>
            ) : (
              <>
                <div className="w-4" />
                <File className="w-4 h-4 text-gray-600" />
              </>
            )}
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          
          {item.type === 'folder' && isExpanded && item.children && (
            <div>
              {renderFileTree(item.children, level + 1, currentPath)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="h-full flex">
      {/* Left panel - File tree */}
      <div className="w-1/2 border-r border-gray-300 overflow-y-auto">
        <div className="p-4 border-b border-gray-300 bg-gray-50">
          <h3 className="font-semibold text-gray-800">File System</h3>
        </div>
        <div className="p-2">
          {fileSystemData.children && renderFileTree(fileSystemData.children)}
        </div>
      </div>
      
      {/* Right panel - File content */}
      <div className="w-1/2 flex flex-col">
        <div className="p-4 border-b border-gray-300 bg-gray-50">
          <h3 className="font-semibold text-gray-800">
            {selectedFile ? selectedFile.name : 'Select a file'}
          </h3>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedFile ? (
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">File Information</h4>
                <p className="text-sm text-gray-600">Name: {selectedFile.name}</p>
                <p className="text-sm text-gray-600">Type: {selectedFile.type}</p>
              </div>
              
              {selectedFile.content && (
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Content</h4>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                    {selectedFile.content}
                  </pre>
                </div>
              )}
              
              {selectedFile.name.includes('project') && (
                <button
                  onClick={() => openWindow({
                    title: 'Projects',
                    content: <div>Project details would go here</div>,
                    position: { x: 200, y: 200 },
                    size: { width: 800, height: 600 },
                    isMinimized: false,
                  })}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open Project Details
                </button>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              <File className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>Select a file to view its contents</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;