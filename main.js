document.addEventListener('DOMContentLoaded', function() {
    // Sistema de navegación SPA (Single Page Application)
    const sectionLinks = document.querySelectorAll('.section-link');
    const sections = document.querySelectorAll('.section');
    
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener la sección a mostrar
            const sectionId = this.getAttribute('data-section');
            
            // Desactivar todas las secciones y enlaces
            sections.forEach(section => section.classList.remove('active'));
            sectionLinks.forEach(link => link.classList.remove('active'));
            
            // Activar la sección correcta y el enlace
            document.getElementById(sectionId).classList.add('active');
            this.classList.add('active');
            
            // Opcional: actualizar la URL con hash
            window.location.hash = sectionId;
            
            console.log(`Navegando a la sección: ${sectionId}`);
        });
    });
    
    // Manejo de hash en URL al cargar la página
    const handleHash = () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetLink = document.querySelector(`.section-link[data-section="${hash}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    };
    
    window.addEventListener('hashchange', handleHash);
    handleHash(); // Ejecutar al cargar la página
    
    // Dropdown functionality
    const dropdownBtn = document.querySelector('.dropdown-btn');
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', function() {
            // Implementar función de dropdown (mostrar/ocultar menú en móviles)
            console.log('Dropdown clicked');
        });
    }

    // Form submission handling
    const gameRequestForm = document.getElementById('game-request-form');
    
    if (gameRequestForm) {
        gameRequestForm.addEventListener('submit', function() {
            // Este evento ahora está simplemente para registrar que se envió el formulario
            // FormSubmit se encargará de procesar el envío y redirigir
            console.log('Formulario enviado a winrouletteestudios@gmail.com');
            
            // No prevenimos el evento por defecto para permitir que el formulario se envíe normalmente
        });
    }

    // Download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // No prevenimos el comportamiento por defecto para permitir la redirección
            const gameTitle = this.closest('.game-card').querySelector('.game-title').textContent;
            console.log('Redirigiendo a la descarga de:', gameTitle);
            
            // La redirección ocurrirá automáticamente gracias al href en el HTML
        });
    });
});