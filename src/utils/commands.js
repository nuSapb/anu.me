// src/utils/commands.js
export const commands = {
  about: {
    description: "Display basic information about me",
    execute: () => ({
      output: `
Anu Sakpibal
Test Development Engineer
Location: Chon Buri, Thailand
Email: nuhundred@gmail.com
Phone: +66 98 992 7739

Professional Summary:
I am a Test Development Engineer with strong experience in testing and developing 
systems for electronic products, including automotive and high-reliability applications. 
I follow industry standards like IATF 16949 to ensure product quality. 

Core Competencies:
• Test automation and system development
• Industry standards compliance (IATF 16949)
• Data analysis and quality improvement
• Full-stack web development
• IoT and networking expertise

Type 'help' to see all available commands.`,
    }),
  },

  skills: {
    description: "List my technical skills and expertise",
    execute: () => ({
      output: `
Technical Skills & Expertise:

Programming Languages:
• Python, C#, C/C++
• LabVIEW
• JavaScript, HTML, CSS
• SQL

Testing & Quality:
• Electronics Testing
• IATF 16949 Compliance
• CPK, SPC, MSA & GR&R
• Test Automation
• Quality Assurance

Development Tools:
• Git Version Control
• MSSQL & SQL Server
• MES Software
• Power BI
• ReactJS

Data Analysis:
• Statistical Process Control
• Power BI Analytics
• Python Data Processing
• Yield Improvement
• Quality Metrics

Industry Knowledge:
• Automotive Electronics
• Manufacturing Processes
• Network Infrastructure
• IoT Systems
• Production Optimization`,
    }),
  },

  experience: {
    description: "Show my professional experience",
    execute: () => ({
      output: `
Professional Experience:

🏢 Kimball Electronics (Thailand) | Test Development Engineer
   July 2018 - Present
   • Developed test systems following industry standards
   • Implemented CPK, SPC, MSA, and Gage R&R procedures
   • Automated testing using LabVIEW, Python, and C++
   • Achieved 30% reduction in manual work through automation
   • Improved product yield by 15% through data analysis
   • Reduced manual errors by 25% through MES integration

🏢 Celestica (Thailand) | Test Development Engineer
   June 2015 - July 2018
   • Built automated test systems for electronic products
   • Conducted Gage R&R tests for measurement reliability
   • Reduced test time by 20% through automation
   • Supported new product introductions
   • Ensured compliance with industry standards

🏢 Canon Prachinburi | System Engineer
   August 2014 - June 2015
   • Managed SQL databases for production data
   • Developed real-time monitoring tools in C#
   • Optimized production processes

🏢 Mobicrat Co., Ltd. | Network Engineer
   April 2014 - August 2014
   • Designed and implemented network systems
   • Provided network troubleshooting and optimization`,
    }),
  },

  education: {
    description: "Show my educational background and certifications",
    execute: () => ({
      output: `
Education:

🎓 Bachelor of Engineering in Computer Engineering
   Kasetsart University, Sriracha Campus - Chonburi
   March 2010 - April 2014
   • Senior Project: Home Automation System using Android

Certifications & Courses:

📚 Full-Stack Web Developer
   Software Park Thailand Codecamp
   • Complete web development curriculum
   • Front-end and back-end technologies

📚 Data Science and Machine Learning
   Digital Academy Thailand
   • Introduction to data science
   • Machine learning fundamentals

📚 AI and Robotics
   Kasetsart University
   • AI principles and applications
   • Robotics systems and control`,
    }),
  },

  projects: {
    description: "Display notable projects and achievements",
    execute: () => ({
      output: `
Notable Projects:

🔧 Electronics Test System
   • Developed automated test systems for electronic products
   • Implemented industry standard compliance (IATF 16949)
   • Reduced manual testing time by 30%
   • Improved accuracy and reliability

📊 Production Analytics Platform
   • Created data analysis system using Power BI and Python
   • Improved production yield by 15%
   • Automated reporting and monitoring
   • Real-time quality metrics tracking

🌐 Test Management Web Platform
   • Developed web-based test platform
   • Simplified data collection process
   • Reduced manual work and errors
   • Improved team collaboration

🏭 MES Integration System
   • Integrated manufacturing execution system
   • Reduced manual errors by 25%
   • Automated data collection
   • Enhanced production tracking`,
    }),
  },

  contact: {
    description: "Get my contact information",
    execute: () => ({
      output: `
Contact Information:

📧 Email: <a href="mailto:nuhundred@gmail.com" class="terminal-link">nuhundred@gmail.com</a>
📱 Phone: <a href="tel:+66989927739" class="terminal-link">+66 98 992 7739</a>
📍 Location: Chon Buri, Thailand

Social Links:
👨‍💻 GitHub:   <a href="https://github.com/nuSapb" target="_blank" class="terminal-link">github.com/nuSapb</a>
✍️ Medium:   <a href="https://nunabnan.medium.com/" target="_blank" class="terminal-link">nunabnan.medium.com</a>
💼 LinkedIn: <a href="https://www.linkedin.com/in/asakpib/" target="_blank" class="terminal-link">linkedin.com/in/asakpib</a>`,
      isHtml: true
    }),
  },

  social: {
    description: '🔗 View my social media profiles',
    execute: () => ({
      output: `
<div class="social-section">
  <div class="social-platform">
    <div class="platform-header">
      <span class="platform-icon">👨‍💻</span>
      <span class="platform-name">GitHub</span>
    </div>
    <div class="platform-content">
      <div><a href="https://github.com/nuSapb" target="_blank" class="terminal-link">github.com/nuSapb</a></div>
      <div class="platform-details">• Open source projects and contributions</div>
      <div class="platform-details">• Development portfolios and repositories</div>
    </div>
  </div>

  <div class="social-platform">
    <div class="platform-header">
      <span class="platform-icon">✍️</span>
      <span class="platform-name">Medium</span>
    </div>
    <div class="platform-content">
      <div><a href="https://nunabnan.medium.com/" target="_blank" class="terminal-link">nunabnan.medium.com</a></div>
      <div class="platform-details">• Technical articles and tutorials</div>
      <div class="platform-details">• Development experiences and insights</div>
    </div>
  </div>

  <div class="social-platform">
    <div class="platform-header">
      <span class="platform-icon">💼</span>
      <span class="platform-name">LinkedIn</span>
    </div>
    <div class="platform-content">
      <div><a href="https://www.linkedin.com/in/asakpib/" target="_blank" class="terminal-link">linkedin.com/in/asakpib</a></div>
      <div class="platform-details">• Professional network and experience</div>
      <div class="platform-details">• Career updates and achievements</div>
    </div>
  </div>
</div>`,
      isHtml: true
    }),
  },

  interests: {
    description: "Show my personal interests and hobbies",
    execute: () => ({
      output: `
Personal Interests:

🔧 Electronics Testing
   Passionate about developing and improving test systems

💻 Web Development
   Creating efficient and user-friendly web applications

🌐 IoT & Network Technology
   Exploring innovative IoT solutions and network infrastructure

⛺ Camping
   Enjoying outdoor activities and nature

🍺 Craft Beer
   Appreciating artisanal brewing and beer culture`,
    }),
  },

  help: {
    description: 'Show available commands',
    execute: () => ({
      output: `
📄 Tip: You can download my resume directly from the banner at the top!

Available Commands:

about      - Display basic information about me
skills     - List my technical skills and expertise
experience - Show my professional experience
education  - Show my educational background
projects   - Display notable projects and achievements
contact    - 📱 Get my contact information
social     - 🔗 View my social media profiles
interests  - Show my personal interests and hobbies
clear      - Clear the terminal
help       - Show this help message

Type any command to learn more about my professional background.`,
    }),
  },

  clear: {
    description: "Clear the terminal",
    execute: () => ({
      output: "",
      clear: true,
    }),
  },
};

export default commands;
