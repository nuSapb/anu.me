import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const TerminalPrompt = ({ currentInput, setCurrentInput, handleCommand, onKeyDown }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  return (
    <Box className="terminal-prompt">
      <span className="prompt-symbol">➜</span>
      <span className="prompt-path">~/anu.me</span>
      <input
        ref={inputRef}
        type="text"
        className="terminal-input"
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyPress={handleKeyPress}
        onKeyDown={onKeyDown}
        autoFocus
        spellCheck={false}
      />
    </Box>
  );
};

export default TerminalPrompt;