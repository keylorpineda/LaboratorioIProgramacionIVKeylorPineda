function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

function renderCertifications() {
    const container = document.getElementById('certificates-list');
    if (!container) return;
    
    const getColorClasses = (color) => {
        const colors = {
            cyan: {
                bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                border: 'rgba(6, 182, 212, 0.3)',
                text: 'var(--color-cyan-400)',
                badge: 'background: rgba(6, 182, 212, 0.2); color: rgb(103, 232, 249)',
                shadow: 'rgba(6, 182, 212, 0.2)'
            },
            blue: {
                bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
                border: 'rgba(59, 130, 246, 0.3)',
                text: 'var(--color-blue-400)',
                badge: 'background: rgba(59, 130, 246, 0.2); color: rgb(96, 165, 250)',
                shadow: 'rgba(59, 130, 246, 0.2)'
            },
            purple: {
                bg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1))',
                border: 'rgba(168, 85, 247, 0.3)',
                text: 'var(--color-purple-400)',
                badge: 'background: rgba(168, 85, 247, 0.2); color: rgb(192, 132, 252)',
                shadow: 'rgba(168, 85, 247, 0.2)'
            },
            indigo: {
                bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                border: 'rgba(99, 102, 241, 0.3)',
                text: 'var(--color-indigo-400)',
                badge: 'background: rgba(99, 102, 241, 0.2); color: rgb(129, 140, 248)',
                shadow: 'rgba(99, 102, 241, 0.2)'
            },
            violet: {
                bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(244, 114, 182, 0.1))',
                border: 'rgba(139, 92, 246, 0.3)',
                text: 'var(--color-violet-400)',
                badge: 'background: rgba(139, 92, 246, 0.2); color: rgb(167, 139, 250)',
                shadow: 'rgba(139, 92, 246, 0.2)'
            }
        };
        return colors[color] || colors.cyan;
    };
    
    container.innerHTML = certifications.map(cert => {
        const colors = getColorClasses(cert.color);
        return `
            <article class="cert-card" style="background: ${colors.bg}; border-color: ${colors.border};">
                <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;">
                    <div style="width: 3.5rem; height: 3.5rem; background: white; border: 1px solid ${colors.border}; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; padding: 0.5rem;">
                        <img src="${cert.logo}" alt="${cert.issuer}" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    ${cert.verified ? `
                        <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.25rem 0.5rem; background: rgba(6, 182, 212, 0.2); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 9999px;">
                            <svg style="width: 0.75rem; height: 0.75rem; color: var(--color-cyan-400);" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-linecap="round"/>
                                <path d="M22 4L12 14.01l-3-3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span style="font-size: 0.75rem; font-weight: 600; color: var(--color-cyan-400);">Verificada</span>
                        </div>
                    ` : ''}
                </div>
                <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--color-white); margin-bottom: 0.5rem; transition: color 0.3s ease;">
                    ${cert.title}
                </h3>
                <p style="font-size: 0.875rem; font-weight: 600; color: ${colors.text}; margin-bottom: 1rem;">
                    ${cert.issuer}
                </p>
                <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    <span style="font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; ${colors.badge}; border-radius: 9999px;">
                        ${cert.level}
                    </span>
                    <span style="font-size: 0.75rem; color: var(--color-zinc-400); font-weight: 500;">
                        ${cert.date}
                    </span>
                </div>
            </article>
        `;
    }).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-list');
    if (!container) return;
    
    const getColorClasses = (color) => {
        const colors = {
            cyan: {
                bg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                border: 'rgba(6, 182, 212, 0.3)',
                text: 'var(--color-cyan-400)',
                gradient: 'linear-gradient(135deg, var(--color-cyan-500), var(--color-blue-500))',
                badge: 'background: rgba(6, 182, 212, 0.2); color: rgb(103, 232, 249); border: 1px solid rgba(6, 182, 212, 0.3)',
                shadow: 'rgba(6, 182, 212, 0.3)'
            },
            blue: {
                bg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
                border: 'rgba(59, 130, 246, 0.3)',
                text: 'var(--color-blue-400)',
                gradient: 'linear-gradient(135deg, var(--color-blue-500), var(--color-indigo-500))',
                badge: 'background: rgba(59, 130, 246, 0.2); color: rgb(96, 165, 250); border: 1px solid rgba(59, 130, 246, 0.3)',
                shadow: 'rgba(59, 130, 246, 0.3)'
            },
            purple: {
                bg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1))',
                border: 'rgba(168, 85, 247, 0.3)',
                text: 'var(--color-purple-400)',
                gradient: 'linear-gradient(135deg, var(--color-purple-500), var(--color-violet-500))',
                badge: 'background: rgba(168, 85, 247, 0.2); color: rgb(192, 132, 252); border: 1px solid rgba(168, 85, 247, 0.3)',
                shadow: 'rgba(168, 85, 247, 0.3)'
            },
            indigo: {
                bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                border: 'rgba(99, 102, 241, 0.3)',
                text: 'var(--color-indigo-400)',
                gradient: 'linear-gradient(135deg, var(--color-indigo-500), var(--color-purple-500))',
                badge: 'background: rgba(99, 102, 241, 0.2); color: rgb(129, 140, 248); border: 1px solid rgba(99, 102, 241, 0.3)',
                shadow: 'rgba(99, 102, 241, 0.3)'
            },
            violet: {
                bg: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(244, 114, 182, 0.1))',
                border: 'rgba(139, 92, 246, 0.3)',
                text: 'var(--color-violet-400)',
                gradient: 'linear-gradient(135deg, var(--color-violet-500), var(--color-pink-500))',
                badge: 'background: rgba(139, 92, 246, 0.2); color: rgb(167, 139, 250); border: 1px solid rgba(139, 92, 246, 0.3)',
                shadow: 'rgba(139, 92, 246, 0.3)'
            }
        };
        return colors[color] || colors.cyan;
    };
    
    const featured = projects.filter(p => p.featured);
    const other = projects.filter(p => !p.featured);
    
    const featuredHTML = `
        <div class="projects-featured">
            ${featured.map(project => {
                const colors = getColorClasses(project.color);
                return `
                    <article class="project-card" style="background: ${colors.bg}; border-color: ${colors.border};">
                        <div style="position: absolute; top: -0.75rem; right: -0.75rem; z-index: 20;">
                            <div style="padding: 0.5rem 1rem; background: ${colors.gradient}; color: var(--color-black); font-weight: 900; font-size: 0.75rem; border-radius: 9999px; box-shadow: 0 10px 15px -3px ${colors.shadow}; display: flex; align-items: center; gap: 0.25rem;">
                                <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
                                </svg>
                                DESTACADO
                            </div>
                        </div>
                        <div style="position: relative; height: 12rem; overflow: hidden; border-radius: 1.5rem 1.5rem 0 0;">
                            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                            <div style="position: absolute; inset: 0; background: ${colors.bg}; opacity: 0.8;"></div>
                            <div style="position: absolute; top: 1rem; left: 1rem;">
                                <div style="width: 3rem; height: 3rem; background: ${colors.bg}; border: 1px solid ${colors.border}; backdrop-filter: blur(12px); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                    <svg style="width: 1.5rem; height: 1.5rem; color: ${colors.text};" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 2rem;">
                            <h3 style="font-size: 1.5rem; font-weight: 900; color: var(--color-white); margin-bottom: 1rem;">
                                ${project.title}
                            </h3>
                            <p style="color: var(--color-zinc-400); margin-bottom: 1.5rem; line-height: 1.75;">
                                ${project.description}
                            </p>
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                                <svg style="width: 1rem; height: 1rem; color: ${colors.text};" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span style="font-size: 0.875rem; font-weight: 700; color: ${colors.text};">
                                    ${project.impact}
                                </span>
                            </div>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                                ${project.tags.map(tag => `
                                    <span style="padding: 0.25rem 0.75rem; ${colors.badge}; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600;">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                            <div style="display: flex; gap: 0.75rem;">
                                <button style="flex: 1; padding: 0.75rem 1rem; background: ${colors.gradient}; color: var(--color-black); font-weight: 700; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: all 0.3s ease;">
                                    <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    Ver Demo
                                </button>
                                <button style="padding: 0.75rem 1rem; border: 1px solid ${colors.border}; color: ${colors.text}; font-weight: 700; border-radius: 0.75rem; transition: all 0.3s ease;">
                                    <svg style="width: 1.25rem; height: 1.25rem;" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                `;
            }).join('')}
        </div>
    `;
    
    const otherHTML = `
        <div class="projects-other">
            ${other.map(project => {
                const colors = getColorClasses(project.color);
                return `
                    <article class="project-card" style="background: ${colors.bg}; border-color: ${colors.border};">
                        <div style="position: relative; height: 10rem; overflow: hidden; border-radius: 1rem 1rem 0 0;">
                            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                            <div style="position: absolute; inset: 0; background: ${colors.bg}; opacity: 0.7;"></div>
                            <div style="position: absolute; top: 0.75rem; left: 0.75rem;">
                                <div style="width: 2.5rem; height: 2.5rem; background: ${colors.bg}; border: 1px solid ${colors.border}; backdrop-filter: blur(12px); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
                                    <svg style="width: 1.25rem; height: 1.25rem; color: ${colors.text};" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 1.5rem;">
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-white); margin-bottom: 0.75rem;">
                                ${project.title}
                            </h3>
                            <p style="font-size: 0.875rem; color: var(--color-zinc-400); margin-bottom: 1rem; line-height: 1.625; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                                ${project.description}
                            </p>
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                                <svg style="width: 0.75rem; height: 0.75rem; color: ${colors.text};" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span style="font-size: 0.75rem; font-weight: 700; color: ${colors.text};">
                                    ${project.impact}
                                </span>
                            </div>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                                ${project.tags.slice(0, 3).map(tag => `
                                    <span style="padding: 0.25rem 0.5rem; ${colors.badge}; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 600;">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                            <button style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid ${colors.border}; color: ${colors.text}; font-weight: 600; font-size: 0.875rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; gap: 0.25rem; transition: all 0.3s ease;">
                                <svg style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Ver más
                            </button>
                        </div>
                    </article>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = featuredHTML + otherHTML;
}

function renderEducation() {
    const container = document.getElementById('education-list');
    if (!container) return;
    
    container.innerHTML = education.map((edu, index) => {
        const isCyan = edu.color === 'cyan';
        const bgGradient = isCyan 
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))'
            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1))';
        const borderColor = isCyan ? 'rgba(6, 182, 212, 0.3)' : 'rgba(168, 85, 247, 0.3)';
        const textColor = isCyan ? 'var(--color-cyan-400)' : 'var(--color-purple-400)';
        const badgeGradient = isCyan
            ? 'linear-gradient(135deg, var(--color-cyan-500), var(--color-blue-500))'
            : 'linear-gradient(135deg, var(--color-purple-500), var(--color-violet-500))';
        const orbGradient = isCyan
            ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))'
            : 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.2))';
        
        return `
            <article class="education-card" style="position: relative; background: ${bgGradient}; border: 1px solid ${borderColor}; border-radius: 1.5rem; padding: 2.5rem; overflow: hidden; transition: all 0.5s ease;">
                <div style="position: absolute; top: 0; right: 0; width: 16rem; height: 16rem; background: ${orbGradient}; border-radius: 50%; filter: blur(80px); transform: translate(8rem, -8rem); opacity: 0.5; pointer-events: none;"></div>
                
                <div style="position: relative; z-index: 10;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                        <div class="education-header" style="display: flex; align-items: flex-start; gap: 1rem;">
                            <div class="education-icon" style="width: 4rem; height: 4rem; background: ${bgGradient}; border: 1px solid ${borderColor}; border-radius: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                <svg style="width: 2rem; height: 2rem; color: ${textColor};" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="education-info" style="flex: 1;">
                                <h3 style="font-size: 1.5rem; font-weight: 900; color: var(--color-white); margin-bottom: 0.5rem;">
                                    ${edu.degree}
                                </h3>
                                <p style="font-size: 1.125rem; font-weight: 700; color: ${textColor}; margin-bottom: 0.25rem;">
                                    ${edu.institution}
                                </p>
                                <p style="font-size: 0.875rem; color: var(--color-zinc-400);">
                                    ${edu.location}
                                </p>
                            </div>
                            <div class="education-year" style="padding: 0.5rem 1rem; background: ${badgeGradient}; color: var(--color-black); font-weight: 900; font-size: 0.875rem; border-radius: 0.75rem; flex-shrink: 0;">
                                ${edu.year}
                            </div>
                        </div>
                    </div>
                    
                    <p style="color: var(--color-zinc-300); margin-bottom: 1.5rem; line-height: 1.75;">
                        ${edu.description}
                    </p>
                    
                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        ${edu.highlights.map(highlight => `
                            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                <div style="width: 1.5rem; height: 1.5rem; background: ${badgeGradient}; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.125rem;">
                                    <svg style="width: 1rem; height: 1rem; color: var(--color-black);" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 15l-2 2-2-2m4-10v10m0 0l2-2m-2 2l-2-2" stroke-linecap="round"/>
                                        <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"/>
                                    </svg>
                                </div>
                                <p style="font-size: 0.875rem; color: var(--color-zinc-300);">
                                    ${highlight}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function renderAdditionalLearning() {
    const container = document.getElementById('learning-list');
    if (!container) return;
    
    container.innerHTML = additionalLearning.map(course => `
        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(244, 114, 182, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 1rem; padding: 1.5rem; transition: all 0.3s ease;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">${course.icon}</div>
            <h4 style="font-size: 1.125rem; font-weight: 700; color: var(--color-white); margin-bottom: 0.5rem;">
                ${course.title}
            </h4>
            <p style="font-size: 0.875rem; color: var(--color-violet-400); font-weight: 600; margin-bottom: 0.5rem;">
                ${course.provider}
            </p>
            <p style="font-size: 0.75rem; color: var(--color-zinc-400);">
                ${course.year}
            </p>
        </div>
    `).join('');
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        // Simulación de envío exitoso
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        
        // Resetear formulario
        form.reset();
    });
}

function initNavIndicator() {
    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.nav-indicator');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!indicator || navLinks.length === 0 || !navMenu) return;
    
    let lastKnownSection = 'hero';
    
    // Función para actualizar posición del indicador
    function updateIndicator(activeLink) {
        if (!activeLink) return;
        
        requestAnimationFrame(() => {
            const linkRect = activeLink.getBoundingClientRect();
            const menuRect = navMenu.getBoundingClientRect();
            const left = linkRect.left - menuRect.left;
            
            indicator.style.opacity = '1';
            indicator.style.width = `${linkRect.width}px`;
            indicator.style.transform = `translate3d(${left}px, 0, 0)`;
        });
    }
    
    // Inicializar
    setTimeout(() => {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) updateIndicator(activeLink);
    }, 100);
    
    // Click en links - inmediato
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href').substring(1);
            lastKnownSection = href;
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            updateIndicator(link);
        });
    });
    
    // Scroll - más lento y estable
    const sections = Array.from(document.querySelectorAll('section[id]'));
    let scrollTimer;
    let isUpdating = false;
    
    function checkActiveSection() {
        if (isUpdating) return;
        
        const scrollPos = window.scrollY + window.innerHeight / 3;
        let newSection = null;
        
        // Encontrar la sección visible
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                newSection = section.getAttribute('id');
                break;
            }
        }
        
        // Solo actualizar si realmente cambió y no es el mismo
        if (newSection && newSection !== lastKnownSection) {
            isUpdating = true;
            lastKnownSection = newSection;
            
            const targetLink = document.querySelector(`.nav-link[href="#${newSection}"]`);
            if (targetLink) {
                navLinks.forEach(l => l.classList.remove('active'));
                targetLink.classList.add('active');
                updateIndicator(targetLink);
            }
            
            setTimeout(() => {
                isUpdating = false;
            }, 400);
        }
    }
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(checkActiveSection, 100);
    }, { passive: true });
    
    // Resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const active = document.querySelector('.nav-link.active');
            if (active) updateIndicator(active);
        }, 200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    
    renderCertifications();
    renderProjects();
    renderEducation();
    renderAdditionalLearning();
    
    initContactForm();
    
    initNavIndicator();
    
    console.log('Portfolio initialized successfully!');
});
