document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('section');
  
  const onScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});
