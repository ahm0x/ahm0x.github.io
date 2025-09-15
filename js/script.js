// Translation system
const translations = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia', 
    'nav.contact': 'Contacto',
    'hero.status': 'Disponible para oportunidades',
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador',
    'hero.description': 'Me especializo en construir productos elegantes, accesibles y rápidos. Tengo experiencia en JavaScript/TypeScript, Python, C, C++ y Pentesting. Aquí tienes una muestra de lo que hago.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.resume': 'Descargar CV',
    'hero.project.title': 'Último proyecto destacado',
    'hero.project.description': 'Simulador de RayTracing con C y SDL2',
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Algunos trabajos que muestran mi experiencia y habilidades',
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria en el desarrollo de software',
    'contact.title': '¿Hablamos?',
    'contact.subtitle': 'Estoy disponible para nuevos proyectos y oportunidades',
    'contact.name': 'Nombre completo',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.direct.title': 'Contacto directo',
    'contact.direct.subtitle': '¿Prefieres escribir directamente?',
    'footer.made': 'Desarrollado con ❤️',
    'lang.title': 'Elige tu idioma',
    'lang.subtitle': 'Selecciona tu idioma preferido para continuar',
    'lang.continue': 'Continuar'
  },
  en: {
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.status': 'Available for opportunities',
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Developer',
    'hero.description': 'I specialize in building elegant, accessible, and fast products. I have experience in JavaScript/TypeScript, Python, C, C++, and Pentesting. Here\'s a sample of what I do.',
    'hero.cta.projects': 'View projects',
    'hero.cta.resume': 'Download CV',
    'hero.project.title': 'Latest featured project',
    'hero.project.description': 'RayTracing Simulator with C and SDL2',
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some work that showcases my experience and skills',
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My journey in software development',
    'contact.title': 'Let\'s Talk?',
    'contact.subtitle': 'I\'m available for new projects and opportunities',
    'contact.name': 'Full name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.direct.title': 'Direct contact',
    'contact.direct.subtitle': 'Prefer to write directly?',
    'footer.made': 'Made with ❤️',
    'lang.title': 'Choose your language',
    'lang.subtitle': 'Select your preferred language to continue',
    'lang.continue': 'Continue'
  },
  fr: {
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'hero.status': 'Disponible pour des opportunités',
    'hero.greeting': 'Salut, je suis',
    'hero.role': 'Développeur',
    'hero.description': 'Je me spécialise dans la création de produits élégants, accessibles et rapides. J\'ai de l\'expérience en JavaScript/TypeScript, Python, C, C++ et Pentesting. Voici un échantillon de ce que je fais.',
    'hero.cta.projects': 'Voir les projets',
    'hero.cta.resume': 'Télécharger CV',
    'hero.project.title': 'Dernier projet en vedette',
    'hero.project.description': 'Simulateur de RayTracing avec C et SDL2',
    'projects.title': 'Projets en Vedette',
    'projects.subtitle': 'Quelques travaux qui montrent mon expérience et mes compétences',
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Mon parcours dans le développement de logiciels',
    'contact.title': 'Parlons?',
    'contact.subtitle': 'Je suis disponible pour de nouveaux projets et opportunités',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.direct.title': 'Contact direct',
    'contact.direct.subtitle': 'Préférez-vous écrire directement?',
    'footer.made': 'Fait avec ❤️',
    'lang.title': 'Choisissez votre langue',
    'lang.subtitle': 'Sélectionnez votre langue préférée pour continuer',
    'lang.continue': 'Continuer'
  },
  de: {
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.contact': 'Kontakt',
    'hero.status': 'Verfügbar für Möglichkeiten',
    'hero.greeting': 'Hallo, ich bin',
    'hero.role': 'Entwickler',
    'hero.description': 'Ich spezialisiere mich auf den Aufbau eleganter, zugänglicher und schneller Produkte. Ich habe Erfahrung in JavaScript/TypeScript, Python, C, C++ und Pentesting. Hier ist eine Probe dessen, was ich tue.',
    'hero.cta.projects': 'Projekte ansehen',
    'hero.cta.resume': 'Lebenslauf herunterladen',
    'hero.project.title': 'Neuestes vorgestelltes Projekt',
    'hero.project.description': 'RayTracing-Simulator mit C und SDL2',
    'projects.title': 'Ausgewählte Projekte',
    'projects.subtitle': 'Einige Arbeiten, die meine Erfahrung und Fähigkeiten zeigen',
    'experience.title': 'Berufserfahrung',
    'experience.subtitle': 'Meine Reise in der Softwareentwicklung',
    'contact.title': 'Lass uns reden?',
    'contact.subtitle': 'Ich bin verfügbar für neue Projekte und Möglichkeiten',
    'contact.name': 'Vollständiger Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.direct.title': 'Direkter Kontakt',
    'contact.direct.subtitle': 'Ziehen Sie es vor, direkt zu schreiben?',
    'footer.made': 'Gemacht mit ❤️',
    'lang.title': 'Wählen Sie Ihre Sprache',
    'lang.subtitle': 'Wählen Sie Ihre bevorzugte Sprache, um fortzufahren',
    'lang.continue': 'Weiter'
  }
};

// Language flags and codes
const languageData = {
  es: { flag: '🇪🇸', code: 'ES', name: 'Español' },
  en: { flag: '🇺🇸', code: 'EN', name: 'English' },
  fr: { flag: '🇫🇷', code: 'FR', name: 'Français' },
  de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' }
};

// Main application class
class ModernPortfolio {
  constructor() {
    this.currentLanguage = 'es';
    this.selectedLanguage = null;
    this.loadingComplete = false;
    this.init();
  }

  init() {
    this.setupLoadingScreen();
    this.setupLanguageSelector();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupCustomCursor();
    this.setupThemeToggle();
    this.setupMobileMenu();
    this.setupParticles();
    this.setupTiltEffect();
    this.updateYear();
    this.setupScrollIndicator();
    this.setupNavigation();
  }

  setupLoadingScreen() {
    // Simulate loading
    setTimeout(() => {
      this.loadingComplete = true;
      const loadingScreen = document.getElementById('loadingScreen');
      loadingScreen.classList.add('fade-out');
      
      setTimeout(() => {
        this.showLanguageSelector();
      }, 800);
    }, 2500);
  }

  showLanguageSelector() {
    // Check if user already selected a language
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && translations[savedLanguage]) {
      this.currentLanguage = savedLanguage;
      this.updateLanguageDisplay();
      this.showMainContent();
      return;
    }

    const languageSelector = document.getElementById('languageSelector');
    languageSelector.classList.add('active');
  }

  setupLanguageSelector() {
    const languageOptions = document.querySelectorAll('.language-option');
    const continueButton = document.getElementById('languageContinue');
    const languageToggle = document.getElementById('languageToggle');
    
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        languageOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        this.selectedLanguage = option.dataset.lang;
        continueButton.disabled = false;
      });
    });

    continueButton.addEventListener('click', () => {
      if (this.selectedLanguage) {
        this.currentLanguage = this.selectedLanguage;
        localStorage.setItem('portfolio-language', this.currentLanguage);
        this.updateLanguageDisplay();
        
        const languageSelector = document.getElementById('languageSelector');
        languageSelector.classList.remove('active');
        
        setTimeout(() => {
          this.showMainContent();
        }, 500);
      }
    });

    // Language toggle in header
    languageToggle.addEventListener('click', () => {
      const languageSelector = document.getElementById('languageSelector');
      languageSelector.classList.add('active');
    });
  }

  updateLanguageDisplay() {
    const langData = languageData[this.currentLanguage];
    document.getElementById('currentLangFlag').textContent = langData.flag;
    document.getElementById('currentLangCode').textContent = langData.code;

    // Update all translatable elements
    document.querySelectorAll('[data-text]').forEach(element => {
      const key = element.dataset.text;
      if (translations[this.currentLanguage] && translations[this.currentLanguage][key]) {
        element.textContent = translations[this.currentLanguage][key];
      }
    });

    // Update language selector texts
    const langTitle = document.getElementById('langTitle');
    const langSubtitle = document.getElementById('langSubtitle');
    const continueText = document.getElementById('continueText');
    
    if (langTitle) langTitle.textContent = translations[this.currentLanguage]['lang.title'];
    if (langSubtitle) langSubtitle.textContent = translations[this.currentLanguage]['lang.subtitle'];
    if (continueText) continueText.textContent = translations[this.currentLanguage]['lang.continue'];
  }

  showMainContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '1';
    mainContent.style.transition = 'opacity 1s ease-in-out';
    
    // Trigger reveal animations
    setTimeout(() => {
      this.triggerRevealAnimations();
    }, 200);
  }

  setupEventListeners() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', this.handleSmoothScroll.bind(this));
    });

    // Window events
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.handleResize.bind(this));
    
    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe reveal elements after content is shown
    setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        this.observer.observe(el);
      });
    }, 1000);
  }

  triggerRevealAnimations() {
    document.querySelectorAll('[data-reveal]').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('revealed');
      }, index * 100);
    });
  }

  setupCustomCursor() {
    if (window.innerWidth <= 768) return;

    const cursor = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (!cursor || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.1;
      outlineY += (mouseY - outlineY) * 0.1;
      
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      
      requestAnimationFrame(animateOutline);
    };
    
    animateOutline();

    // Cursor interactions
    document.querySelectorAll('a, button, [data-tilt]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      });

      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  setupThemeToggle() {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    
    if (!themeToggle) return;

    // Check for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
    
    this.setTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  setupMobileMenu() {
    const mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    
    if (!mobileToggle || !mobileNav) return;

    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('active');
      
      if (isOpen) {
        this.closeMobileMenu();
      } else {
        this.openMobileMenu();
      }
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileNav.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu() {
    const mobileNav = document.querySelector('[data-mobile-nav]');
    const mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
    
    mobileNav.classList.add('active');
    mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileMenu() {
    const mobileNav = document.querySelector('[data-mobile-nav]');
    const mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
    
    mobileNav.classList.remove('active');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  setupParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 10 + 's';
      
      particlesContainer.appendChild(particle);
    }
  }

  setupTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });

      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  setupScrollIndicator() {
    // Auto-hide scroll indicators
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const indicators = document.querySelectorAll('.scroll-indicator');
      indicators.forEach(indicator => {
        const opacity = Math.max(0, 1 - scrolled / 300);
        indicator.style.opacity = opacity;
      });
    });
  }

  setupNavigation() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    
    window.addEventListener('scroll', () => {
      const sections = ['home', 'proyectos', 'experiencia', 'contacto'];
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  handleSmoothScroll(e) {
    const target = e.target.closest('a');
    const href = target.getAttribute('href');
    
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.closeMobileMenu();
    }
  }

  handleScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      header.style.backdropFilter = 'saturate(1.8) blur(20px)';
    } else {
      header.style.boxShadow = '';
      header.style.backdropFilter = 'saturate(1.1) blur(20px)';
    }
  }

  handleResize() {
    if (window.innerWidth > 768) {
      this.closeMobileMenu();
    }
  }

  updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ModernPortfolio();
  });
} else {
  new ModernPortfolio();

}
