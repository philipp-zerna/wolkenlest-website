/**
 * Wolkennest — Minimal, elegant interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const lines = this.querySelectorAll('.nav-toggle-line');
            if (!isExpanded) {
                lines[0].style.transform = 'rotate(45deg) translateY(3.5px)';
                lines[1].style.transform = 'rotate(-45deg) translateY(-3.5px)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            }
        });
        
        // Close menu on link click
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                const lines = navToggle.querySelectorAll('.nav-toggle-line');
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Cart functionality
    const cartCount = document.querySelector('.nav-cart-count');
    let count = 0;
    
    // Add to cart on product card click (placeholder)
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            count++;
            if (cartCount) {
                cartCount.textContent = count;
                cartCount.style.opacity = '0';
                setTimeout(() => {
                    cartCount.style.opacity = '1';
                }, 150);
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('.newsletter-input');
            const button = this.querySelector('.newsletter-button');
            
            if (input.value) {
                const originalText = button.textContent;
                button.textContent = 'Angemeldet';
                button.style.background = '#6B665E';
                input.value = '';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 3000);
            }
        });
    }
    
    // Subtle reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for subtle reveal
    document.querySelectorAll('.category-card, .product-card, .promise-item, .story-content').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});
