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

  const handleDownloadResume = () => {
    // Create a URL for your resume file
    const resumeUrl = '/Anu_Sakpibal_Resume.pdf'; // Make sure to add your resume to the public folder
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Anu_Sakpibal_Resume.pdf');
    
    // Fallback for browsers that require the link to be in the DOM
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box className="terminal">
      <Box className="terminal-header">
        <div className="terminal-button close" />
        <div className="terminal-button minimize" />
        <div className="terminal-button maximize" />
        <div className="terminal-title">anu.me ~ portfolio</div>
      </Box>
      <Box className="terminal-body">
        {/* Resume Download Banner */}
        <div className="resume-banner">
          <span className="resume-text">
            📄 Looking for a quick overview? Download my resume!
          </span>
          <button 
            className="resume-button"
            onClick={handleDownloadResume}
          >
            ⬇️ Download Resume
          </button>
        </div>
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