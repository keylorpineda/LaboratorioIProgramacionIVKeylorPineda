
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('🔍 Menu Debug:', { 
        menuToggle: !!menuToggle, 
        navMenu: !!navMenu, 
        navLinksCount: navLinks.length 
    });
    
    if (menuToggle && navMenu) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isActive = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            
            console.log('📱 Menu toggled:', isActive ? 'OPEN' : 'CLOSED');
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('🔗 Link clicked, closing menu');
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    console.log('🔲 Clicked outside, closing menu');
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    } else {
        console.error('❌ Menu elements not found!', { menuToggle, navMenu });
    }
    
    // Parallax Effect
    const parallaxElements = document.querySelectorAll('.glass-card, .hero-visual, .floating-element');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;
        
        parallaxElements.forEach((el, index) => {
            const depth = (index + 1) * 0.5;
            el.style.transform = `translate3d(${moveX * depth}px, ${moveY * depth}px, 0) rotateY(${moveX * 0.5}deg) rotateX(${-moveY * 0.5}deg)`;
        });
    });
    
    // 3D Glass Card Effect
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Gradient Cursor
    const gradientCursor = document.querySelector('.gradient-cursor');
    if (gradientCursor) {
        document.addEventListener('mousemove', (e) => {
            gradientCursor.style.left = e.clientX + 'px';
            gradientCursor.style.top = e.clientY + 'px';
        });
    }
    
    // Counter Animation
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.dataset.target);
                animateCounter(stat, target);
                statsObserver.unobserve(stat);
            }
        });
    });
    
    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        statsObserver.observe(el);
    });
    
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        
        document.querySelector('.particle-container')?.appendChild(particle);
        
        setTimeout(() => particle.remove(), 5000);
    };
    
    setInterval(createParticle, 300);
    
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.setProperty('--glow-intensity', '1');
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.setProperty('--glow-intensity', '0');
        });
    });
    
    console.log('🎨 Magazine Glassmorphism 3D Loaded!');
});
