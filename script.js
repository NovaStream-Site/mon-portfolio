document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyMessage = document.getElementById('copy-message');
    const emailToCopy = "justinfraitureecole@gmail.com"; // L'email à copier

    // Lucide Icons (SVG strings)
    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>`;
    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
    const clipboardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`;
    
    // Set initial theme based on localStorage or default to 'dark'
    let currentTheme = localStorage.getItem('theme') || 'dark';

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark');
            body.classList.remove('light');
            body.classList.replace('bg-gray-50', 'bg-gray-900');
            body.classList.replace('text-gray-800', 'text-gray-100');

            document.querySelector('header').classList.replace('bg-white', 'bg-gray-800');
            document.querySelector('header').classList.replace('border-gray-200', 'border-gray-700');
            
            document.querySelector('#home').classList.replace('bg-gray-50', 'bg-gray-900');
            
            document.querySelector('#about').classList.replace('bg-gray-50', 'bg-gray-900');
            document.querySelector('#about > div > div').classList.replace('bg-white', 'bg-gray-800');
            document.querySelector('#about > div > div').classList.replace('border-gray-200', 'border-gray-700');

            document.querySelector('#skills').classList.replace('bg-gray-50', 'bg-gray-900');
            document.querySelectorAll('#skills-container > div').forEach(el => {
                el.classList.replace('bg-white', 'bg-gray-800');
                el.classList.replace('border-gray-200', 'border-gray-700');
            });

            document.querySelector('#projects').classList.replace('bg-gray-50', 'bg-gray-900');
            document.querySelectorAll('#projects-container > div').forEach(el => {
                el.classList.replace('bg-white', 'bg-gray-800');
                el.classList.replace('border-gray-200', 'border-gray-700');
            });

            document.querySelector('#contact').classList.replace('bg-gray-50', 'bg-gray-900');
            document.querySelector('#contact > div > div').classList.replace('bg-white', 'bg-gray-800');
            document.querySelector('#contact > div > div').classList.replace('border-gray-200', 'border-gray-700');

            document.querySelectorAll('input, textarea').forEach(el => {
                el.classList.replace('bg-gray-100', 'bg-gray-700');
                el.classList.replace('border-gray-300', 'border-gray-600');
                el.classList.replace('text-gray-800', 'text-white');
            });
            document.querySelectorAll('.px-3.py-1.text-sm.rounded-full').forEach(el => { // Tech tags
                el.classList.replace('bg-gray-200', 'bg-gray-700');
                el.classList.replace('text-gray-700', 'text-gray-300');
            });
            document.querySelector('footer').classList.replace('bg-white', 'bg-gray-800');
            document.querySelector('footer').classList.replace('border-gray-200', 'border-gray-700');
            themeToggleBtn.classList.replace('bg-gray-200', 'bg-gray-700');
            themeToggleBtn.classList.replace('hover:bg-gray-300', 'hover:bg-gray-600');
            themeToggleBtn.innerHTML = sunIcon; // Set sun icon for dark mode
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            body.classList.replace('bg-gray-900', 'bg-gray-50');
            body.classList.replace('text-gray-100', 'text-gray-800'); // Text becomes black

            document.querySelector('header').classList.replace('bg-gray-800', 'bg-white');
            document.querySelector('header').classList.replace('border-gray-700', 'border-gray-200');

            document.querySelector('#home').classList.replace('bg-gray-900', 'bg-gray-50');

            document.querySelector('#about').classList.replace('bg-gray-900', 'bg-gray-50');
            document.querySelector('#about > div > div').classList.replace('bg-gray-800', 'bg-white');
            document.querySelector('#about > div > div').classList.replace('border-gray-700', 'border-gray-200');

            document.querySelector('#skills').classList.replace('bg-gray-900', 'bg-gray-50');
            document.querySelectorAll('#skills-container > div').forEach(el => {
                el.classList.replace('bg-gray-800', 'bg-white');
                el.classList.replace('border-gray-700', 'border-gray-200');
            });

            document.querySelector('#projects').classList.replace('bg-gray-900', 'bg-gray-50');
            document.querySelectorAll('#projects-container > div').forEach(el => {
                el.classList.replace('bg-gray-800', 'bg-white');
                el.classList.replace('border-gray-700', 'border-gray-200');
            });

            document.querySelector('#contact').classList.replace('bg-gray-900', 'bg-gray-50');
            document.querySelector('#contact > div > div').classList.replace('bg-gray-800', 'bg-white');
            document.querySelector('#contact > div > div').classList.replace('border-gray-700', 'border-gray-200');

            document.querySelectorAll('input, textarea').forEach(el => {
                el.classList.replace('bg-gray-700', 'bg-gray-100');
                el.classList.replace('border-gray-600', 'border-gray-300');
                el.classList.replace('text-white', 'text-gray-800');
            });
            document.querySelectorAll('.px-3.py-1.text-sm.rounded-full').forEach(el => {
                el.classList.replace('bg-gray-700', 'bg-gray-200');
                el.classList.replace('text-gray-300', 'text-gray-700');
            });
            document.querySelector('footer').classList.replace('bg-gray-800', 'bg-white');
            document.querySelector('footer').classList.replace('border-gray-700', 'border-gray-200');
            themeToggleBtn.classList.replace('bg-gray-700', 'bg-gray-200');
            themeToggleBtn.classList.replace('hover:bg-gray-600', 'hover:bg-gray-300');
            themeToggleBtn.innerHTML = moonIcon; // Set moon icon for light mode
        }
        localStorage.setItem('theme', theme);
    };

    // Apply theme on initial load
    applyTheme(currentTheme);

    // Theme Toggle Functionality
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Scroll to Top Button Functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Copy Email Functionality
    copyEmailBtn.addEventListener('click', () => {
        const tempInput = document.createElement('textarea');
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyMessage.classList.remove('hidden');
        setTimeout(() => {
            copyMessage.classList.add('hidden');
        }, 2000); // Hide message after 2 seconds
    });


    // Data for skills and projects (formerly in React component)
    const skillsData = [
        { name: 'HTML5', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code text-blue-500"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
        { name: 'CSS3', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-blue-500"><path d="m12 16 .95-3.05 3.05-.95-3.05-.95L12 7l-.95 3.05L8 12l3.05.95L12 16Z"/><path d="m12 16-.95-3.05-3.05-.95 3.05-.95L12 7l-.95 3.05L8 12l3.05.95L12 16Z"/><path d="m2 16 10 6 10-6"/><path d="m2 12 10 6 10-6"/><path d="M2 8 12 2l10 6"/></svg>` },
        { name: 'JavaScript', icon: `<img src="https://placehold.co/48x48/000000/F7DF1E?text=JS" alt="JavaScript Icon" class="rounded-full" />` },
        { name: 'Git', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github text-blue-500"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.37-1-3.37.4-.94.4-2.17 0-3.18 0 0-1 0-3 1.25a6.68 6.68 0 0 0-4 0c-2-1.25-3-1.25-3-1.25a4.2 4.2 0 0 0-1 3.37c-.65.99-1 2.12-1 3.37 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>` },
        { name: 'Design Web', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase text-blue-500"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>` },
        { name: 'VSCode', icon: `<img src="https://placehold.co/48x48/000000/007ACC?text=VS" alt="VSCode Icon" class="rounded-full" />` },
    ];

    const projectsData = [
        {
            title: 'Application de Streaming',
            description: 'Une plateforme de streaming moderne avec système d’abonnement, accès au contenu en fonction des droits.',
            image: 'https://i.ibb.co/d0nds7y2/Capture.png',
            github: 'https://github.com/NovaStream-Site/NovaStream',
            demo: 'https://urlr.me/PAYzdb',
            tech: ['React', 'Node.js', 'Vite']
        },
        {
            title: 'Mon Site Portfolio ',
            description: 'Un portfolio personnel conçu pour être entièrement responsif et présenter mes compétences et projets.',
            image: 'https://i.ibb.co/rLd131C/Capture.png',
            github: 'https://github.com/NovaStream-Site/mon-portfolio',
            demo: 'https://novastream-site.github.io/mon-portfolio/',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Site de Gestion de Tâches',
            description: 'Un site web intuitive pour organiser et suivre les tâches quotidiennes avec authentification utilisateur.',
            image: 'https://i.ibb.co/hJkGqqqS/Capture.png',
            github: 'https://github.com/NovaStream-Site/Gestion-de-Taches',
            demo: 'https://novastream-site.github.io/Gestion-de-Taches/',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Petit Site Web (HTML/CSS/JS)',
            description: 'Un exemple de petit site web statique, démontrant les bases du développement front-end.',
            image: 'https://placehold.co/600x400/339966/FFFFFF?text=Small+Website',
            github: 'https://github.com/your-username/small-website-project',
            demo: 'https://your-demo-link.com/small-website',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Jeu en C++',
            description: 'Un petit jeu développé en C++, explorant les concepts de la programmation orientée objet et la logique de jeu.',
            image: 'https://placehold.co/600x400/996633/FFFFFF?text=C++Game',
            github: 'https://github.com/your-username/cpp-game-project',
            demo: 'https://your-demo-link.com/cpp-game',
            tech: ['C++']
        },
    ];

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach(skill => {
        const skillDiv = document.createElement('div');
        // Initial class based on currentTheme
        const bgColorClass = currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white';
        const borderColorClass = currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200';

        skillDiv.className = `flex flex-col items-center p-4 rounded-lg shadow-md ${bgColorClass} ${borderColorClass} border transition-all duration-300 hover-scale hover-shadow`;
        skillDiv.innerHTML = `
            ${skill.icon}
            <p class="mt-4 text-lg font-semibold text-center">${skill.name}</p>
        `;
        skillsContainer.appendChild(skillDiv);
    });

    // Render Projects
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const projectDiv = document.createElement('div');
        // Initial class based on currentTheme
        const bgColorClass = currentTheme === 'dark' ? 'bg-gray-800' : 'bg-white';
        const borderColorClass = currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200';

        projectDiv.className = `rounded-lg shadow-lg overflow-hidden ${bgColorClass} ${borderColorClass} border transition-all duration-300 hover-scale hover-shadow`;
        
        const techTagsHtml = project.tech.map(tech => {
            const techBgClass = currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-200';
            const techTextColorClass = currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700';
            return `
                <span class="px-3 py-1 text-sm rounded-full ${techBgClass} ${techTextColorClass}">
                    ${tech}
                </span>
            `;
        }).join('');

        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/CCCCCC/333333?text=Image+Non+Trouvée';" />
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${techTagsHtml}
                </div>
                <div class="flex justify-between items-center mt-4">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-500 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.37-1-3.37.4-.94.4-2.17 0-3.18 0 0-1 0-3 1.25a6.68 6.68 0 0 0-4 0c-2-1.25-3-1.25-3-1.25a4.2 4.2 0 0 0-1 3.37c-.65.99-1 2.12-1 3.37 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
                    </a>
                    ${project.demo ? `
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="flex items-center text-blue-500 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send mr-2"><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg> Démo
                    </a>
                    ` : ''}
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectDiv);
    });
});
