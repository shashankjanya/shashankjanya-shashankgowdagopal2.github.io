export default {
  id: 'contact',
  title: 'Get In Touch',
  render(container) {
    container.innerHTML = `
      <div class="contact-content">
        <p class="contact-lead">
        I’m currently looking for full-time opportunities in aircraft conceptual design, aligned with my master’s thesis work. If you’d like to discuss a role, a project idea, or just connect, feel free to reach out.
        </p>
        

        <div class="contact-socials">
          <a href="mailto:shashank.gopal@tum.de" class="social-link-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>shashank.gopal@tum.de</span>
          </a>
          
          <div class="social-link-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.41 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.32-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+49 1520 420 4933</span>
          </div>
        </div>
      </div>
    `;
  }
};