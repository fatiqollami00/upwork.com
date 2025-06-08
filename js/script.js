"use strict";
const menuIconEl = document.querySelector(".hamburger-menu");
const mobileMenuEl = document.querySelector(".mobile-menu");
const menusEl=document.querySelector(".menus");
const downIconEl=document.querySelector(".down-icon");
const slider = document.getElementById('slider');


menuIconEl.addEventListener("click", () => {
  mobileMenuEl.classList.add("active-menu");
});
window.addEventListener("click", (e) => {
  if (!e.target.closest(".hamburger-menu") && !e.target.closest(".menu-icon")) {
    mobileMenuEl.classList.remove("active-menu");
  }
});
const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
      
        items.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
      });
    });

    document.addEventListener('click', () => {
      items.forEach(item => item.classList.remove('active'));
    })
    
  function scrollSlider(direction) {
    const scrollAmount = 320
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }