// ===================
// MOBILE NAVIGATION
// ===================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===================
// SMOOTH SCROLL
// ===================

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

// ===================
// FORM HANDLING
// ===================

const betaForm = document.getElementById('beta-form');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');
const formContainer = document.querySelector('.form-container form');

// Form submission handler
betaForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(betaForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        watch: formData.get('watch'),
        equipment: formData.get('equipment'),
        frustration: formData.get('frustration')
    };

    // Basic validation
    if (!data.name || !data.email || !data.equipment) {
        showError();
        return;
    }

    // Email validation
    if (!isValidEmail(data.email)) {
        showError();
        return;
    }

    // FORMSPREE INTEGRATION
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Example: https://formspree.io/f/xvoeabcd
    const formspreeEndpoint = 'YOUR_FORM_ID'; // TODO: Replace with actual Formspree ID

    // Check if Formspree is configured
    if (formspreeEndpoint === 'YOUR_FORM_ID') {
        // Placeholder behavior - simulate success for testing
        console.log('Form submission (placeholder mode):', data);
        simulateSubmission();
        return;
    }

    // Real Formspree submission
    try {
        const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showSuccess();
            betaForm.reset();
        } else {
            showError();
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showError();
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccess() {
    formContainer.style.display = 'none';
    formError.style.display = 'none';
    formSuccess.style.display = 'block';

    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Show error message
function showError() {
    formError.style.display = 'block';
    formSuccess.style.display = 'none';

    // Scroll to error message
    formError.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Hide error after 5 seconds
    setTimeout(() => {
        formError.style.display = 'none';
    }, 5000);
}

// Simulate submission for placeholder mode
function simulateSubmission() {
    // Add a small delay to simulate network request
    setTimeout(() => {
        showSuccess();
        betaForm.reset();
    }, 500);
}

// ===================
// FORM INPUT ENHANCEMENTS
// ===================

// Add focus styling to form inputs
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Real-time email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = '#ef4444';
    } else {
        this.style.borderColor = '#e5e7eb';
    }
});

emailInput.addEventListener('input', function() {
    // Reset border color when user starts typing
    this.style.borderColor = '#e5e7eb';
});

// ===================
// SCROLL ANIMATIONS (Optional)
// ===================

// Add fade-in animation to sections on scroll
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

// Observe feature cards and testimonial cards
const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================
// CONSOLE MESSAGE
// ===================

console.log('%c🏃 Run+ Plans Website', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cBuilt with care for ElliptiGO and Cyclete owners', 'font-size: 12px; color: #10b981;');
console.log('%c\nTo configure Formspree:', 'font-weight: bold;');
console.log('1. Sign up at https://formspree.io');
console.log('2. Create a new form');
console.log('3. Replace YOUR_FORM_ID in script.js with your actual form ID');
console.log('\nQuestions? brad@runplusplans.com');
