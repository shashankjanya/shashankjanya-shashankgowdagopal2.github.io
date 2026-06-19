export default {
  id: 'thesis',
  title: 'Thesis Work',

  render(container) {
    const theses = [
      {
        num: 1,
        label: "Master's Thesis",
        title: 'Implementation and Validation of a Detailed Tail Sizing Method and Application on Future Aircraft',
        teaser: 'Implemented a high-fidelity stability & control driven empennage sizing methodology in Python within the Bauhaus Luftfahrt Aircraft Design Environment (BLADE), then applied it to novel LH₂ aircraft configurations.',
        abstract: "Aircraft conceptual design studies often restricts tail sizing to rapid estimation methods. However, these methods are restricted to conventional configurations with strong correlations to historical datasets. For future concepts utilizing liquid hydrogen (LH₂) as energy carrier, drastic shifts in geometric parameters and mass distributions make these rapid sizing methods inadequate. In light of this, my Master's thesis focused on developing and implementing a high-fidelity, stability and control (S&C) driven empennage sizing methodology into the Bauhaus Luftfahrt Aircraft Design Environment (BLADE). <br><br> The core engineering tasks involved modeling the critical S&C constraints for both the horizontal and the vertical tailplanes, integrating semi-empirical aerodynamic prediction models based on DATCOM formulations, and writing comprehensive test functions to verify the Python module. The framework was successfully validated against publicly available aircraft data before being applied to novel LH₂ configurations. Subsequent analytical studies focused on quantifying aircraft-level performance benefits compared to empirically sized baselines, and conducting sensitivity analyses to evaluate the robustness of the implemented sizing methodology.",
        tags: ['Aircraft Stability & Control', 'Empennage Sizing', 'LH₂ Aircraft', 'DATCOM', 'Python', 'GitLab'],
      },
      {
        num: 2,
        label: 'Semester Thesis',
        title: 'In-Flight System Identification and Parameter Estimation',
        teaser: 'Developed a MATLAB/Simulink framework for sequential in-flight system identification, designing multistep inputs adaptively during flight to characterize short-period and Dutch-roll dynamics.',
        abstract: 'Flight testing for system identification is often costly, primarily because of the time required to obtain parameter estimates of sufficient quality. In light of this, a framework for in-flight system identification and parameter estimation was developed in MATLAB/Simulink in this work. The fundamental principle was to sequentially apply standard multistep inputs (such as doublets, 2-1-1, and 3-2-1-1) with increasing complexity, designing in-flight based on previously estimated parameters, to assess the short-period and Dutch-roll characteristics, including the actuator dynamics parameters. <br><br>The implemented framework was tested on a non-linear simulation of a GTM-T2 sub-scale demonstrator aircraft, with case studies to evaluate the effect of modifying the fundamental base time-step used to design multistep signals on actuators with different bandwidths.',
        tags: ['MATLAB', 'Simulink', 'System Identification', 'Flight Dynamics'],
      },
      {
        num: 3,
        label: "Bachelor's Thesis",
        title: 'Design Analysis and Fabrication of a Tandem-Wing UAV',
        teaser: 'Conceptualized, fabricated, and flight-tested a tandem-wing UAV, covering conceptual sizing, aerodynamic analysis, flight dynamics modelling, autopilot design, and end-to-end physical prototyping.',
        abstract: 'Civilian surveillance applications demand unmanned aerial vehicles capable of sustaining low operating velocities while accommodating large payload volumes and extended endurance. To successfully satisfy these stringent operational constraints, our team conceptualized, prototyped, and flight tested a tandem wing configuration. <br><br>My core technical contributions spanned the entire aircraft development lifecycle. I executed the initial conceptual sizing alongside aerodynamic coefficient calculations. Utilizing these parameters, I developed the flight dynamics models required to design and implement a fundamental pitch attitude hold autopilot. Furthermore, I planned and directed the physical fabrication and prototyping process from end to end.',
        tags: ['UAV Sizing', 'Flight Dynamics Modelling', 'Autopilot Design', 'MATLAB', 'Simulink'],
      },
    ];

    // Build card row + one shared expand panel
    const cardsHTML = theses.map(t => `
      <div class="thesis-card" id="thesis-card-${t.num}" role="button" tabindex="0" aria-expanded="false">
        <span class="thesis-label">${t.label}</span>
        <h3 class="thesis-card-title">${t.title}</h3>
        <ul class="project-tech-list thesis-card-tags">
          ${t.tags.map(tag => `<li>${tag}</li>`).join('')}
        </ul>
        <span class="thesis-card-readmore">
          Read more <span class="thesis-card-arrow">▾</span>
        </span>
      </div>`).join('');

    const panelsHTML = theses.map(t => `
      <div class="thesis-abstract-panel" id="thesis-panel-${t.num}">
        <div class="thesis-abstract-inner">
          <p>${t.abstract}</p>
        </div>
      </div>`).join('');

    container.innerHTML = `
      <div class="thesis-cards-row">${cardsHTML}</div>
      ${panelsHTML}
    `;
  },

  init() {
    let openNum = null;

    function closePanel(num) {
      const card = document.getElementById(`thesis-card-${num}`);
      const panel = document.getElementById(`thesis-panel-${num}`);
      if (!card || !panel) return;
      panel.style.maxHeight = '0';
      panel.classList.remove('open');
      card.classList.remove('active');
      card.setAttribute('aria-expanded', 'false');
      const arrow = card.querySelector('.thesis-card-arrow');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }

    function openPanel(num) {
      const card = document.getElementById(`thesis-card-${num}`);
      const panel = document.getElementById(`thesis-panel-${num}`);
      if (!card || !panel) return;
      panel.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      card.classList.add('active');
      card.setAttribute('aria-expanded', 'true');
      const arrow = card.querySelector('.thesis-card-arrow');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }

    [1, 2, 3].forEach(num => {
      const card = document.getElementById(`thesis-card-${num}`);
      if (!card) return;

      const toggle = () => {
        if (openNum === num) {
          closePanel(num);
          openNum = null;
        } else {
          if (openNum !== null) closePanel(openNum);
          openNum = num;
          openPanel(num);
        }
      };

      card.addEventListener('click', toggle);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  },
};
