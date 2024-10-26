import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { commands } from '../../utils/commands'; // Updated import path
import TerminalPrompt from './TerminalPrompt';
import TerminalOutput from './TerminalOutput';
import './Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentInput, setCurrentInput] = useState('');
  const terminalRef = useRef(null);

  const welcomeMessage = {
    output: `Welcome to my terminal portfolio! Type 'help' to see available commands.
Current date: ${new Date().toLocaleDateString()}
Terminal v1.0.0`,
    isWelcome: true,
  };

  useEffect(() => {
    setHistory([welcomeMessage]);
  }, []);

  const executeCommand = (input) => {
    const trimmedInput = input.trim().toLowerCase();
    const [commandName, ...args] = trimmedInput.split(' ');

    if (trimmedInput === '') {
      return { output: '' };
    }

    const command = commands[commandName];
    if (command) {
      return command.execute(args);
    }

    return {
      output: `Command not found: ${commandName}. Type 'help' for available commands.`,
      isError: true,
    };
  };

  const handleCommand = (input) => {
    const result = executeCommand(input);

    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
    }

    if (result.clear) {
      setHistory([welcomeMessage]);
    } else {
      setHistory(prev => [
        ...prev,
        { input, isCommand: true },
        { ...result, isOutput: true },
      ]);
    }

    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <Box className="terminal" ref={terminalRef}>
      <Box className="terminal-header">
        <div className="terminal-button close" />
        <div className="terminal-button minimize" />
        <div className="terminal-button maximize" />
        <div className="terminal-title">anu.me ~ portfolio</div>
      </Box>
      <Box className="terminal-body">
        {history.map((entry, index) => (
          <TerminalOutput key={index} entry={entry} />
        ))}
        <TerminalPrompt
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          handleCommand={handleCommand}
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Box>
  );
};

export default Terminal;