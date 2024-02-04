// Função para girar a imagem continuamente
function rotateImage() {
    const imgElement = document.getElementById('rotatingImage');
    let currentRotation = 0;
    let rotationSpeed = 13;  // Velocidade inicial de rotação

    function animate() {
        // Ajustar a velocidade de rotação para criar desaceleração
        rotationSpeed *= 0.97;  // Você pode ajustar esse fator para controlar a taxa de desaceleração

        // Incrementar o ângulo de rotação
        currentRotation += rotationSpeed;

        // Aplicar a rotação à imagem
        imgElement.style.transform = `rotate(${currentRotation}deg)`;

        // Se a velocidade for suficientemente baixa, pare a animação
        if (Math.abs(rotationSpeed) > 0.1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// Chamando a função para iniciar a rotação
rotateImage();

window.addEventListener('load', function () {
    setTimeout(function() {
        window.location.replace('home.html');
    }, 1350);
});