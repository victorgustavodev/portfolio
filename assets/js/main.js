document.addEventListener("DOMContentLoaded", function() {
    var buttonToTop = document.getElementById("button-to-top");

    // Oculta o botão de scroll inicialmente
    buttonToTop.style.display = "none";

    // Adiciona um evento de rolagem à janela
    window.addEventListener("scroll", function() {
        // Verifica se a posição de rolagem é maior que 100 pixels (ou qualquer outro valor que você preferir)
        if (window.scrollY > 400) {
            // Se sim, exibe o botão de scroll
            buttonToTop.style.display = "block";
        } else {
            // Se não, oculta o botão de scroll
            buttonToTop.style.display = "none";
        }
    });

    // Adiciona um evento de clique à imagem
    buttonToTop.addEventListener("click", function() {
        // Faz a página rolar até o topo com uma animação suave
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
