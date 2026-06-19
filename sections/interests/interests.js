export default {
  id: 'interests',
  title: 'Interests & Hobbies',
  render(container) {
    container.innerHTML = `
      <div class="interests-content">
        <div class="interests-grid">
          
          <div class="interest-card">
            <div class="interest-icon">
              <!-- Lightbulb: clarity, reducing to fundamentals, illuminating ideas -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
              </svg>
            </div>
            <h3>Teaching</h3>
            <p>I like to reduce every topic to its most fundamental aspects. I want to explain things in a way where no one has to rely on pure memorization; the concept should just make sense. I have actively applied this by leading multiple teaching sessions for my classmates and junior students, specifically focusing on aircraft conceptual design and flight dynamics.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <!-- Zap/lightning: fast-paced, high-energy, dynamic environments -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3>Dynamic Environment</h3>
            <p>I thrive in fast-paced, high-pressure environments. Whether it is an engineering sprint or the backstage energy of a live concert, being surrounded by highly passionate people working toward a shared goal is a major source of motivation for me.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <!-- Music note + waveform: keyboard diploma, cinematic scores, composition -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h3>Music Production</h3>
            <p>I hold a formal diploma in keyboard, but I have also taught myself several other instruments, alongside music production. I have a deep appreciation for cinematic scores and their crucial role in delivering a story. To better understand musical composition, I spend my time actively recreating these complex scores from scratch.</p>
          </div>

          <div class="interest-card">
            <div class="interest-icon">
              <!-- CPU/chip: microcontrollers, open-source hardware, Teensy boards -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="7" y="7" width="10" height="10" rx="1" />
                <path d="M9 7V4" /><path d="M12 7V4" /><path d="M15 7V4" />
                <path d="M9 20v-3" /><path d="M12 20v-3" /><path d="M15 20v-3" />
                <path d="M7 9H4" /><path d="M7 12H4" /><path d="M7 15H4" />
                <path d="M20 9h-3" /><path d="M20 12h-3" /><path d="M20 15h-3" />
              </svg>
            </div>
            <h3>Hardware Prototyping</h3>
            <p>I spend my downtime researching the potential of open-source hardware. I love exploring community-driven projects and taking pocket-sized boards, like the Teensy, to integrate into my own custom physical setups.</p>
          </div>

        </div>
      </div>
    `;
  }
};
