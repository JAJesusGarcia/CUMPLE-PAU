// Obtener la fecha actual en la zona horaria local
const now = new Date().getTime();

// Establecer la fecha de finalización en la zona horaria de Colombia (UTC-5)
const colombiaTime = new Date('2024-05-18T00:00:00-05:00');
const endDate = colombiaTime.getTime();

// Actualizar la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById('countdown').innerHTML = `
        <div>${days}d</div>
        <div>${hours}h</div>
        <div>${minutes}m</div>
        <div>${seconds}s</div>
    `;

    // Si la cuenta regresiva ha terminado, iniciar la animación de la lluvia de globos
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡Ha terminado la cuenta regresiva!";
        
        // Iniciar la animación de la lluvia de globos
        animateBalloons();
    }
}, 1000);

// Función para animar la lluvia de globos
function animateBalloons() {
    const tl = gsap.timeline({repeat: -1});
    const container = document.getElementById('balloon-container');

    // Crear 50 globos y añadirlos al contenedor
    for (let i = 0; i < 50; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        container.appendChild(balloon);
    }

    // Animación de los globos
    tl.to('.balloon', {
        y: -1000,
        duration: 5,
        stagger: {
            grid: 'auto',
            from: 'random',
            amount: 0.5
        },
        ease: 'power1.inOut'
    });
}
