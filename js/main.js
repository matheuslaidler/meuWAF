        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            
            // Change icon
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Language toggle (placeholder - would need actual translation implementation)
        //const languageToggle = document.getElementById('language-toggle');
        //const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
        //let currentLanguage = 'pt';
        
        //if (languageToggle) {
        //    languageToggle.addEventListener('click', () => {
        //        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
       //         languageToggle.textContent = currentLanguage === 'pt' ? 'PT' : 'EN';
                
                // In a real implementation, you would replace all text content with translations
             //   alert('Language switching functionality would be implemented here with actual translations');
        //    });
        //}
        
       // if (mobileLanguageToggle) {
        //    mobileLanguageToggle.addEventListener('click', () => {
         //       currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        //        mobileLanguageToggle.textContent = currentLanguage === 'pt' ? 'PT / EN' : 'EN / PT';
                
                // In a real implementation, you would replace all text content with translations
                //alert('Language switching functionality would be implemented here with actual translations');
        //   });
        //}
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Intersection Observer for fade-in animations
        const fadeElements = document.querySelectorAll('.fade-in-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
        
        // Add hover effect to buttons
        const buttons = document.querySelectorAll('.button-gradient, .bg-techblue, .bg-green-500');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = 'none';
            });
        });