  // Initialiser AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // Carousel functionality
        document.addEventListener('DOMContentLoaded', function() {
            const carouselItems = document.querySelectorAll('.carousel-item');
            const carouselDots = document.querySelectorAll('.carousel-dot');
            let currentIndex = 0;
            
            function showSlide(index) {
                // Hide all slides
                carouselItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Remove active class from all dots
                carouselDots.forEach(dot => {
                    dot.classList.remove('active');
                });
                
                // Show the selected slide
                carouselItems[index].classList.add('active');
                carouselDots[index].classList.add('active');
                currentIndex = index;
            }
            
            // Add click event to dots
            carouselDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Auto-rotate slides every 5 seconds
            setInterval(() => {
                let nextIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(nextIndex);
            }, 5000);
            
            // Tab functionality for webinaires
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabId = btn.getAttribute('data-tab');
                    
                    // Remove active class from all buttons and contents
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding content
                    btn.classList.add('active');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu');
            const navMenu = document.querySelector('nav ul');
            
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('show');
            });
            
            // Form submission
            const inscriptionForm = document.getElementById('inscription-form');
            inscriptionForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Merci pour votre inscription! Nous vous contacterons bientôt.');
                this.reset();
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('nav a, .btn').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        
                        const targetId = this.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        
                        if (targetSection) {
                            window.scrollTo({
                                top: targetSection.offsetTop - 80,
                                behavior: 'smooth'
                            });
                            
                            // Close mobile menu if open
                            navMenu.classList.remove('show');
                        }
                    }
                });
            });
        });