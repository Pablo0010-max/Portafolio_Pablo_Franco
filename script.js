// Activar enlace del menú
const enlaces = document.querySelectorAll('nav ul li a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        const activo = document.querySelector('nav ul li a.active');
        if (activo) activo.classList.remove('active');
        this.classList.add('active');
    });
});

// Animación del mouse (siguiendo scroll)
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', `${e.pageX}px`);
    document.body.style.setProperty('--y', `${e.pageY}px`);
});
