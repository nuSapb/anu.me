import React from 'react';
import { Box } from '@mui/material';

const TerminalOutput = ({ entry }) => {
  if (entry.isCommand) {
    return (
      <Box className="terminal-command">
        <span className="prompt-symbol">➜</span>
        <span className="prompt-path">~/anu.me</span>
        <span className="command-text">{entry.input}</span>
      </Box>
    );
  }

  const outputClassName = entry.isError ? 'terminal-error' : 
                         entry.isWelcome ? 'terminal-welcome' : 
                         'terminal-output';

  if (entry.isHtml) {
    return (
      <Box 
        className={outputClassName}
        dangerouslySetInnerHTML={{ __html: entry.output }}
      />
    );
  }

  return (
    <Box className={outputClassName}>
      {entry.output.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </Box>
  );
};

export default TerminalOutput;