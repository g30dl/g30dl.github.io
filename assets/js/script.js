// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Hamburger menu
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Dynamic footer year
const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = `\u00a9 ${new Date().getFullYear()} - P\u00e1gina Curriculum Vitae Geovanny Diaz | ESPOL`;
}

// Contact form validation
const form = document.getElementById('contact-form');

if (form) {
    const fields = {
        nombre:  { el: document.getElementById('nombre'),  error: document.getElementById('nombre-error')  },
        email:   { el: document.getElementById('email'),   error: document.getElementById('email-error')   },
        asunto:  { el: document.getElementById('asunto'),  error: document.getElementById('asunto-error')  },
        mensaje: { el: document.getElementById('mensaje'), error: document.getElementById('mensaje-error') },
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(field, msg) {
        field.el.classList.add('field-error');
        field.error.textContent = msg;
    }

    function clearError(field) {
        field.el.classList.remove('field-error');
        field.error.textContent = '';
    }

    function validateForm() {
        let valid = true;

        if (!fields.nombre.el.value.trim()) {
            showError(fields.nombre, 'El nombre es obligatorio.');
            valid = false;
        } else {
            clearError(fields.nombre);
        }

        if (!emailRegex.test(fields.email.el.value.trim())) {
            showError(fields.email, 'Ingres\u00e1 un correo electr\u00f3nico v\u00e1lido.');
            valid = false;
        } else {
            clearError(fields.email);
        }

        if (!fields.asunto.el.value.trim()) {
            showError(fields.asunto, 'El asunto es obligatorio.');
            valid = false;
        } else {
            clearError(fields.asunto);
        }

        if (fields.mensaje.el.value.trim().length < 10) {
            showError(fields.mensaje, 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        } else {
            clearError(fields.mensaje);
        }

        return valid;
    }

    Object.values(fields).forEach(field => {
        field.el.addEventListener('input', () => clearError(field));
    });

    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
    });
}
