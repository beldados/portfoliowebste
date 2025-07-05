import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalContextType {
  history: string[];
  currentDirectory: string;
  addToHistory: (command: string, output: string) => void;
  changeDirectory: (path: string) => void;
  clearHistory: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const useTerminal = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
};

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<string[]>([
    '$ Welcome to DanielOS',
    '$ Type "help" for available commands',
    '$ Type "ls" to explore the file system',
    ''
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('/home/daniel');

  const addToHistory = (command: string, output: string) => {
    setHistory(prev => [...prev, `$ ${command}`, output, '']);
  };

  const changeDirectory = (path: string) => {
    setCurrentDirectory(path);
  };

  const clearHistory = () => {
    setHistory([
      '$ Welcome to DanielOS',
      '$ Type "help" for available commands',
      '$ Type "ls" to explore the file system',
      ''
    ]);
  };

  return (
    <TerminalContext.Provider value={{
      history,
      currentDirectory,
      addToHistory,
      changeDirectory,
      clearHistory,
    }}>
      {children}
    </TerminalContext.Provider>
  );
};