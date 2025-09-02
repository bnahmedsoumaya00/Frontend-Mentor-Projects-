// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const projectCards = document.querySelectorAll('.project-card');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupIntersectionObserver();
    setupLoadingAnimations();
});
//comment test
// Initialize application
function initializeApp() {
    // Set initial active states
    setActiveSection('home');
    
    // Initialize theme
    initializeTheme();
    
    // Add loading animations
    document.body.classList.add('loading');
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Sidebar close button
    sidebarToggle.addEventListener('click', closeMobileMenu);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Project cards click
    projectCards.forEach(card => {
        card.addEventListener('click', handleProjectCardClick);
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', handleOutsideClick);
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe project cards and sections
    document.querySelectorAll('.project-card, .hero, .projects-overview').forEach(el => {
        observer.observe(el);
    });
}

// Setup loading animations
function setupLoadingAnimations() {
    const animatedElements = document.querySelectorAll('.project-card, .hero-title, .hero-subtitle, .stat');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('loading');
        
        setTimeout(() => {
            element.classList.add('loaded');
        }, 200 + (index * 100));
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    sidebar.classList.toggle('open');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    
    // Prevent body scroll when menu is open
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close mobile menu
function closeMobileMenu() {
    sidebar.classList.remove('open');
    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    document.body.style.overflow = '';
}

// Handle navigation link clicks
function handleNavClick(e) {
    e.preventDefault();
    
    const targetSection = e.target.closest('.nav-link').getAttribute('data-section');
    setActiveSection(targetSection);
    
    // Close mobile menu after navigation
    if (window.innerWidth <= 768) {
        closeMobileMenu();
    }
    
    // Add click animation
    e.target.closest('.nav-link').style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.target.closest('.nav-link').style.transform = '';
    }, 150);
}

// Handle project card clicks
function handleProjectCardClick(e) {
    const projectType = e.currentTarget.getAttribute('data-project');
    
    // Add click animation
    e.currentTarget.style.transform = 'scale(0.98)';
    setTimeout(() => {
        e.currentTarget.style.transform = '';
    }, 150);
    
    // Navigate to project section
    setTimeout(() => {
        if (projectType === 'browser-extensions') {
            setActiveSection('browser-extensions');
        } else if (projectType === 'recipe-page') {
            setActiveSection('recipe-page');
        }
    }, 200);
}

// Set active section
function setActiveSection(sectionId) {
    // Update nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Update content sections
    contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
            // Scroll to top of new section
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Update URL hash
    history.replaceState(null, null, `#${sectionId}`);
}

// Handle clicks outside sidebar on mobile
function handleOutsideClick(e) {
    if (window.innerWidth <= 768 && 
        sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
}

// Handle window resize
function handleResize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
        document.body.style.overflow = '';
    }
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeMobileMenu();
    }
    
    // Arrow key navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const activeLink = document.querySelector('.nav-link.active');
        const allLinks = Array.from(navLinks);
        const currentIndex = allLinks.indexOf(activeLink);
        
        let nextIndex;
        if (e.key === 'ArrowDown') {
            nextIndex = (currentIndex + 1) % allLinks.length;
        } else {
            nextIndex = (currentIndex - 1 + allLinks.length) % allLinks.length;
        }
        
        const nextSection = allLinks[nextIndex].getAttribute('data-section');
        setActiveSection(nextSection);
        e.preventDefault();
    }
}

// Open project in new tab/window
function openProject(projectPath) {
    // Add loading animation to button
    const btn = event.target.closest('.btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
    
    setTimeout(() => {
        // Since projects are now in the same directory as the portfolio
        const projectUrl = `./${projectPath}/index.html`;
        
        window.open(projectUrl, '_blank');
        
        // Reset button text
        btn.innerHTML = originalText;
    }, 1000);
}

// Open GitHub repository
function openGitHubRepo(projectName) {
    const btn = event.target.closest('.btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fab fa-github fa-spin"></i> Opening...';
    
    const githubUrls = {
        'browser-extensions': 'https://github.com/bnahmedsoumaya00/Frontend-Mentor-Projects-/tree/main/browser-extensions-manager-ui',
        'recipe-page': 'https://github.com/bnahmedsoumaya00/Frontend-Mentor-Projects-/tree/main/recipe-page'
    };
    
    setTimeout(() => {
        window.open(githubUrls[projectName], '_blank');
        btn.innerHTML = originalText;
    }, 800);
}

// Theme Management Functions
function initializeTheme() {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Add click animation
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 150);
}

function setTheme(theme) {
    // Update document attribute
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button
    updateThemeToggleButton(theme);
    
    // Add transition class for smooth theme switching
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 300);
}

function updateThemeToggleButton(theme) {
    if (theme === 'light') {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light Mode';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark Mode';
    }
}

// Smooth scrolling for better UX
function smoothScrollTo(element, duration = 800) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Add ripple effect to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const btn = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize based on URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'browser-extensions', 'recipe-page'].includes(hash)) {
        setActiveSection(hash);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    }
});

try {
    performanceObserver.observe({ entryTypes: ['navigation'] });
} catch (e) {
    // Performance Observer not supported
    console.log('Performance Observer not supported');
}

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
