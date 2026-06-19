export default {
  id: 'about',
  title: 'About Me',
  render(container) {
    container.innerHTML = `
      <div class="about-content">
        <div class="about-text">
          <p>
            I am currently completing my Master's in Aerospace Engineering at the Technical University of Munich. Over the years, through various projects, I have discovered how I work best. I find being goal-oriented far more satisfying than being task-oriented, and I naturally gravitate toward taking full responsibility and accountability for my work. I have also found that dynamic environments and working under time pressure actually help me connect with a team and execute at a higher level.
          </p>
          <p>
            During my Bachelor's, I learned some of my most valuable lessons from projects that ultimately failed. In my Master's, I made entirely new mistakes and learned from those as well. I actively carry these lessons forward and apply them in my work, with a focus on continuous improvement and practical execution..
          </p>
          <p>
           Outside of engineering, I am a multi-instrumentalist. I often extend my interest in building systems into my free time, recreating cinematic music scores in a digital audio workstation and experimenting with AI agents to automate simple workflows.
          </p>
          
          <div class="skills-section-inside">
            
            <h3 class="subsection-title">Technical Expertise</h3>
            <div class="skills-grid-inside">
              <div class="skill-col">
                <h4>Languages</h4>
                <ul class="skill-list-inside">
                  <li>Python</li>
                  <li>MATLAB</li>
                </ul>
              </div>
             <div class="skill-col">
                <h4>Tools & Systems</h4>
                <ul class="skill-list-inside">
                  <li>Git / GitHub Version Control</li>
                  <li>Simulink</li>
                  <li>SolidWorks</li>
                </ul>
              </div>
              <div class="skill-col">
                <h4>Engineering Domains</h4>
                <ul class="skill-list-inside">
                  <li>Aircraft Conceptual Design</li>
                  <li>Aircraft-Level Performance Analysis</li>
                  <li>Piloting Fixed Wing & Rotary Wing UAVs</li>
                  <li>UAV Flight Log Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="about-img-container">
          <div class="about-img-wrapper">
            <div class="about-img-fallback">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" width="80" height="80">
                <circle cx="50" cy="35" r="15" stroke-width="2"/>
                <path d="M25 80c0-12 10-18 25-18s25 6 25 18" stroke-width="2"/>
                <circle cx="50" cy="50" r="45" stroke-width="1" stroke-dasharray="3 3"/>
              </svg>
              <span>Aerospace Engineer</span>
            </div>
            <img src="sections/about/pic.jpg" alt="Profile Picture" class="about-img" onerror="this.style.display='none'; this.previousElementSibling.style.display='flex';">
          </div>
        </div>
      </div>
    `;
  }
};
