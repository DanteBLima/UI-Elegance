document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('swap');
    const mainContent = document.querySelector('main');
    const mainTitle = document.querySelector('.main-title');
    
    function updateContent(isBons) {
        if (isBons) {
    
            mainTitle.innerHTML = '<strong>Exemplos de Design Bom</strong>';
            
        } else {
            
            mainTitle.innerHTML = '<strong>Exemplos de Design Ruim</strong>';
            
        }
    }
    
    // Initial state setup
    updateContent(toggle.checked);
    
    toggle.addEventListener('change', (e) => {
        updateContent(e.target.checked);
    });
});

