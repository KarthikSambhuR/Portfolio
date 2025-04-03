const cursor = document.querySelector(".cursor-circle");
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
let easeFactor = 0.15;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    circleX += (mouseX - circleX) * easeFactor;
    circleY += (mouseY - circleY) * easeFactor;

    cursor.style.transform = `translate(${circleX - 10}px, ${circleY - 10}px)`;

    requestAnimationFrame(animate);
}

animate();