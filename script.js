
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.setAttribute(
        'aria-expanded',
        nav.classList.contains('open')
    );
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    });
});

// Animaciones al aparecer los elementos en pantalla
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// Selección automática del plan contratado
document.querySelectorAll('.plan-button').forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.dataset.plan;
        document.getElementById('plan-select').value = plan;
    });
});

// Año automático del pie de página
document.getElementById('year').textContent =
    new Date().getFullYear();
