// web.js

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('.continent-menu a');

    // Adiciona um ouvinte de evento de passagem do mouse a cada link
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Adiciona a classe 'hover' ao link quando o mouse entra
            this.classList.add('hover');
        });

        link.addEventListener('mouseleave', function() {
            // Remove a classe 'hover' do link quando o mouse sai
            this.classList.remove('hover');
        });
    });
});

