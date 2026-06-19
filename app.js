import about from './sections/about/about.js';
import thesis from './sections/thesis/thesis.js';
// import publications from './sections/publications/publications.js';
import projects from './sections/projects/projects.js';
import interests from './sections/interests/interests.js';
import contact from './sections/contact/contact.js';



// Carousel Class Implementation
class Carousel {
    constructor(element) {
        this.element = element;
        this.track = element.querySelector('.carousel-track');
        this.slides = Array.from(this.track.children);
        this.nextButton = element.querySelector('.next');
        this.prevButton = element.querySelector('.prev');
        this.dotsContainer = element.querySelector('.carousel-indicators');

        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000 + Math.random() * 2000; // fixed per instance
        this.resumeTimer = null;
        this.hovered = false;

        if (this.slideCount <= 1) {
            if (this.nextButton) this.nextButton.style.display = 'none';
            if (this.prevButton) this.prevButton.style.display = 'none';
            return;
        }

        this.initIndicators();
        this.addEventListeners();
        this.startAutoPlay();
    }

    initIndicators() {
        if (!this.dotsContainer) return;
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-indicator');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.scheduleResume(); // resume after a pause, like button clicks
            });
            this.dotsContainer.appendChild(dot);
        });
        this.dots = Array.from(this.dotsContainer.children);
    }

    updateIndicators() {
        if (!this.dots) return;
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    goToSlide(index) {
        if (index < 0) index = this.slideCount - 1;
        if (index >= this.slideCount) index = 0;

        this.currentIndex = index;
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateIndicators();
    }

    nextSlide() {
        this.goToSlide(this.currentIndex + 1);
    }

    prevSlide() {
        this.goToSlide(this.currentIndex - 1);
    }

    startAutoPlay() {
        if (this.autoPlayInterval) return; // already running
        this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    // After a manual nav action, wait 2 s then resume (unless still hovered)
    scheduleResume() {
        this.stopAutoPlay();
        if (this.resumeTimer) clearTimeout(this.resumeTimer);
        this.resumeTimer = setTimeout(() => {
            if (!this.hovered) this.startAutoPlay();
        }, 2000);
    }

    addEventListeners() {
        if (this.nextButton) {
            this.nextButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextSlide();
                this.scheduleResume();
            });
        }

        if (this.prevButton) {
            this.prevButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.prevSlide();
                this.scheduleResume();
            });
        }

        this.element.addEventListener('mouseenter', () => {
            this.hovered = true;
            this.stopAutoPlay();
        });
        this.element.addEventListener('mouseleave', () => {
            this.hovered = false;
            this.startAutoPlay();
        });

        // Open Lightbox on image clicks
        this.slides.forEach(slide => {
            const img = slide.querySelector('.carousel-img');
            if (img) {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', () => {
                    openLightbox(img.src, img.alt);
                });
            }
        });
    }
}

// Lightbox variables & controls
let lightbox, lightboxImg;
function setupLightbox() {
    lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <img src="" alt="" class="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}

function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Orchestrator initialization
function initializePortfolio() {
    // 1. Render Section Modules
    const sections = [about, thesis, projects, /* publications, */ interests, contact];
    sections.forEach(sec => {
        const container = document.getElementById(sec.id);
        if (container) {
            container.innerHTML = `
                <h2 class="section-title">${sec.title}</h2>
                <div class="section-body"></div>
            `;
            const body = container.querySelector('.section-body');
            sec.render(body);
            if (sec.init) sec.init();
        }
    });

    // 2. Instantiate Lightbox
    setupLightbox();

    // 3. Instantiate Carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
        new Carousel(carousel);
    });

    // 4. Register Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 5. Navbar shadow / shrinking scroll handler
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.15)';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.25rem 0';
        }
    });

    // 6. Active nav link highlighting
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn)');
    const sectionIds = ['about', 'thesis', 'projects', /* 'publications', */ 'interests', 'contact'];

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
    });

    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) navObserver.observe(el);
    });
}

// Bulletproof document load check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}
