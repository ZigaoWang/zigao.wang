// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.background = 'rgba(0, 113, 227, 0.08)';
        card.style.transform = 'translateY(-4px)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(28, 28, 30, 0.7)';
        card.style.transform = 'none';
        card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Set initial language to English
    document.documentElement.lang = 'en';
    
    // Get language toggle buttons
    const langButtons = document.querySelectorAll('.language-btn');
    
    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Set the language attribute on the html element
            document.documentElement.lang = lang;
            
            // Store the selected language in localStorage
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // Check if user has a preferred language stored
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        // Set the stored language
        document.documentElement.lang = storedLang;
        
        // Update the active button
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === storedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Auto-detect browser language (as a fallback if no stored preference)
    if (!storedLang) {
        const browserLang = navigator.language.substring(0, 2);
        if (browserLang === 'zh') {
            document.documentElement.lang = 'zh';
            langButtons.forEach(btn => {
                if (btn.getAttribute('data-lang') === 'zh') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    }
});