// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(15, 23, 42, 0.98)';
            navLinks.style.padding = '1rem';
            navLinks.style.borderRadius = '0 0 10px 10px';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:estifanoss.gebremedhin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client will open with the pre-filled message.');
            
            // Reset form
            this.reset();
        });

        // Typing animation for hero text
        function typeWriter(element, text, delay = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, delay);
                }
            }
            
            type();
        }

        // Initialize typing animation when page loads
        window.addEventListener('load', function() {
            const heroTitle = document.querySelector('.hero h1');
            const heroSubtitle = document.querySelector('.hero p');
            
            setTimeout(() => {
                typeWriter(heroTitle, 'Estifanos Gebremedhin', 80);
            }, 500);
            
            setTimeout(() => {
                typeWriter(heroSubtitle, 'Computer Science Student & Aspiring Software Engineer', 50);
            }, 2500);
        });

        // Add particle effect to hero section
        function createParticle() {
            const hero = document.querySelector('.hero');
            const particle = document.createElement('div');
            
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(96, 165, 250, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'float-up 8s linear infinite';
            
            hero.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-up {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create particles periodically
        setInterval(createParticle, 300);

        // Add dynamic color changing for skill tags
        function animateSkillTags() {
            const skillTags = document.querySelectorAll('.skill-tag');
            const colors = [
                'linear-gradient(45deg, #60a5fa, #34d399)',
                'linear-gradient(45deg, #f59e0b, #ef4444)',
                'linear-gradient(45deg, #8b5cf6, #ec4899)',
                'linear-gradient(45deg, #10b981, #3b82f6)'
            ];
            
            skillTags.forEach((tag, index) => {
                setTimeout(() => {
                    const colorIndex = Math.floor(Math.random() * colors.length);
                    tag.style.background = colors[colorIndex];
                    tag.style.transition = 'background 0.5s ease';
                }, index * 100);
            });
        }

        // Animate skill tags every 5 seconds
        setInterval(animateSkillTags, 5000);

        // Add hover effect for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) scale(1)';
            });
        });

        // Add dynamic background for hero section
        function createBackgroundShapes() {
            const hero = document.querySelector('.hero');
            const shapes = ['circle', 'square', 'triangle'];
            const colors = ['rgba(96, 165, 250, 0.1)', 'rgba(52, 211, 153, 0.1)', 'rgba(139, 92, 246, 0.1)'];
            
            for (let i = 0; i < 5; i++) {
                const shape = document.createElement('div');
                const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 100 + 50;
                
                shape.style.position = 'absolute';
                shape.style.width = size + 'px';
                shape.style.height = size + 'px';
                shape.style.background = color;
                shape.style.left = Math.random() * 100 + '%';
                shape.style.top = Math.random() * 100 + '%';
                shape.style.pointerEvents = 'none';
                shape.style.zIndex = '1';
                
                if (shapeType === 'circle') {
                    shape.style.borderRadius = '50%';
                } else if (shapeType === 'triangle') {
                    shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                }
                
                shape.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
                hero.appendChild(shape);
            }
        }

        // Initialize background shapes
        createBackgroundShapes();

        // Add scroll progress indicator
        function createScrollProgress() {
            const progressBar = document.createElement('div');
            progressBar.style.position = 'fixed';
            progressBar.style.top = '0';
            progressBar.style.left = '0';
            progressBar.style.width = '0%';
            progressBar.style.height = '4px';
            progressBar.style.background = 'linear-gradient(45deg, #60a5fa, #34d399)';
            progressBar.style.zIndex = '9999';
            progressBar.style.transition = 'width 0.3s ease';
            
            document.body.appendChild(progressBar);
            
            window.addEventListener('scroll', function() {
                const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                progressBar.style.width = scrollProgress + '%';
            });
        }

        // Initialize scroll progress
        createScrollProgress();

        // Add active nav link highlighting
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }

        // Add CSS for active nav link
        const activeNavStyle = document.createElement('style');
        activeNavStyle.textContent = `
            .nav-links a.active {
                color: #60a5fa !important;
            }
            .nav-links a.active::after {
                width: 100% !important;
            }
        `;
        document.head.appendChild(activeNavStyle);

        // Update active nav link on scroll
        window.addEventListener('scroll', updateActiveNavLink);

        // Initialize active nav link
        updateActiveNavLink();