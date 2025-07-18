// Product click functionality
document.addEventListener('DOMContentLoaded', function() {
  const produtoItems = document.querySelectorAll('.produto-item');
  
  produtoItems.forEach(item => {
    item.addEventListener('click', function() {
      const link = this.getAttribute('data-link');
      if (link) {
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
          window.open(link, '_blank');
        }, 150);
      }
    });
  });
});

