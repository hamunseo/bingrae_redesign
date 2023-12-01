const headerTag = document.querySelectorAll('header');
const mainTag = document.querySelectorAll('.main_img')
const iceCream = document.querySelector('.ice-cream');
const category = document.querySelector('.category');
const items = document.querySelectorAll('.item');


items.forEach((item) => {
  const h3 = item.querySelector('h3');
  item.addEventListener('mouseenter', () => {
    h3.style.opacity = 1;
    item.style.transform = 'scale(1.2)';
    item.style.transition = "transform 0.4s ease-in-out, opacity 0.2s ease-in-out";
    
    
  });
  item.addEventListener('mouseleave', () => {
    h3.style.opacity = 0;
    item.style.transform = 'scale(1)';
    item.style.transition = "transform 0.4s ease-in-out, opacity 0.2s ease-in-out";
  });
});

