// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    const originalBackground = 'rgba(28, 28, 30, 0.7)';
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const shine = `radial-gradient(circle at ${x}px ${y}px, rgba(0,255,178,0.1) 0%, rgba(255,255,255,0) 80%)`;
        card.style.background = `${shine}, ${originalBackground}`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = originalBackground;
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