document.addEventListener('DOMContentLoaded', function () {
  const ctaBtn = document.querySelector('.cta-btn');
  
  ctaBtn.addEventListener('click', function () {
    window.scrollTo({
      top: document.querySelector('#games').offsetTop,
      behavior: 'smooth'
    });
  });
});
