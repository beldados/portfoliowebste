import React from 'react';
import Desktop from './components/Desktop/Desktop';
import { WindowProvider } from './contexts/WindowContext';
import { TerminalProvider } from './contexts/TerminalContext';

function App() {
  return (
    <WindowProvider>
      <TerminalProvider>
        <Desktop />
      </TerminalProvider>
    </WindowProvider>
  );
}

export default App;