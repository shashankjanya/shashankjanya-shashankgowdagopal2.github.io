export default {
  id: 'publications',
  title: 'Publications',

  render(container) {
    const publications = [
      {
        num: 1,
        label: 'Conference Paper',
        title: 'High Payload Fraction UAV Design and Performance Evaluation',
        doi: 'https://doi.org/10.4271/2024-26-0442',
        doiDisplay: '10.4271/2024-26-0442',
        keywords: ['UAV Conceptual Design', 'Structural Sizing', 'Vortex-Particle Wake Method'],
        abstract:
          'Unmanned Aerial Vehicles (UAVs), or drones, are aerial platforms with diverse applications. Their design is shaped by specific constraints, driving a multidisciplinary, iterative process encompassing aerodynamics, structures, flight mechanics and other domains. This paper describes the design of a fixed-wing UAV tailored to competition requirements. The requirements included maintaining a thrust-to-empty weight ratio of less than 1 and achieving a high payload fraction, calculated as the ratio of payload weight to total UAV weight. A modified sizing approach was introduced, altering the conventional UAV sizing process to enhance the payload fraction. This was achieved by adjusting the design points within the solution space derived from constraint analysis. Furthermore, a novel structural optimization method was applied, utilizing critical points from the V-n diagram as design points, where the primary emphasis was on reducing the airframe weight while ensuring an acceptable level of safety. Additionally, a novel method for the endurance performance estimation of the UAV was developed, integrating the concept of weighted fraction. The design of each component was done through a general iterative process, with the constraints being the requirements and the assumptions made in the sizing process. Aerodynamic coefficients were determined via the vortex particle wake method using flow5 software. A mathematical model, employing state space representation, assessed dynamic characteristics at the trim position. Stability analysis confirmed UAV stability in both static and dynamic conditions. The flight test of the prototype validated the design, demonstrating the UAV’s ability to achieve the intended payload fraction with good controllability and stability.',
      },
      {
        num: 2,
        label: 'Journal Article',
        title: 'Design of a Tandem-Wing UAV for Civilian Applications',
        doi: 'https://openurl.ebsco.com/EPDB%3Agcd%3A1%3A5557873/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A191002284&crl=c&link_origin=scholar.google.com',
        doiDisplay: '10.4273/ijvss.17.6.17',
        keywords: ['UAV Concepetual Design', 'Stability Analysis', 'Structural Sizing', 'Vortex-Particle Wake Method'],
        abstract:
          "This paper presents the design of a tandem-wing UAV, emphasizing aerodynamics, propulsion, stability, structures and performance evaluation. It introduces a methodology for estimating UAVs' endurance, including weighted fractions.The aerodynamic coefficients and stability derivatives for the complete UAV were determined using the vortex particle wake(VPW) method in the Flow5 software.A mathematical model was constructed using state- space representation and the dynamic properties of the aircraft were assessed at its equilibrium position.A comprehensive stability analysis confirmed the UAV's stability in both static and dynamic scenarios. Structural analysis was performed on the airframe components by applying the discretized lift and drag forces. The design points utilized for the structural analysis were derived from the V-n diagram representing the flight envelope. Since the UAV does not have landing gear, a hand launch analysis was performed using MATLAB. The analysis determines if the UAV can take off safely with the desired payload under given conditions of launch height and initially imparted force. A prototype was built and successfully flight-tested, providing reassurance about the practicality of the design. The results shows that the designed UAV has a significant advantage over conventional UAVs in terms of low stall velocity and high payload fraction, demonstrating its superiority.",
      },
    ];

    // Build card row
    const cardsHTML = publications.map(p => `
      <div class="pub-card" id="pub-card-${p.num}" role="button" tabindex="0" aria-expanded="false">
        <span class="thesis-label">${p.label}</span>
        <h3 class="pub-card-title">${p.title}</h3>

        <a class="pub-doi-link"
           href="${p.doi}"
           target="_blank"
           rel="noopener noreferrer"
           id="pub-doi-${p.num}"
           onclick="event.stopPropagation()">
          <svg class="pub-doi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          ${p.doiDisplay}
        </a>

        <ul class="project-tech-list pub-card-keywords">
          ${p.keywords.map(kw => `<li>${kw}</li>`).join('')}
        </ul>

        <span class="pub-card-readmore">
          Read Abstract <span class="pub-card-arrow">▾</span>
        </span>
      </div>`).join('');

    // Build expand panels
    const panelsHTML = publications.map(p => `
      <div class="pub-abstract-panel" id="pub-panel-${p.num}">
        <div class="thesis-abstract-inner">
          <p>${p.abstract}</p>
        </div>
      </div>`).join('');

    container.innerHTML = `
      <div class="thesis-cards-row pub-cards-row">${cardsHTML}</div>
      ${panelsHTML}
    `;
  },

  init() {
    let openNum = null;
    const count = 2; // update if you add more publications

    function closePanel(num) {
      const card = document.getElementById(`pub-card-${num}`);
      const panel = document.getElementById(`pub-panel-${num}`);
      if (!card || !panel) return;
      panel.style.maxHeight = '0';
      panel.classList.remove('open');
      card.classList.remove('active');
      card.setAttribute('aria-expanded', 'false');
      const arrow = card.querySelector('.pub-card-arrow');
      if (arrow) arrow.style.transform = 'rotate(0deg)';
    }

    function openPanel(num) {
      const card = document.getElementById(`pub-card-${num}`);
      const panel = document.getElementById(`pub-panel-${num}`);
      if (!card || !panel) return;
      panel.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      card.classList.add('active');
      card.setAttribute('aria-expanded', 'true');
      const arrow = card.querySelector('.pub-card-arrow');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }

    Array.from({ length: count }, (_, i) => i + 1).forEach(num => {
      const card = document.getElementById(`pub-card-${num}`);
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
