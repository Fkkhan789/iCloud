// Simple click tracker and logging effect to give a premium feel
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const toolName = this.querySelector('h3').innerText;
        console.log(`%c[Ahsan Tool Hub] User clicked on: ${toolName}`, "color: #ff007f; font-weight: bold;");
    });
});

// Dynamic background color shifting logic
const glowEffect = document.querySelector('.background-glow');
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 50;
    const y = (e.clientY / window.innerHeight) * 50;
    glowEffect.style.transform = `translate(${x}px, ${y}px)`;
});

