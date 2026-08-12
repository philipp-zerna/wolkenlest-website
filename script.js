document.addEventListener('DOMContentLoaded', function() {
    // Header scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(248, 245, 240, 0.98)';
        } else {
            header.style.background = 'rgba(248, 245, 240, 0.9)';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Color swatches
    document.querySelectorAll('.swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Cart counter
    let count = 0;
    const cartCount = document.querySelector('.cart-count');
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('Warenkorb') || btn.textContent.includes('shoppen')) {
            btn.addEventListener('click', function(e) {
                if (this.textContent.includes('Warenkorb')) {
                    e.preventDefault();
                    count++;
                    cartCount.textContent = count;
                    cartCount.style.transform = 'scale(1.3)';
                    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
                }
            });
        }
    });

    // Fade in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.benefit-item, .trust-item, .detail-large, .detail-small').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
