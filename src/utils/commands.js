// src/utils/commands.js
export const commands = {
  about: {
    description: 'Display information about me',
    execute: () => ({
      output: `Name: Anu Sakpibal
Location: Chon Buri, Thailand
Role: Test Development Engineer

I am a passionate Test Development Engineer with expertise in hardware/software testing,
programming, and web development. With experience at companies like Kimball Electronics
and Celestica, I've developed strong skills in creating and maintaining test systems.`,
    }),
  },

  skills: {
    description: 'List my technical skills',
    execute: () => ({
      output: `Technical Skills:

Programming Languages:
- Python, LabView, C#, C/C++
- JavaScript/ReactJS
- HTML/CSS

Testing:
- Hardware & Software Testing
- Automated Test Systems
- Test Case Development

Other Skills:
- Project Management
- SQL Databases
- Git Version Control
- IoT & Embedded Systems`,
    }),
  },

  experience: {
    description: 'Show my work experience',
    execute: () => ({
      output: `Work Experience:

🏢 Kimball Electronics (Thailand) | Test Development Engineer
   July 2018 - Present
   • Built test systems using LabView, Python, C/C++
   • Developed web interfaces with ReactJS
   • Managed automated test systems and fixtures

🏢 Celestica (Thailand) | Test Development Engineer
   June 2015 - July 2018
   • Designed hardware/software testers
   • Created web interfaces for test systems
   • Led project management initiatives

🏢 Canon (Thailand) | System Engineer
   August 2014 - June 2015
   • Managed SQL databases
   • Developed monitoring applications
   • Built test cases for copier testing`,
    }),
  },

  education: {
    description: 'Show my educational background',
    execute: () => ({
      output: `Education:

🎓 Bachelor of Engineering in Computer Engineering
   Kasetsart University, Chonburi
   March 2010 - April 2014
   • Senior Project: Home Automation System using IoT and Android

🎓 High School
   Sriyapai, Chumphon
   March 2009 - March 2011
   • Focus: Math and Science subjects

📚 Additional Courses:
   • AI and Robotics - Kasetsart University
   • Full-Stack Developer - Thai Programmer Association
   • Data Science and Machine Learning - Digital Academy Thailand`,
    }),
  },

  contact: {
    description: 'Get my contact information',
    execute: () => ({
      output: `Contact Information:

📧 Email: nuhundred@gmail.com
📱 Phone: +66 98 992 7739
🔗 GitHub: https://github.com/nuSapb
📝 Medium: https://medium.com/@nunabnan`,
    }),
  },

  help: {
    description: 'Show available commands',
    execute: () => ({
      output: `Available Commands:

about      - Display information about me
skills     - List my technical skills
experience - Show my work experience
education  - Show my educational background
contact    - Get my contact information
clear      - Clear the terminal
help       - Show this help message

Type any command to get started!`,
    }),
  },

  clear: {
    description: 'Clear the terminal',
    execute: () => ({
      output: '',
      clear: true,
    }),
  },
};

export default commands;