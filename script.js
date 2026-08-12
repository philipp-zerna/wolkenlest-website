/**
 * Wolkennest — Premium Baby Brand
 * Minimal, elegant interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll behavior
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            const spans = this.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translateY(3.5px)';
                spans[1].style.transform = 'rotate(-45deg) translateY(-3.5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.transform = 'none';
            }
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
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Color swatch selection
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            colorSwatches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Cart functionality
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('entdecken') || btn.textContent.includes('In den Warenkorb')) {
            btn.addEventListener('click', function(e) {
                if (this.textContent.includes('In den Warenkorb')) {
                    e.preventDefault();
                }
                count++;
                if (cartCount) {
                    cartCount.textContent = count;
                    cartCount.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        cartCount.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        }
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            const button = this.querySelector('button');
            
            if (input.value) {
                const originalText = button.textContent;
                button.textContent = 'Angemeldet';
                button.style.background = '#5A6573';
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
    
    // Observe elements for subtle reveal
    document.querySelectorAll('.feature-item, .detail-item, .step-item, .story-content').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
