// Shared helper — builds a click-to-play video panel
function buildVideoPlayer(id, src) {
  return `
    <div class="project-video-wrap compact-carousel" id="${id}-video-wrap">
      <video class="project-video" id="${id}-video" src="${src}" preload="metadata" playsinline></video>
      <div class="project-video-overlay" id="${id}-overlay">
        <button class="project-play-btn" id="${id}-play-btn" aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
        <span class="project-play-label">Play</span>
      </div>
    </div>`;
}

// Shared helper — builds a compact carousel for a given id and image list
function buildCarousel(id, images) {
  const slides = images.map(({ src, alt, label }) => `
    <div class="carousel-slide">
      <div class="carousel-fallback">
        <svg viewBox="0 0 160 100" fill="none" stroke="currentColor">
          <rect x="10" y="10" width="140" height="80" rx="3" stroke-width="1"/>
          <line x1="10" y1="32" x2="150" y2="32" stroke-width="0.5" stroke-dasharray="4 3"/>
          <circle cx="80" cy="62" r="14" stroke-width="1"/>
          <line x1="70" y1="62" x2="90" y2="62" stroke-width="1"/>
          <line x1="80" y1="52" x2="80" y2="72" stroke-width="1"/>
        </svg>
        <span>${label}</span>
      </div>
      <!-- Blurred backdrop: same src, covers slide, blurred + dimmed as filler -->
      <img src="${src}" alt="" class="carousel-img-backdrop" aria-hidden="true"
           onerror="this.style.display='none';">
      <!-- Main image: contained (full image visible, no cropping) -->
      <img src="${src}" alt="${alt}" class="carousel-img"
           onerror="this.style.display='none'; this.previousElementSibling.style.display='none'; this.closest('.carousel-slide').querySelector('.carousel-fallback').style.display='flex';">
    </div>`).join('');

  return `
    <div class="carousel compact-carousel" id="${id}">
      <div class="carousel-track">${slides}</div>
      <button class="carousel-nav prev">&#10094;</button>
      <button class="carousel-nav next">&#10095;</button>
      <div class="carousel-indicators"></div>
    </div>`;
}

// Project data — add/edit entries here
const projects = [
  {
    id: 'Personal Project',
    label: 'Personal Project (2026)',
    githubLink: { href: 'https://github.com/shashankjanya/solocopter', label: 'solocopter' },
    title: 'Solocopter',
    desc: 'This project is a non linear dynamics model and simulation for a single propeller tail sitter UAV built in MATLAB and Simulink. Flight control is achieved by thrust vectoring through aerodynamic flaps placed directly in the propeller slip stream. It features a fundamental cascaded PID control architecture designed specifically for deployment on the PX4 flight stack.',
    tags: ['MATLAB', 'Simulink', 'Flight Dynamics Modelling', 'Flight Control'],
    video: 'sections/projects/pic/test.mp4'
  },
  {
    id: 'Personal Project2',
    label: 'Personal Project (2025)',
    githubLink: { href: 'https://github.com/shashankjanya/constraint-fly', label: 'constrsint-fly' },
    title: 'Constraint-fly',
    desc: 'This project is a conceptual sizing tool for fixed wing UAVs written in MATLAB. It is based on the concept of fixed electric propulsion system sizing driven by the constraint analysis of performance requirements. The repository contains dedicated modules for different aircraft disciplines including aerodynamics mass estimation and propulsion which are fundamentally based on semi empirical formulations.',
    tags: ['MATLAB', 'Python', 'UAV conceptual design'],
    // video: 'sections/projects/pic/test.mp4'
  },
  {
    id: 'proj-aerothon',
    label: 'UAV Design Competetion - SAEINDIA AeroTHON 2023',
    title: 'Rotary-Wing UAV for Manual and Autonomous Payload Delivery',
    tags: ['SolidWorks CAD', 'Avionics Integration', 'Ardupilot', 'PID Tuning', '3D Printing'],
    details: {
      intro: 'Collaborated within a team to develop a rotary-wing UAV prototype for autonomous and manual healthcare package delivery to remote locations, achieving the Best Manual Flight award in competition.',
      specs: [
        { label: 'MTOM', value: '1.9 kg' },
        { label: 'Payload', value: '0.2 kg' },
        { label: 'Wheelbase', value: '0.48 m' },
        { label: 'Flight Time', value: '8.5 min @ ISA' },
        { label: 'Mission Envelope', value: ' Cruise: 5 m/s @ 30 m, Climb and Descent: 2 m/s' }
      ],
      contributions: [
        { heading: 'Design & Sizing', text: 'Conducted configuration tradeoff studies and developed the complete CAD model in SolidWorks.' },
        { heading: 'Performance Analysis', text: 'Executed detailed mission analysis and modelled the propulsion system using experimental wind-tunnel data.' },
        { heading: 'Systems Integration', text: 'Directed the physical fabrication with carbon fiber and 3D printed components, performed   avionics hardware setup, and Ardupilot software configuration.' },
        { heading: 'Flight Testing', text: 'Served as Pilot and manually tuned PID controllers through rigorous flight testing and log analysis.' },
      ],
    },
    images: [
      { src: 'sections/projects/pic/aerothon_2_2.png', alt: 'AeroTHON CAD', label: 'Payload Mechanism CAD' },
      { src: 'sections/projects/pic/aerothon_2_3.png', alt: 'AeroTHON CAD', label: 'Payload Mechanism CAD' },
      { src: 'sections/projects/pic/aerothon_2_1.jpg', alt: 'AeroTHON CAD', label: 'Payload Mechanism CAD' },
    ],
  },
  {
    id: 'proj-sae-aero-2023',
    label: 'UAV Design Competetion - SAE Aero Design West 2023',
    title: 'Tandem-Wing STOL UAV for Large-Volume Payloads',
    tags: ['UAV Conceptual Design', 'STOL', 'Stability Analysis', 'Composite Fabrication'],
    details: {
      intro: 'Collaborated within a team to develop a highly constrained fixed-wing UAV for competition, uniquely configured to maintain stability while maximizing lifting surface area for low-velocity operations.',
      specs: [
        { label: 'MTOM', value: '3.7 kg' },
        { label: 'Payload', value: '1.6 kg' },
        { label: 'Wingspan', value: '0.93 m' },
        { label: 'Flight Time', value: '3 min @ ISA' },
        { label: 'Mission Envelope', value: ' Cruise: 14 m/s @ 50 m, Takeoff Roll: ~ 3 m' }
      ],
      contributions: [
        { heading: 'Conceptual Design', text: 'Executed configuration tradeoff studies to maximize lifting surface area within a wingspan constraint < 1m.' },
        { heading: 'Stability Analysis', text: 'Analyzed stability and control characteristics to determine the incidence angles of the front and aft wings.' },
        { heading: 'Fabrication', text: 'Executed the physical fabrication process, involving composite layup techniques and conventional RC materials.' },
        { heading: 'Flight Testing', text: 'Served as Pilot, executing test flights to validate the ultra-short takeoff performance constraints.' },
      ],
    },
    images: [
      { src: 'sections/projects/pic/adcw_2.png', alt: 'STOL UAV Flight', label: 'Flight Testing' },
      { src: 'sections/projects/pic/adcw_3.png', alt: 'STOL UAV Flight', label: 'Flight Testing' },
      { src: 'sections/projects/pic/adcw_1.jpg', alt: 'STOL UAV CAD', label: 'UAV CAD Model' }
    ]
  },
  {
    id: 'proj-saeiss-aero-2022',
    label: 'UAV Design Competetion - SAINDIA Aero Design Challenge 2022',
    title: 'Fixed-Wing UAV for High Stability and Payload Fraction',
    tags: ['UAV Conceptual Design', 'Stability Analysis', 'Empennage Sizing'],
    details: {
      intro: 'Engineered a fixed-wing UAV specifically designed for beginner pilots, featuring enhanced static margins to guarantee highly stable and forgiving flight dynamics.',
      specs: [
        { label: 'MTOM', value: '1.9 kg' },
        { label: 'Payload', value: '1.0 kg' },
        { label: 'Wingspan', value: '1.26 m' },
        { label: 'Flight Time', value: '4 min @ ISA' },
        { label: 'Mission Envelope', value: 'Cruise: 11 m/s @ 50 m, Hand Launched' },
      ],
      contributions: [
        { heading: 'Conceptual Design', text: 'Executed overall aircraft sizing and detailed empennage design for high static margins and beginner-friendly stability.' },
        { heading: 'Fabrication', text: 'Executed the physical fabrication and assembly process utilizing conventional RC-grade materials.' },
        { heading: 'Flight Testing', text: 'Served as Pilot, executing test flights to validate the targeted stability and control characteristics.' },
      ],
    },
    images: [
      { src: 'sections/projects/pic/adc_2.png', alt: 'SAEISS UAV Flight', label: 'Flight Testing' },
      { src: 'sections/projects/pic/adc_3.png', alt: 'SAEISS UAV Flight', label: 'Flight Testing' },
      { src: 'sections/projects/pic/adc_1.png', alt: 'SAEISS UAV CAD', label: 'UAV CAD Model' },
    ]
  }
];

export default {
  id: 'projects',
  title: 'Selected Projects',

  render(container) {
    const VISIBLE_COUNT = 3;
    const visibleProjects = projects.slice(0, VISIBLE_COUNT);
    const hiddenProjects = projects.slice(VISIBLE_COUNT);

    function projectCard(p, isLast) {
      return `
        <div class="thesis-entry project-entry">

          <!-- Left: text write-up -->
          <div class="thesis-entry-text">
            <span class="thesis-label">${p.label}</span>
            <h3 class="thesis-entry-title">
              ${p.title}
              ${p.githubLink ? `
              <a href="${p.githubLink.href}" target="_blank" rel="noopener noreferrer" class="project-github-link">
                <svg class="project-github-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                ${p.githubLink.label}
              </a>` : ''}
            </h3>
            ${p.details ? `
              <p class="thesis-entry-writeup">${p.details.intro}</p>
              <div class="proj-specs-grid">
                ${p.details.specs.map(s => `
                  <div class="proj-spec-item">
                    <span class="proj-spec-label">${s.label}</span>
                    <span class="proj-spec-value">${s.value}</span>
                  </div>`).join('')}
              </div>
              <ul class="proj-contributions">
                ${p.details.contributions.map(c => `
                  <li><strong>${c.heading}:</strong> ${c.text}</li>`).join('')}
              </ul>` : `<p class="thesis-entry-writeup">${p.desc}</p>`}
            <ul class="project-tech-list">
              ${p.tags.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <!-- Right: video or image slideshow -->
          ${(p.video || (p.images && p.images.length)) ? `
          <div class="thesis-entry-visual">
            ${p.video
              ? buildVideoPlayer(p.id, p.video)
              : buildCarousel(p.id, p.images)
            }
          </div>` : ''}

        </div>
        ${!isLast ? '<hr class="thesis-divider">' : ''}`;
    }

    const visibleHTML = visibleProjects.map((p, i) =>
      projectCard(p, i === visibleProjects.length - 1 && hiddenProjects.length === 0)
    ).join('');

    const hiddenHTML = hiddenProjects.length ? `
      <hr class="thesis-divider thesis-divider-hidden" id="proj-hidden-divider">
      <div class="thesis-hidden-section" id="proj-hidden-section">
        ${hiddenProjects.map((p, i) =>
      projectCard(p, i === hiddenProjects.length - 1)
    ).join('')}
      </div>
      <div class="thesis-see-more-wrap">
        <button class="thesis-see-more-btn" id="proj-see-more-btn">
          <span class="see-more-label">See more</span>
          <span class="see-more-arrow">&#9660;</span>
        </button>
      </div>` : '';

    container.innerHTML = visibleHTML + hiddenHTML;
  },

  init() {
    // Wire up click-to-play for any project video panels
    projects.forEach(p => {
      if (!p.video) return;
      const overlay = document.getElementById(`${p.id}-overlay`);
      const video = document.getElementById(`${p.id}-video`);
      if (!overlay || !video) return;
      overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        video.controls = true;
        video.play();
      });
      // If user pauses, bring the overlay back
      video.addEventListener('pause', () => {
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = '';
        video.controls = false;
      });
    });

    // Wire up "See more" toggle for hidden projects
    const seeMoreBtn = document.getElementById('proj-see-more-btn');
    const hiddenSection = document.getElementById('proj-hidden-section');
    const hiddenDivider = document.getElementById('proj-hidden-divider');
    if (seeMoreBtn && hiddenSection) {
      seeMoreBtn.addEventListener('click', () => {
        const isOpen = hiddenSection.classList.toggle('open');
        const arrow = seeMoreBtn.querySelector('.see-more-arrow');
        const label = seeMoreBtn.querySelector('.see-more-label');
        arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        label.textContent = isOpen ? 'See less' : 'See more';
        if (hiddenDivider) hiddenDivider.style.display = isOpen ? '' : 'none';
      });
      // Start with divider hidden
      if (hiddenDivider) hiddenDivider.style.display = 'none';
    }
  },
};
