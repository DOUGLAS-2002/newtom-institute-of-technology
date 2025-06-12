// contact.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Dropdown Menu Functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
        
        // For touch devices
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const content = this.querySelector('.dropdown-content');
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
                el.previousElementSibling.classList.remove('error');
            });
            
            // Validate First Name
            const firstName = document.getElementById('contactFirstName');
            if (!firstName.value.trim()) {
                document.getElementById('firstNameError').style.display = 'block';
                firstName.classList.add('error');
                isValid = false;
            }
            
            // Validate Last Name
            const lastName = document.getElementById('contactLastName');
            if (!lastName.value.trim()) {
                document.getElementById('lastNameError').style.display = 'block';
                lastName.classList.add('error');
                isValid = false;
            }
            
            // Validate Email if provided
            const email = document.getElementById('contactEmail');
            if (email.value.trim() && !validateEmail(email.value)) {
                document.getElementById('emailError').style.display = 'block';
                email.classList.add('error');
                isValid = false;
            }
            
            // Validate Phone
            const phone = document.getElementById('contactPhone');
            if (!phone.value.trim() || !validatePhone(phone.value)) {
                document.getElementById('phoneError').style.display = 'block';
                phone.classList.add('error');
                isValid = false;
            }
            
            // Validate Country
            const country = document.getElementById('contactCountry');
            if (!country.value) {
                document.getElementById('countryError').style.display = 'block';
                country.classList.add('error');
                isValid = false;
            }
            
            // Validate Course
            const course = document.getElementById('contactCourse');
            if (!course.value) {
                document.getElementById('courseError').style.display = 'block';
                course.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid - you would typically send data to server here
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            }
        });
    }

    // Helper functions for validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        // Simple validation for Kenyan phone numbers
        const re = /^(\+?254|0)[17]\d{8}$/;
        return re.test(phone);
    }

    // Initialize Google Map
    function initMap() {
        // Coordinates for Newton Institute of Technology (example coordinates for Nairobi)
        const location = { lat: -1.2921, lng: 36.8219 };
        
        // Create map centered at location
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 15,
            center: location,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 13
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#08304b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0c4152"
                        },
                        {
                            "lightness": 5
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b434f"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b3d51"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#146474"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]
        });
        
        // Add marker
        new google.maps.Marker({
            position: location,
            map: map,
            title: 'Newton Institute of Technology',
            icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
            }
        });
    }

    // Load Google Maps API
    function loadGoogleMaps() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.defer = true;
        script.async = true;
        document.head.appendChild(script);
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Load Google Maps when in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadGoogleMaps();
            observer.unobserve(entries[0].target);
        }
    }, { threshold: 0.1 });

    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
        observer.observe(mapSection);
    }

    // Make global for Google Maps callback
    window.initMap = initMap;
});