
    document.addEventListener("DOMContentLoaded", function () {
        const backToTopButton = document.getElementById("backToTop");

        // Mostrar ou ocultar o botão ao rolar a página
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // Aparece após 300px
                backToTopButton.style.display = "flex"; // Exibe o botão
            } else {
                backToTopButton.style.display = "none"; // Oculta o botão
            }
        });

        // Rolar suavemente para o topo ao clicar no botão
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("darkModeToggle");
        const body = document.body;

        // Verifica se há uma preferência salva no localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
        }

        toggleButton.addEventListener("click", () => {
            // Alterna a classe no body
            body.classList.toggle("dark-mode");

            // Salva a preferência no localStorage
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    });

