// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            // Una vez animado, dejar de observar
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Función para inicializar animaciones
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
}

// Animación de partículas flotantes
function createParticles() {
    const background = document.querySelector('.animated-background');
    if (!background) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Animación personalizada
        particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
        
        background.appendChild(particle);
    }
}

// Keyframes dinámicos para partículas
function addParticleKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-100px) translateX(${Math.random() * 50 - 25}px);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll para links de navegación
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navigation').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

// Efecto parallax sutil en scroll
function initParallax() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                // Mover orbes de fondo
                const orbs = document.querySelectorAll('.gradient-orb');
                orbs.forEach((orb, index) => {
                    const speed = 0.1 + (index * 0.05);
                    orb.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                // Efecto parallax en hero image
                const heroPhoto = document.querySelector('.hero-photo');
                if (heroPhoto && scrolled < window.innerHeight) {
                    heroPhoto.style.transform = `translateY(${scrolled * 0.3}px) rotate(${3 - scrolled * 0.01}deg)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Highlight activo en navegación según scroll
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
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

// Contador animado para stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Efecto de typing para el título (opcional)
function typingEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animación de fade-in escalonado para elementos
function staggeredFadeIn(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, index * delay);
    });
}

// Inicializar todas las animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Agregar keyframes para partículas
    addParticleKeyframes();
    
    // Crear partículas
    createParticles();
    
    // Inicializar animaciones de scroll
    initScrollAnimations();
    
    // Smooth scroll
    initSmoothScroll();
    
    // Parallax effect
    initParallax();
    
    // Navigation highlight
    initNavHighlight();
    
    // Animate counters
    animateCounters();
    
    // Agregar clase animate-on-scroll a elementos que deben animarse
    const animatableSelectors = [
        '.skill-category',
        '.cert-card',
        '.project-card',
        '.contact-card',
        '.learning-grid > div'
    ];
    
    animatableSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('animate-on-scroll');
        });
    });
    
    // Re-inicializar el observer después de agregar las clases
    initScrollAnimations();
});

// Exportar funciones para uso global
window.portfolioAnimations = {
    initScrollAnimations,
    createParticles,
    initSmoothScroll,
    initParallax,
    initNavHighlight,
    animateCounters,
    typingEffect,
    staggeredFadeIn
};
