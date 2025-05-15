const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
let petals = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < 100; i++) {
    petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * 1,
    })
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f38ba8'
    ctx.beginPath();
    for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
}

function update() {
    for (let i = 1; i < petals.length; i++) {
        const p = petals[i]
        p.y += p.d;
        if (p.y > canvas.height) {
            petals[i] = { x: Math.random() * canvas.width, y: 0, r:p.r, d: p.d };
        }
    }
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}
animate();
